/**
 * Converts or ensures a word is capitalized.
 * @param word The word to capitalize.
 * @returns The capitalized version of the `word` parameter.
 */
declare function capitalize(word: string): string;
/**
 * Utility functions relevant to working with strings.
 */
export declare const StringUtilities: {
    capitalize: typeof capitalize;
};
/**
 * Formats a `number` as a `string` with a `%` sign suffix.
 * @param number The number to format.
 * @returns A formatted `%` string.
 */
declare function formatPercentString(number: number): string;
/**
 * Utility functions relevant to working with numbers.
 */
export declare const NumberUtilities: {
    formatPercentString: typeof formatPercentString;
};
/**
 * Formats a number into a currency string.
 * @param amount The number to convert.
 * @param currency The currency symbol to prefix.
 * @returns A formatted string like "$5.00"
 */
declare function formatCurrency(amount: number, currency?: string): string;
/**
 * Calculates the tax amount for a given subtotal and tax rate.
 * @param subtotal The pre-tax amount.
 * @param taxRate The tax rate as a percentage (e.g., 8.25 for 8.25%).
 * @returns The tax amount.
 */
declare function calculateTax(subtotal: number, taxRate: number): number;
/**
 * Gets the sales tax rate for a given US state code.
 * @param stateCode The 2-letter state abbreviation (e.g., 'CA', 'TX').
 * @returns The sales tax rate as a percentage, or `null` if not found.
 */
declare function getTaxRateByState(state: string): number | undefined;
/**
 * Calculates the total amount after applying tax.
 * @param subtotal The original amount before tax.
 * @param taxRate The tax rate as a percentage.
 * @returns The total amount including tax.
 */
declare function calculateTotalWithTax(subtotal: number, taxRate: number): number;
/**
 * Parses a currency string (like "$1,234.56") into a number.
 * @param currencyString The formatted currency string.
 * @returns A number value.
 */
declare function parseCurrency(currencyString: string): number;
/**
 * Converts an amount from one currency rate to another.
 * @param amount The amount to convert.
 * @param fromRate The rate of the original currency.
 * @param toRate The rate of the target currency.
 * @returns The converted amount.
 */
declare function convertCurrency(amount: number, fromRate: number, toRate: number): number;
/**
 * Utility functions relevant to working with currency.
 */
export declare const CurrencyUtilities: {
    formatCurrency: typeof formatCurrency;
    calculateTax: typeof calculateTax;
    calculateTotalWithTax: typeof calculateTotalWithTax;
    parseCurrency: typeof parseCurrency;
    convertCurrency: typeof convertCurrency;
    getTaxRateByState: typeof getTaxRateByState;
};
/**
 * Parses a date from mmddyyy format into a JS `Date` locale string.
 * @param input A date in mmddyyyy format.
 * @param locale The locale to use for formatting. Defaults to `en-US`.
 * @returns A `Date` locale string.
 */
declare function dateFromString(input: string, locale?: string): string;
/**
 * Utility functions relevant to working with dates.
 */
export declare const DateUtilities: {
    dateFromString: typeof dateFromString;
};
/**
 * Takes a full name as `string` and returns it as an object containing
 * first and last name as separate strings. Useful for converting from database
 * to frontend UI.
 * @param full_name A `string` containing both first and last name.
 * @param format Whether or not to format the output by capitalizing the first letter of the names. Optional and defaults to `true`.
 * @returns `Object` containing separate first and last name.
 */
declare function splitFullName(full_name: string, format?: boolean): {
    firstName: string;
    last_name: string;
};
/**
 * Merges separate first and last name together into a unified `string`.
 * @param firstName The first name to merge.
 * @param lastName The surname to merge.
 * @param format Whether or not to format the output by capitalizing the first letter of the names. Optional and defaults to `true`.
 * @returns A `string` comprised of merged first and last name.
 */
declare function mergeFullName(firstName: string, lastName: string, format?: boolean): string;
export declare const NameUtilities: {
    splitFullName: typeof splitFullName;
    mergeFullName: typeof mergeFullName;
};
/**
 * Clear the entire array. This is destructive.
 * @param array The array to clear.
 */
declare function clearArray<T>(array: T[]): Promise<void>;
/**
 * Remove an item in an array at a specific index.
 * @param arr The array to search through.
 * @param index The index to remove.
 */
declare function removeAt<T>(arr: T[], index: number): void;
/**
 * Find an item in an array by a specific property and value.
 * @param array - The array to search.
 * @param key - The property key to match.
 * @param value - The value to match.
 * @returns The found item or undefined.
 */
declare function findInArray<T, K extends keyof T>(array: T[], key: K, value: T[K]): T | undefined;
/**
 * Find an item in an array by a specific property and value.
 * Throws an error if not found.
 * @param array - The array to search.
 * @param key - The property key to match.
 * @param value - The value to match.
 * @returns The found item.
 */
