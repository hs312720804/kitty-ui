"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const u=require("./src/index.js"),t=require("vue"),o={install:e=>{u.default.forEach(r=>e.use(r))}};exports.default=o;Object.keys(t).forEach(e=>{e!=="default"&&!exports.hasOwnProperty(e)&&Object.defineProperty(exports,e,{enumerable:!0,get:()=>t[e]})});
