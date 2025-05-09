import * as pmd from "../utilities.ts";

describe("proSwitch", () => {
  it("should execute the matching case operation", () => {
    const spy = jest.fn();
    pmd.SwitchUtilities.proSwitch("red", [
      { value: "red", operation: spy },
      { value: "blue", operation: () => {} },
      { default: true, operation: () => {} },
    ]);
    expect(spy).toHaveBeenCalled();
  });

  it("should execute the default case if no match is found", () => {
    const spy = jest.fn();
    pmd.SwitchUtilities.proSwitch("green", [
      { value: "red", operation: () => {} },
      { value: "blue", operation: () => {} },
      { default: true, operation: spy },
    ]);
    expect(spy).toHaveBeenCalled();
  });
});

describe("proSwitchReturn", () => {
  it("should return the result of the matched case", () => {
    const result = pmd.SwitchUtilities.proSwitchReturn("blue", [
      { value: "red", operation: () => "Red" },
      { value: "blue", operation: () => "Blue" },
      { default: true, operation: () => "Default" },
    ]);
    expect(result).toBe("Blue");
  });

  it("should return the result of the default case if no match", () => {
    const result = pmd.SwitchUtilities.proSwitchReturn("yellow", [
      { value: "red", operation: () => "Red" },
      { value: "blue", operation: () => "Blue" },
      { default: true, operation: () => "Default" },
    ]);
    expect(result).toBe("Default");
  });

  it("should return undefined if no match and no default", () => {
    const result = pmd.SwitchUtilities.proSwitchReturn("yellow", [
      { value: "red", operation: () => "Red" },
      { value: "blue", operation: () => "Blue" },
    ]);
    expect(result).toBeUndefined();
  });
});
