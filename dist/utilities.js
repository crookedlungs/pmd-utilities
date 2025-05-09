import { stateTaxRates } from "./data/us-tax-rates.js";
// String Functions
/**
 * Converts or ensures a word is capitalized.
 * @param word The word to capitalize.
 * @returns The capitalized version of the `word` parameter.
 */
function capitalize(word) {
    let out = word.slice(0, 1);
    out = out.toUpperCase();
    return out + word.slice(1);
}
/**
 * Utility functions relevant to working with strings.
 */
export const StringUtilities = { capitalize };
// Numbers
/**
 * Formats a `number` as a `string` with a `%` sign suffix.
 * @param number The number to format.
 * @returns A formatted `%` string.
 */
function formatPercentString(number) {
    return `${number}%`;
}
/**
 * Utility functions relevant to working with numbers.
 */
export const NumberUtilities = { formatPercentString };
// Currency
/**
 * Formats a number into a currency string.
 * @param amount The number to convert.
 * @param currency The currency symbol to prefix.
 * @returns A formatted string like "$5.00"
 */
function formatCurrency(amount, currency = "$") {
    return `${currency}${amount.toFixed(2)}`;
}
/**
 * Calculates the tax amount for a given subtotal and tax rate.
 * @param subtotal The pre-tax amount.
 * @param taxRate The tax rate as a percentage (e.g., 8.25 for 8.25%).
 * @returns The tax amount.
 */
function calculateTax(subtotal, taxRate) {
    return +(subtotal * (taxRate / 100)).toFixed(2);
}
/**
 * Gets the sales tax rate for a given US state code.
 * @param stateCode The 2-letter state abbreviation (e.g., 'CA', 'TX').
 * @returns The sales tax rate as a percentage, or `null` if not found.
 */
function getTaxRateByState(state) {
    return stateTaxRates[state];
}
/**
 * Calculates the total amount after applying tax.
 * @param subtotal The original amount before tax.
 * @param taxRate The tax rate as a percentage.
 * @returns The total amount including tax.
 */
function calculateTotalWithTax(subtotal, taxRate) {
    return +(subtotal + calculateTax(subtotal, taxRate)).toFixed(2);
}
/**
 * Parses a currency string (like "$1,234.56") into a number.
 * @param currencyString The formatted currency string.
 * @returns A number value.
 */
function parseCurrency(currencyString) {
    return parseFloat(currencyString.replace(/[^0-9.-]+/g, ""));
}
/**
 * Converts an amount from one currency rate to another.
 * @param amount The amount to convert.
 * @param fromRate The rate of the original currency.
 * @param toRate The rate of the target currency.
 * @returns The converted amount.
 */
function convertCurrency(amount, fromRate, toRate) {
    return +(amount * (toRate / fromRate)).toFixed(2);
}
/**
 * Utility functions relevant to working with currency.
 */
export const CurrencyUtilities = {
    formatCurrency,
    calculateTax,
    calculateTotalWithTax,
    parseCurrency,
    convertCurrency,
    getTaxRateByState,
};
// Date Functions
/**
 * Parses a date from mmddyyy format into a JS `Date` locale string.
 * @param input A date in mmddyyyy format.
 * @param locale The locale to use for formatting. Defaults to `en-US`.
 * @returns A `Date` locale string.
 */
function dateFromString(input, locale = "en-US") {
    const month = input.slice(0, 2);
    const day = input.slice(2, 4);
    const year = input.slice(4, 8);
    // Construct a Date object (note: month is 0-based)
    const date = new Date(Number(year), Number(month) - 1, Number(day));
    // Format as a string
    return date.toLocaleDateString(locale);
}
/**
 * Utility functions relevant to working with dates.
 */
export const DateUtilities = { dateFromString };
// Name Functions
/**
 * Takes a full name as `string` and returns it as an object containing
 * first and last name as separate strings. Useful for converting from database
 * to frontend UI.
 * @param full_name A `string` containing both first and last name.
 * @param format Whether or not to format the output by capitalizing the first letter of the names. Optional and defaults to `true`.
 * @returns `Object` containing separate first and last name.
 */
