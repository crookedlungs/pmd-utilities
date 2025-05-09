import * as pmd from "../utilities.ts";

describe("assert", () => {
  it("should not throw if condition is true", () => {
    expect(() => pmd.SafetyUtilities.assert(true)).not.toThrow();
  });

  it("should throw if condition is false", () => {
    expect(() => pmd.SafetyUtilities.assert(false, "Fail")).toThrow("Fail");
  });
});

describe("isValid", () => {
  it("should not throw if value is not null/undefined", () => {
    expect(() => pmd.SafetyUtilities.isValid("hello")).not.toThrow();
  });

  it("should throw if value is null", () => {
    expect(() => pmd.SafetyUtilities.isValid(null)).toThrow(
      "Value is invalid!"
    );
  });

  it("should throw custom error message", () => {
    expect(() =>
      pmd.SafetyUtilities.isValid(undefined, "Custom error")
    ).toThrow("Custom error");
  });
});

describe("Option", () => {
  it("Some should wrap the value", () => {
    const opt = pmd.SafetyUtilities.Some("hello");
    expect(opt).toEqual({ kind: "some", value: "hello" });
  });

  it("None should return kind none", () => {
    const opt = pmd.SafetyUtilities.None();
    expect(opt).toEqual({ kind: "none" });
  });

  it("unwrapOr should return value from Some", () => {
    const value = pmd.SafetyUtilities.unwrapOr(pmd.SafetyUtilities.Some(42), 0);
    expect(value).toBe(42);
  });

  it("unwrapOr should return fallback from None", () => {
    const value = pmd.SafetyUtilities.unwrapOr(pmd.SafetyUtilities.None(), 99);
    expect(value).toBe(99);
  });
});

describe("Result", () => {
  it("Ok should return a successful result", () => {
    const result = pmd.SafetyUtilities.Ok(100);
    expect(result).toEqual({ ok: true, value: 100 });
  });

  it("Err should return a failure result", () => {
    const error = new Error("Oops");
    const result = pmd.SafetyUtilities.Err(error);
    expect(result).toEqual({ ok: false, error });
  });

  it("unwrapResult should return value from Ok", () => {
    const result = pmd.SafetyUtilities.Ok("Success!");
    expect(pmd.SafetyUtilities.unwrapResult(result)).toBe("Success!");
  });

  it("unwrapResult should throw error from Err", () => {
    const error = new Error("Failure");
    const result = pmd.SafetyUtilities.Err(error);
    expect(() => pmd.SafetyUtilities.unwrapResult(result)).toThrow(error);
  });
});
