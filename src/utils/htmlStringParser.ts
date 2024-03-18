import cheerio from "cheerio";
import {
  yellow,
  yellowItalic,
  blueBold,
  dimItalic,
  gray,
  mint,
  white,
} from "../constant/colors";

export default class HtmlStringParser {
  static typeParser = (html: string): string[] => {
    const $ = cheerio.load(html);
    const types = $("#standard_objects").siblings("dd").first().find("a");
    const typeArray: string[] = [];
    types.each((i, type) => {
      typeArray.push($(type).text());
    });
    return typeArray;
  };

  static nameParser = (html: string): string[] => {
    const $ = cheerio.load(html);
    const names = $("#instance_methods").next("div").find("dt > a > code");
    const nameArray: string[] = [];
    names.each((_, name) => {
      let re = /\.\w+/gi;
      let matchedArray = $(name).text().match(re);
      if (matchedArray!.length > 1) {
        nameArray.push(matchedArray![1].replace(".", ""));
      }
    });
    return nameArray;
  };

  static async jsExamplesParser(html: string): Promise<string> {
    const $ = cheerio.load(html);
    const examples = $(".code-example").parent();

    $(examples)
      .find("span")
      .each((_, span) => {
        if ($(span).hasClass("language-name")) {
          $(span).remove();
        }
        if ($(span).hasClass("keyword")) {
          $(span).replaceWith(
            "<span>" + yellowItalic($(span).text()) + "</span>"
          );
        } else if ($(span).hasClass("function")) {
          $(span).replaceWith("<span>" + blueBold($(span).text()) + "</span>");
        } else if ($(span).hasClass("comment")) {
          $(span).replaceWith("<span>" + dimItalic($(span).text()) + "</span>");
        } else if ($(span).hasClass("operator")) {
          $(span).replaceWith("<span>" + white($(span).text()) + "</span>");
        } else if ($(span).hasClass("punctuation")) {
          $(span).replaceWith("<span>" + yellow($(span).text()) + "</span>");
        }
      });

    $(examples)
      .find("p")
      .each((_, p) => {
        $(p).replaceWith("<p>" + mint($(p).text()) + "</p>" + "\n\n");
      });

    for (const div of examples) {
      $(div).append(
        gray("\n==================================================\n\n")
      );
    }

    return examples.text();
  }
}
