import React, { useEffect } from "react";
import * as THREE from "three";
import { Water } from "./objects/Water";
import { Sky } from "./objects/Sky";
import { OrbitControls } from "./objects/OrbitControls";
import NoSSR from "react-no-ssr";

const CONTAINER_ID = "water-bg-container";
function RenderComponent({ children }) {
  useEffect(() => {
    let container = document.getElementById(CONTAINER_ID);

    let camera: THREE.PerspectiveCamera, scene, renderer;
    let controls, water, sun, mesh;
    if (!container) {
      return;
    }
    init();
    animate();

    function init() {
      renderer = new THREE.WebGLRenderer();
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(window.innerWidth, window.innerHeight);
      container.appendChild(renderer.domElement);

      scene = new THREE.Scene();

      camera = new THREE.PerspectiveCamera(
        55,
        window.innerWidth / window.innerHeight,
        1,
        20000
      );
      camera.position.set(30, 30, 100);
      sun = new THREE.Vector3();
      // Water
      const waterGeometry = new THREE.PlaneBufferGeometry(10000, 10000);

      water = new Water(waterGeometry, {
        textureWidth: 512,
        textureHeight: 512,
        waterNormals: new THREE.TextureLoader().load(
          "/textures/waternormals.jpg",
          function (texture) {
            texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
          }
        ),
        alpha: 1.0,
        sunDirection: new THREE.Vector3(),
        sunColor: 0xffffff,
        waterColor: 0x001e0f,
        distortionScale: 3.7,
        fog: scene.fog !== undefined,
      });

      water.rotation.x = -Math.PI / 2;

      scene.add(water);

      // Skybox

      const sky: any = new Sky();
      sky.scale.setScalar(10000);
      scene.add(sky);

      const skyUniforms = sky.material.uniforms;

      skyUniforms["turbidity"].value = 10;
      skyUniforms["rayleigh"].value = 2;
      skyUniforms["mieCoefficient"].value = 0.005;
      skyUniforms["mieDirectionalG"].value = 0.8;

      const parameters = {
        inclination: 0.51,
        azimuth: 0.205,
      };

      const pmremGenerator = new THREE.PMREMGenerator(renderer);

      function updateSun() {
        const theta = Math.PI * (parameters.inclination - 0.5);
        const phi = 2 * Math.PI * (parameters.azimuth - 0.5);

        sun.x = Math.cos(phi);
        sun.y = Math.sin(phi) * Math.sin(theta);
        sun.z = Math.sin(phi) * Math.cos(theta);

        sky.material.uniforms["sunPosition"].value.copy(sun);
        water.material.uniforms["sunDirection"].value.copy(sun).normalize();

        scene.environment = pmremGenerator.fromScene(sky).texture;
      }

      updateSun();

      const geometry = new THREE.BoxBufferGeometry(30, 30, 30);
      const material = new THREE.MeshStandardMaterial({ roughness: 0 });
      mesh = new THREE.Mesh(geometry, material);
      //   controls = new OrbitControls(camera, renderer.domElement);
      //   controls.maxPolarAngle = Math.PI * 0.495;
      //   controls.target.set(0, 10, 0);
      //   controls.minDistance = 40.0;
      //   controls.maxDistance = 200.0;
      //   controls.update();
      window.addEventListener("resize", onWindowResize, false);
    }

    function onWindowResize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    }

    function animate() {
      requestAnimationFrame(animate);
      render();
    }

    function render() {
      //   const time = performance.now() * 0.001
      water.material.uniforms["time"].value += 1.0 / 60.0;
      renderer.render(scene, camera);
    }
  }, []);

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        position: "relative",
        minHeight: "100vh",
        minWidth: "100vw",
      }}
    >
      <div
        id={CONTAINER_ID}
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: "100%",
          height: "100%",
          zIndex: 10,
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: "100%",
          height: "100%",
          zIndex: 11,
        }}
      >
        {children}
      </div>
    </div>
  );
}

function NossrComponent({ children }) {
  return (
    <NoSSR>
      <RenderComponent>{children}</RenderComponent>
    </NoSSR>
  );
}

const WaterBgLayout = React.memo(NossrComponent);
export default WaterBgLayout;
