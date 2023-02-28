import s from "./button.vue2.mjs";
import { openBlock as e, createElementBlock as o, normalizeClass as r, renderSlot as n, createCommentVNode as a } from "vue";
import l from "../../_virtual/_plugin-vue_export-helper.mjs";
const c = {
  key: 0,
  class: "k-button-text"
};
function m(t, p, u, f, d, i) {
  return e(), o("button", {
    class: r(["k-button", t.styleClass])
  }, [
    t.slots.default ? (e(), o("span", c, [
      n(t.$slots, "default")
    ])) : a("", !0)
  ], 2);
}
const b = /* @__PURE__ */ l(s, [["render", m]]);
export {
  b as default
};
