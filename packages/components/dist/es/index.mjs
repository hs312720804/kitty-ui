import e from "./src/index.mjs";
export * from "vue";
const n = {
  install: (o) => {
    e.forEach((t) => o.use(t));
  }
};
export {
  n as default
};
