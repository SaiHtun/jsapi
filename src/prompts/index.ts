const { AutoComplete } = require("enquirer");
import FetchService from "../utils/fetchService";
import { yellowItalic } from "../constant/colors";

export const typePrompt = async () => {
  return await new AutoComplete({
    name: "type",
    message: `Speicfy Javascript's object type. ${yellowItalic(
      "AutoComplete Support"
    )} ⚙️`,
    limit: 10,
    choices: await FetchService.getTypes(),
  }).run();
};

export const namePropmt = async (type: string) => {
  return await new AutoComplete({
    name: "name",
    message: `Speicfy Javascript's method name. ${yellowItalic(
      "AutoComplete Support"
    )} ⚙️`,
    limit: 10,
    choices: await FetchService.getNames(type),
  }).run();
};
