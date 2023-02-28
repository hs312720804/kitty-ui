import "./style/index.css";
import { defineComponent as o, computed as s, useSlots as i } from "vue";
import { buttonProps as u } from "./types.mjs";
const m = o({
  name: "k-button",
  props: u,
  // components: { Icon },
  setup(t) {
    const e = s(() => ({
      [`k-button--${t.type}`]: t.type,
      "is-plain": t.plain,
      "is-round": t.round,
      "is-disabled": t.disabled,
      [`k-button--${t.size}`]: t.size
    })), n = i();
    return {
      styleClass: e,
      // Icon,
      // iconFont,
      slots: n
    };
  }
});
export {
  m as default
};
