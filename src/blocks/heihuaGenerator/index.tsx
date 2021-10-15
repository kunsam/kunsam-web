import React, { useState } from "react";
import KunsamLogo from "./kunsamLogo";
import HeihuaDanmu from "./heihuaDanmu";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { randomQZoneSentence, randomMarketingSentence } from "./heihuagen/mod";
import { ToastContainer, toast } from "react-toast";

export default function HeihuaGeneratorPage() {
  const [sentence, setsentence] = useState("");

  return (
    <div style={{ position: "relative" }}>
      <HeihuaDanmu />

      <div
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
        }}
      >
        <div style={{ width: "100vw", height: 100 }}>
          <KunsamLogo />
        </div>
      </div>

      <div
        style={{ display: "flex", justifyContent: "center", marginTop: 130 }}
      >
        <div
          onClick={() => {
            const rsen =
              Math.random() < 0.5
                ? randomQZoneSentence()
                : randomMarketingSentence();
            setsentence(rsen);
          }}
          style={{
            display: "inline-block",
            width: 250,
            border: "1px solid #000",
            textAlign: "center",
            padding: 10,
            boxShadow: "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",
          }}
        >
          点击生成一句网络用语
        </div>
      </div>

      <Modal
        center
        open={!!sentence}
        onClose={() => {
          setsentence("");
        }}
      >
        <div style={{ marginTop: 20 }}>{sentence}</div>
        <div
          style={{
            display: "flex",
            justifyContent: "end",
            marginTop: 20,
            gap: 10,
          }}
        >
          <button
            onClick={() => {
              toast.info("感谢喜欢，之后会放到弹幕里");
              setTimeout(() => {
                toast.hideAll();
              }, 1000);
            }}
          >
            喜欢
          </button>
          <button
            onClick={() => {
              setsentence("");
            }}
          >
            {" "}
            不喜欢
          </button>
          <CopyToClipboard
            text={sentence}
            onCopy={() => {
              setsentence("");
            }}
          >
            <button>复制</button>
          </CopyToClipboard>
        </div>
      </Modal>

      <ToastContainer />
    </div>
  );
}
