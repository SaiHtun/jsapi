import { Command, Flags } from "@oclif/core";
import FetchService from "../../utils/fetchService";
import Spinner from "../../utils/spinner";
import { typePrompt, namePropmt } from "../../prompts/index";
import { textError, mint } from "../../constant/colors";

export default class Search extends Command {
  static description = "search JavaScript prototype methods quickly 🚀";

  static examples = [
    `$ jsapi search -t array -n filter`,
    `$ jsapi search -t string -n split`,
    `$ jsapi search ⤵  ${mint("Prompting interactive shell")}`,
  ];

  static usage: string | string[] | undefined = [
    "<command> [flags]",
    "<command> --help",
    "<command> --version",
  ];

  static flags = {
    type: Flags.string({
      char: "t",
      description: "Specify Javascript object type",
    }),
    name: Flags.string({
      char: "n",
      description: "Specify Javascript method name",
    }),
  };

  async catch(error: any) {
    if (error.response?.statusText === "Not Found") {
      const message = `${textError(
        "\nResult not found: Please specify the right type and name."
      )}\n\nTips 💡: \n 1. Use ${mint(
        "jsapi search "
      )}⤵️  to see all valid types and names.\n`;
      this.log(message);
    }
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(Search);

    if (!flags.type && !flags.name) {
      flags.type = await typePrompt();
      flags.name = await namePropmt(flags.type!);
    } else if (!flags.name) {
      flags.name = await namePropmt(flags.type!);
    }

    let url = `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/${flags.type}/${flags.name}`;

    Spinner.start("searching..");
    const htmlString = await FetchService.getJsExamples(url);
    this.log(htmlString);
    Spinner.stop("✅");
  }
}
