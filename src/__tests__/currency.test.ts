import * as pmd from "../utilities.ts";

describe("formatCurrency", () => {
  it("formats a number with default $ symbol", () => {
    expect(pmd.CurrencyUtilities.formatCurrency(10)).toBe("$10.00");
  });

  it("formats a number with a custom currency symbol", () => {
    expect(pmd.CurrencyUtilities.formatCurrency(10, "€")).toBe("€10.00");
  });

  it("handles decimals correctly", () => {
    expect(pmd.CurrencyUtilities.formatCurrency(3.456)).toBe("$3.46");
  });
});

describe("calculateTax", () => {
  it("calculates correct tax", () => {
    expect(pmd.CurrencyUtilities.calculateTax(100, 8.25)).toBe(8.25);
  });

  it("handles zero tax rate", () => {
    expect(pmd.CurrencyUtilities.calculateTax(100, 0)).toBe(0);
  });

  it("handles zero subtotal", () => {
    expect(pmd.CurrencyUtilities.calculateTax(0, 10)).toBe(0);
  });
});

describe("getTaxRateByState", () => {
  it("returns correct tax rate for known state", () => {
    expect(pmd.CurrencyUtilities.getTaxRateByState("TX")).toBe(0.0625);
  });

  it("returns undefined for unknown state", () => {
    expect(pmd.CurrencyUtilities.getTaxRateByState("ZZ")).toBeUndefined();
  });

  it("is case sensitive", () => {
    expect(pmd.CurrencyUtilities.getTaxRateByState("tx")).toBeUndefined();
  });
});

describe("calculateTotalWithTax", () => {
  test("calculates total with 8.25% tax", () => {
    expect(pmd.CurrencyUtilities.calculateTotalWithTax(100, 8.25)).toBe(108.25);
  });

  test("returns subtotal if tax rate is 0", () => {
    expect(pmd.CurrencyUtilities.calculateTotalWithTax(50, 0)).toBe(50.0);
  });
});

describe("parseCurrency", () => {
  test("parses standard currency string", () => {
    expect(pmd.CurrencyUtilities.parseCurrency("$1,234.56")).toBe(1234.56);
  });

  test("parses negative currency string with parentheses", () => {
    expect(pmd.CurrencyUtilities.parseCurrency("($-500.00)")).toBe(-500.0);
  });

  test("parses currency string without symbols", () => {
    expect(pmd.CurrencyUtilities.parseCurrency("123.45")).toBe(123.45);
  });
});

describe("convertCurrency", () => {
  test("converts currency with same rates", () => {
    expect(pmd.CurrencyUtilities.convertCurrency(10, 1, 1)).toBe(10.0);
  });

  test("converts USD to EUR", () => {
    expect(pmd.CurrencyUtilities.convertCurrency(10, 1, 0.85)).toBe(8.5);
  });

  test("converts GBP to JPY", () => {
    expect(pmd.CurrencyUtilities.convertCurrency(100, 1.2, 0.0075)).toBe(0.63);
  });
});
