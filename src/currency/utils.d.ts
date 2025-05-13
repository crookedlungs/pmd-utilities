/**
 * Formats a number into a currency string.
 * @param amount The number to convert.
 * @param currency The currency symbol to prefix.
 * @returns A formatted string like "$5.00"
 * @example
 * formatCurrency(10) // "$10"
 */
export declare function formatCurrency(amount: number, currency?: string): string;
/**
 * Calculates the tax amount for a given subtotal and tax rate.
 *
 * @param subtotal The pre-tax amount.
 * @param taxRate The tax rate as a percentage (e.g., 8.25 for 8.25%).
 * @returns The tax amount, rounded to 2 decimal places.
 *
 * @example
 * const tax = calculateTax(100, 8.25);
 * console.log(tax); // Output: 8.25
 */
export declare function calculateTax(subtotal: number, taxRate: number): number;
/**
 * Gets the sales tax rate for a given US state code.
 *
 * @param state The 2-letter state abbreviation (e.g., 'CA', 'TX').
 * @returns The sales tax rate as a percentage, or `undefined` if not found.
 *
 * @example
 * const rate = getTaxRateByState("TX");
 * console.log(rate); // Output: 6.25 (if defined in stateTaxRates)
 */
export declare function getTaxRateByState(state: string): number | undefined;
/**
 * Calculates the total amount after applying tax.
 *
 * @param subtotal The original amount before tax.
 * @param taxRate The tax rate as a percentage.
 * @returns The total amount including tax, rounded to 2 decimal places.
 *
 * @example
 * const total = calculateTotalWithTax(100, 8.25);
 * console.log(total); // Output: 108.25
 */
export declare function calculateTotalWithTax(subtotal: number, taxRate: number): number;
/**
 * Parses a currency string (like "$1,234.56") into a number.
 *
 * @param currencyString The formatted currency string.
 * @returns A numeric value extracted from the string.
 *
 * @example
 * const amount = parseCurrency("$1,234.56");
 * console.log(amount); // Output: 1234.56
 *
 * @example
 * const negative = parseCurrency("($500.00)");
 * console.log(negative); // Output: -500 (if formatted correctly)
 */
export declare function parseCurrency(currencyString: string): number;
/**
 * Converts an amount from one currency rate to another.
 *
 * @param amount The amount to convert.
 * @param fromRate The exchange rate of the original currency (e.g., USD).
 * @param toRate The exchange rate of the target currency (e.g., EUR).
 * @returns The converted amount rounded to 2 decimal places.
 *
 * @example
 * // Convert $10 USD to EUR, where 1 USD = 1 and 1 EUR = 0.85
 * const converted = convertCurrency(10, 1, 0.85);
 * console.log(converted); // Output: 8.5
 *
 * @example
 * // Convert 100 GBP to JPY, where 1 GBP = 1.2 and 1 JPY = 0.0075
 * const yen = convertCurrency(100, 1.2, 0.0075);
 * console.log(yen); // Output: 0.63
 */
export declare function convertCurrency(amount: number, fromRate: number, toRate: number): number;
