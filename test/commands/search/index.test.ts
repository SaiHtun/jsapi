import { expect, test } from "@oclif/test";

describe("[search] Expected to return HTML string", () => {
  test
    .stdout()
    .command(["search", "--type", "array", "--name", "filter"])
    .it("runs jsapi search -t array -n filter", (ctx) => {
      console.log("lol", ctx.stdout);
      expect(ctx.stdout).to.be.an("string");
    });
});
