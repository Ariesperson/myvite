import { presetUno, presetAttributify, presetIcons } from "unocss";
import Unocss from "unocss/vite";
const colors = [
    "white",
    "black",
    "gray",
    "red",
    "yellow",
    "green",
    "blue",
    "indigo",
    "purple",
    "pink",
  ];
  const safelist = [

    ...colors.map((v) => `bg-${v}-500`),//背景颜色类名
    ...colors.map((v) => `hover:bg-${v}-700`),//hover颜色类名
    ...[
        "search",
        "edit",
        "check",
        "message",
        "star-off",
        "delete",
        "add",
        "share",
      ].map((v) => `i-ic-baseline-${v}`),//图标
  ];
  export default () =>
  Unocss({
    safelist,
    presets: [
        presetUno(),
        presetAttributify(), 
        presetIcons(),  // 添加图标预设
    ],
  });  