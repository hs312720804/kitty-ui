import run from "../utils/run";
import { pkgPath } from "../utils/paths";
import { series } from "gulp";
console.log('series=--->', series)
export const publishComponent = async () => {
  run("release-it", `${pkgPath}/components`);
};
export default series(async () => publishComponent());