declare function requireInArray<T, K extends keyof T>(array: T[], key: K, value: T[K]): T;
/**
 * Find the index of an item in an array by a specific property and value.
 * @param array - The array to search.
 * @param key - The property key to match.
 * @param value - The value to match.
 * @returns The index of the item, or -1 if not found.
 */
declare function findIndexInArray<T, K extends keyof T>(array: T[], key: K, value: T[K]): number;
/**
 * Remove an item from an array by matching a property and value.
 * Returns a new array without the matched item.
 * @param array - The original array.
 * @param key - The property key to match.
 * @param value - The value to match.
 * @returns A new array without the matched item.
 */
declare function removeFromArray<T, K extends keyof T>(array: T[], key: K, value: T[K]): T[];
/**
 * Remove multiple items from an array by matching a property against a list of values.
 * Returns a new array without the matched items.
 * @param array - The original array.
 * @param key - The property key to match.
 * @param values - The list of values to remove.
 * @returns A new array without the matched items.
 */
declare function bulkRemoveFromArray<T, K extends keyof T>(array: T[], key: K, values: T[K][]): T[];
/**
 * Update an item in an array by matching a property and value.
 * Returns a new array with the item updated.
 * @param array - The original array.
 * @param key - The property key to match.
 * @param value - The value to match.
 * @param updater - A function that returns the updated item.
 * @returns A new array with the updated item.
 */
declare function updateInArray<T, K extends keyof T>(array: T[], key: K, value: T[K], updater: (item: T) => T): T[];
/**
 * Update multiple items in an array by matching a property against a list of values.
 * Returns a new array with the matched items updated.
 * @param array - The original array.
 * @param key - The property key to match.
 * @param values - The list of values to update.
 * @param updater - A function that returns the updated item.
 * @returns A new array with the updated items.
 */
declare function bulkUpdateInArray<T, K extends keyof T>(array: T[], key: K, values: T[K][], updater: (item: T) => T): T[];
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
declare function allExcept<T, K extends keyof T>(array: T[], property: K, excludeValue: T[K]): T[];
/**
 * Utility functions relevant to working with arrays.
 */
export declare const ArrayUtilities: {
    allExcept: typeof allExcept;
    clearArray: typeof clearArray;
    removeAt: typeof removeAt;
    findInArray: typeof findInArray;
    requireInArray: typeof requireInArray;
    findIndexInArray: typeof findIndexInArray;
    removeFromArray: typeof removeFromArray;
    bulkRemoveFromArray: typeof bulkRemoveFromArray;
    updateInArray: typeof updateInArray;
    bulkUpdateInArray: typeof bulkUpdateInArray;
};
/**
 * Wraps the function passed to `asyncFunc` in a try/catch block to reduce boilerplate code.
 * @param asyncFunc The function to wrap in the try/catch.
 * @param fallback Custom fallback value or error message.
 * @returns A promise determined by the input function.
 */
declare function tryCatchAsync<T>(asyncFunc: () => Promise<T>, fallback: T): Promise<T>;
export declare const AsyncUtilities: {
    tryCatchAsync: typeof tryCatchAsync;
};
/**
 * Validates if the domain of an email matches the target domain.
 * @param email The email address to validate.
 * @param targetDomain The domain to check against.
 * @returns True if the email's domain matches the target domain, false otherwise.
 */
declare function validateDomain(email: string, targetDomain: string): boolean;
/**
 * Validates if the email is in a valid format.
 * @param email The email address to validate.
 * @returns True if the email format is valid, false otherwise.
 */
declare function isValidEmail(email: string): boolean;
/**
 * Generates a random password with a given length, ensuring it meets the strength criteria.
 * @param length The length of the password to generate.
 * @returns A randomly generated password that is strong.
 */
declare function generateRandomPassword(length: number): string;
/**
 * Validates if the password is strong.
 * @param password The password to check.
 * @param minLength The minimum password length. Defaults to 8.
 * @returns True if the password meets strength criteria, false otherwise.
 */
declare function isStrongPassword(password: string, minLength?: number): boolean;
/**
 * Checks if a user has the required role.
 * @param userRoles The roles assigned to the user.
 * @param requiredRole The role required for the action.
 * @returns True if the user has the required role, false otherwise.
 */
declare function hasRole(userRoles: string[], requiredRole: string): boolean;
/**
 * Hashes a password asynchronously.
 * @param password The password to hash.
 * @returns The hashed password.
 */
declare function hashPassword(password: string): Promise<string>;
/**
 * Compares a plain password with a hashed password.
 * @param password The plain password.
 * @param hashedPassword The hashed password to compare against.
 * @returns True if the passwords match, false otherwise.
 */
declare function comparePassword(password: string, hashedPassword: string): Promise<boolean>;
export declare const AuthUtilities: {
    generateRandomPassword: typeof generateRandomPassword;
    validateDomain: typeof validateDomain;
    isValidEmail: typeof isValidEmail;
    isStrongPassword: typeof isStrongPassword;
    hasRole: typeof hasRole;
    comparePassword: typeof comparePassword;
    hashPassword: typeof hashPassword;
};
export {};
