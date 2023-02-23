"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const index = require("./withInstall/index.js");
const testfunc = (x, y) => {
  return x + y;
};
exports.withInstall = index;
exports.testfunc = testfunc;
