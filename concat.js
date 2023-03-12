const concat = require("concat");
(async function build() {
  const files = [
    "./dist/platform/runtime.js",
    "./dist/platform/polyfills.js",
    "./dist/platform/main.js",
  ];
  await concat(files, "./dist/platform/platform.js");
})();