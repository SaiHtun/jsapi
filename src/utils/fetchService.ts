import axios from "axios";
import HtmlStringParser from "./htmlStringParser";
import { yellowItalic } from "../constant/colors";
import Spinner from "./spinner";

export default class FetchService {
  static async getJsExamples(url: string): Promise<string> {
    const { data } = await axios.get(url);
    return HtmlStringParser.jsExamplesParser(data);
  }

  static getTypes = async () => {
    Spinner.start("searching type..");
    const { data } = await axios.get(
      "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
    );

    const typeArray = await HtmlStringParser.typeParser(data);
    const message =
      typeArray.length > 10
        ? yellowItalic("use down arrow key to see more results. ⬇️")
        : "✅";
    Spinner.stop(message);

    return typeArray;
  };

  static getNames = async (type: string) => {
    Spinner.start("searching name..");
    const { data } = await axios.get(
      `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/${type}`
    );
    const nameArray = await HtmlStringParser.nameParser(data);
    const message =
      nameArray.length > 10
        ? yellowItalic("use down arrow key to see more results. ⬇️")
        : "✅";
    Spinner.stop(message);

    return nameArray;
  };
}