function splitFullName(full_name, format = true) {
    const names = full_name.trim().split(/\s+/); // split by whitespace
    const firstName = names[0] || "";
    const lastName = names.slice(1).join(" ") || ""; // join rest as last name
    return {
        firstName: format ? capitalize(firstName) : firstName,
        last_name: format ? capitalize(lastName) : lastName,
    };
}
/**
 * Merges separate first and last name together into a unified `string`.
 * @param firstName The first name to merge.
 * @param lastName The surname to merge.
 * @param format Whether or not to format the output by capitalizing the first letter of the names. Optional and defaults to `true`.
 * @returns A `string` comprised of merged first and last name.
 */
function mergeFullName(firstName, lastName, format = true) {
    return `${format ? capitalize(firstName) : firstName} ${format ? capitalize(lastName) : lastName}`;
}
export const NameUtilities = { splitFullName, mergeFullName };
// Array Functions
/**
 * Clear the entire array. This is destructive.
 * @param array The array to clear.
 */
async function clearArray(array) {
    while (array.length > 0) {
        array.pop();
    }
}
/**
 * Remove an item in an array at a specific index.
 * @param arr The array to search through.
 * @param index The index to remove.
 */
function removeAt(arr, index) {
    if (index !== -1) {
        arr.splice(index, 1);
    }
}
/**
 * Find an item in an array by a specific property and value.
 * @param array - The array to search.
 * @param key - The property key to match.
 * @param value - The value to match.
 * @returns The found item or undefined.
 */
function findInArray(array, key, value) {
    return array.find((item) => item[key] === value);
}
/**
 * Find an item in an array by a specific property and value.
 * Throws an error if not found.
 * @param array - The array to search.
 * @param key - The property key to match.
 * @param value - The value to match.
 * @returns The found item.
 */
function requireInArray(array, key, value) {
    const found = array.find((item) => item[key] === value);
    if (!found) {
        throw new Error(`Item with ${String(key)} = ${value} not found`);
    }
    return found;
}
/**
 * Find the index of an item in an array by a specific property and value.
 * @param array - The array to search.
 * @param key - The property key to match.
 * @param value - The value to match.
 * @returns The index of the item, or -1 if not found.
 */
function findIndexInArray(array, key, value) {
    return array.findIndex((item) => item[key] === value);
}
/**
 * Remove an item from an array by matching a property and value.
 * Returns a new array without the matched item.
 * @param array - The original array.
 * @param key - The property key to match.
 * @param value - The value to match.
 * @returns A new array without the matched item.
 */
function removeFromArray(array, key, value) {
    return array.filter((item) => item[key] !== value);
}
/**
 * Remove multiple items from an array by matching a property against a list of values.
 * Returns a new array without the matched items.
 * @param array - The original array.
 * @param key - The property key to match.
 * @param values - The list of values to remove.
 * @returns A new array without the matched items.
 */
function bulkRemoveFromArray(array, key, values) {
    const valueSet = new Set(values);
    return array.filter((item) => !valueSet.has(item[key]));
}
/**
 * Update an item in an array by matching a property and value.
 * Returns a new array with the item updated.
 * @param array - The original array.
 * @param key - The property key to match.
 * @param value - The value to match.
 * @param updater - A function that returns the updated item.
 * @returns A new array with the updated item.
 */
function updateInArray(array, key, value, updater) {
    return array.map((item) => (item[key] === value ? updater(item) : item));
}
/**
 * Update multiple items in an array by matching a property against a list of values.
 * Returns a new array with the matched items updated.
 * @param array - The original array.
 * @param key - The property key to match.
 * @param values - The list of values to update.
 * @param updater - A function that returns the updated item.
 * @returns A new array with the updated items.
 */
function bulkUpdateInArray(array, key, values, updater) {
    const valueSet = new Set(values);
    return array.map((item) => (valueSet.has(item[key]) ? updater(item) : item));
}
/**
 * Returns a new array excluding items where a given property matches a specific value.
 *
 * Example:
 *   const nonAdmins = allExcept(users, 'role', 'admin');
 *
 * @param array - The original array to filter.
 * @param property - The property of each item to check.
 * @param excludeValue - The value to exclude from the result.
 * @returns A new array containing all items except those matching the exclude value.
 */
function allExcept(array, property, excludeValue) {
    return array.filter((item) => item[property] !== excludeValue);
}
/**
 * Utility functions relevant to working with arrays.
 */
export const ArrayUtilities = {
    allExcept,
    clearArray,
    removeAt,
    findInArray,
    requireInArray,
    findIndexInArray,
    removeFromArray,
    bulkRemoveFromArray,
    updateInArray,
    bulkUpdateInArray,
};
