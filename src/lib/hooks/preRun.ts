import { Hook } from "@oclif/core";
import { hasInternet } from "../../utils/helper";
import { textError } from "../../constant/colors";

const hook: Hook<"preRun"> = async () => {
  let isTrue = await hasInternet();
  if (!isTrue) {
    console.log(textError("\n  📡  Please connect to the internet. 🔌 \n"));
  }
};

export default hook;
