const n = ["default", "primary", "success", "warning", "danger"], e = ["large", "normal", "small", "mini"], o = {
  type: {
    type: String,
    value: n
  },
  size: {
    type: String,
    value: e
  },
  plain: Boolean,
  round: Boolean,
  disabled: Boolean
};
export {
  e as ButtonSize,
  n as ButtonType,
  o as buttonProps
};
