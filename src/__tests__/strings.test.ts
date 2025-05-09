import * as pmd from "../utilities.ts";

describe("capitalize", () => {
  it("capitalizes the first letter of a lowercase word", () => {
    expect(pmd.StringUtilities.capitalize("hello")).toBe("Hello");
  });

  it("does not affect an already capitalized word", () => {
    expect(pmd.StringUtilities.capitalize("Hello")).toBe("Hello");
  });

  it("works with a single letter", () => {
    expect(pmd.StringUtilities.capitalize("h")).toBe("H");
  });

  it("returns an empty string unchanged", () => {
    expect(pmd.StringUtilities.capitalize("")).toBe("");
  });
});
