import * as pmd from "../utilities.ts";

describe("clamp", () => {
  it("returns the value if it is within the range", () => {
    expect(pmd.NumberUtilities.clamp(50, 0, 100)).toBe(50);
  });

  it("clamps the value to the minimum", () => {
    expect(pmd.NumberUtilities.clamp(-10, 0, 100)).toBe(0);
  });

  it("clamps the value to the maximum", () => {
    expect(pmd.NumberUtilities.clamp(150, 0, 100)).toBe(100);
  });

  it("uses default min/max when omitted", () => {
    expect(pmd.NumberUtilities.clamp(120)).toBe(100);
  });
});

describe("formatPercentString", () => {
  it("adds a % symbol to a number", () => {
    expect(pmd.NumberUtilities.formatPercentString(25)).toBe("25%");
  });

  it("works with zero", () => {
    expect(pmd.NumberUtilities.formatPercentString(0)).toBe("0%");
  });

  it("works with negative values", () => {
    expect(pmd.NumberUtilities.formatPercentString(-5)).toBe("-5%");
  });
});

describe("genRandomInRange", () => {
  it("generates a number within the given range", () => {
    for (let i = 0; i < 100; i++) {
      const num = pmd.NumberUtilities.genRandomInRange(5, 10);
      expect(num).toBeGreaterThanOrEqual(5);
      expect(num).toBeLessThanOrEqual(10);
    }
  });
});
