import DefaultTheme from "vitepress/theme";
import "./custom.styl";

// figlet -f big "Gsxacy"
console.log(
  `%c
   _____
  / ____|
 | |  __ _____  ____ _  ___ _   _
 | | |_ / __\ \/ / _\` |/ __| | | |
 | |__| \__ \>  < (_| | (__| |_| |
  \_____|___/_/\_\__,_|\___|\__, |
                             __/ |
                            |___/
`,
  "color: #42b983"
);
console.log(`%c微信/微博, 可添加：%cGsxacy`, "color: red", "color: #42b983");
export default DefaultTheme;
