import * as pmd from "../utilities.ts";

describe("pmd.NameUtilities.splitFullName", () => {
  test("splits full name and capitalizes by default", () => {
    const result = pmd.NameUtilities.splitFullName("john doe");
    expect(result).toEqual({ firstName: "John", last_name: "Doe" });
  });

  test("splits name without formatting", () => {
    const result = pmd.NameUtilities.splitFullName("john doe", false);
    expect(result).toEqual({ firstName: "john", last_name: "doe" });
  });

  test("handles single name input", () => {
    const result = pmd.NameUtilities.splitFullName("alice");
    expect(result).toEqual({ firstName: "Alice", last_name: "" });
  });

  test("handles empty input", () => {
    const result = pmd.NameUtilities.splitFullName("");
    expect(result).toEqual({ firstName: "", last_name: "" });
  });
});

describe("pmd.NameUtilities.mergeFullName", () => {
  test("merges names with formatting", () => {
    const result = pmd.NameUtilities.mergeFullName("john", "doe");
    expect(result).toBe("John Doe");
  });

  test("merges names without formatting", () => {
    const result = pmd.NameUtilities.mergeFullName("john", "doe", false);
    expect(result).toBe("john doe");
  });

  test("handles empty names", () => {
    const result = pmd.NameUtilities.mergeFullName("", "", false);
    expect(result).toBe(" ");
  });
});

describe("pmd.NameUtilities.formatNameWithPrefix", () => {
  test("formats name string with prefix", () => {
    const result = pmd.NameUtilities.formatNameWithPrefix("Jane Smith", "Dr");
    expect(result).toBe("Dr. Jane Smith");
  });

  test("formats name object with prefix", () => {
    const result = pmd.NameUtilities.formatNameWithPrefix(
      { firstName: "jane", lastName: "smith" },
      "Ms"
    );
    expect(result).toBe("Ms. Jane Smith");
  });

  test("formats empty object name", () => {
    const result = pmd.NameUtilities.formatNameWithPrefix(
      { firstName: "", lastName: "" },
      "Mr"
    );
    expect(result).toBe("Mr. John Doe");
  });
});
