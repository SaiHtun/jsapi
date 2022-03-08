import { CliUx } from "@oclif/core";
import { hasInternet } from "../utils/helper";

export default class Spinner {
  static start(message: string) {
    hasInternet().then((res) => {
      res && CliUx.ux.action.start(message);
    });
  }

  static stop(message: string) {
    CliUx.ux.action.stop(message);
  }
}
