const design_width = 375
// const design_height = 812 * 2
const divideNum = 10

export function MobileHDPx2Rem(px: number) {
  return `${(px * divideNum) / design_width}rem`
}
