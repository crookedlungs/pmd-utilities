import { type SwitchCase, type DefaultCase, type SwitchReturnCase, type DefaultReturnCase, type Result, type Option } from "../types";
/**
 * Converts or ensures a word is capitalized.
 * @param word The word to capitalize.
 * @returns The capitalized version of the `word` parameter.
 * @example
 * capitalize("hello"); // "Hello"
 */
declare function capitalize(word: string): string;
/**
 * Utility functions relevant to working with strings.
 */
export declare const StringUtilities: {
    capitalize: typeof capitalize;
};
/**
 * Clamps a value in between a specified minimum and maximum value.
 * @param value The value to clamp.
 * @param min The minimum allowed value. Defaults to `0`.
 * @param max The maximum allowed value. Defaults to `100`.
 * @returns The number clamped between the `min` and `max`.
 * @example
 * clamp(100, 0, 50) // 50
 */
declare function clamp(value: number, min?: number, max?: number): number;
/**
 * Formats a `number` as a `string` with a `%` sign suffix.
 * @param number The number to format.
 * @returns A formatted `%` string.
 * @example
 * formatPercentString(10); // "10%"
 */
declare function formatPercentString(number: number): string;
/**
 * Generates a random integer between the specified `min` and `max` values, inclusive.
 * Ensures the result is within the whole number range using `Math.ceil` and `Math.floor`.
 *
 * @param min The minimum integer value (inclusive).
 * @param max The maximum integer value (inclusive).
 * @returns A random integer between `min` and `max`, inclusive.
 *
 * @example
 * const roll = genRandomInRange(1, 6);
 * console.log(`You rolled a ${roll}`); // Output: You rolled a 3 (or any number between 1 and 6)
 *
 * @example
 * const temperature = genRandomInRange(-10, 40);
 * console.log(`Temperature: ${temperature}°C`); // Output: Temperature: 22°C (or any between -10 and 40)
 */
declare function genRandomInRange(min: number, max: number): number;
/**
 * Utility functions relevant to working with numbers.
 */
export declare const NumberUtilities: {
    clamp: typeof clamp;
    formatPercentString: typeof formatPercentString;
    genRandomInRange: typeof genRandomInRange;
};
/**
 * Formats a number into a currency string.
 * @param amount The number to convert.
 * @param currency The currency symbol to prefix.
 * @returns A formatted string like "$5.00"
 * @example
 * formatCurrency(10) // "$10"
 */
declare function formatCurrency(amount: number, currency?: string): string;
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
declare function calculateTax(subtotal: number, taxRate: number): number;
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
declare function getTaxRateByState(state: string): number | undefined;
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
declare function calculateTotalWithTax(subtotal: number, taxRate: number): number;
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
declare function parseCurrency(currencyString: string): number;
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
 * Checks if two Date objects fall on the same calendar day.
 * @param date1 The first date.
 * @param date2 The second date.
 * @returns `true` if both dates are on the same day, otherwise `false`.
 *
 * @example
 * const result = isSameDay(new Date('2024-05-01'), new Date('2024-05-01'));
 * // result === true
 */
declare function isSameDay(date1: Date, date2: Date): boolean;
/**
 * Converts a timestamp to a human-readable relative time string.
 * @param timestamp The timestamp in milliseconds.
 * @returns A string like "just now", "5 minutes ago", "2 hours ago", etc.
 *
 * @example
 * const msg = getTimeAgo(Date.now() - 60000); // 1 minute ago
 * // msg === "1 minute ago"
 */
declare function getTimeAgo(timestamp: number): string;
/**
 * Utility functions relevant to working with dates.
 */
export declare const DateUtilities: {
    dateFromString: typeof dateFromString;
    isSameDay: typeof isSameDay;
    getTimeAgo: typeof getTimeAgo;
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
/**
 * Formats a name with a prefix. Accepts either a string or an object with `firstName` and `lastName`.
 * @param name The name to format, either as a string or an object.
 * @param prefix A prefix to prepend (e.g., "Dr", "Ms", "Mr").
 * @returns A formatted string in the form of "<prefix>. <full name>".
 */
declare function formatNameWithPrefix(name: {
    firstName: string;
    lastName: string;
} | string, prefix: "Mr" | "Mrs" | "Ms" | "Dr"): string;
/**
 * Name Utilities
 */
export declare const NameUtilities: {
    splitFullName: typeof splitFullName;
    mergeFullName: typeof mergeFullName;
    formatNameWithPrefix: typeof formatNameWithPrefix;
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
 * @param array - The original array to filter.
 * @param property - The property of each item to check.
 * @param excludeValue - The value to exclude from the result.
 * @returns A new array containing all items except those matching the exclude value.
 *
 * @example
 * const nonAdmins = allExcept(users, 'role', 'admin');
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
 * Calculates the aspect ratio (width divided by height).
 *
 * @param height - The height of the element.
 * @param width - The width of the element.
 * @returns The aspect ratio as a number (width / height).
 *
 * @example
 * const ar = getAspectRatio(1080, 1920);
 * console.log(ar); // Output: 1.7777777777777777 (which is 16:9)
 */
declare function getAspectRatio(height: number, width: number): number;
/**
 * Calculates the width of an element from its height and aspect ratio.
 *
 * @param height - The height of the element.
 * @param ar - The aspect ratio (width / height).
 * @returns The calculated width, rounded to the nearest whole number.
 *
 * @example
 * const width = getHeightFromAR(1080, 1.7777777778);
 * console.log(width); // Output: 1920
 */
declare function getHeightFromAR(height: number, ar: number): number;
/**
 * Calculates the height of an element from its width and aspect ratio.
 *
 * @param width - The width of the element.
 * @param ar - The aspect ratio (width / height).
 * @returns The calculated height, rounded to the nearest whole number.
 *
 * @example
 * const height = getWidthFromAR(1920, 1.7777777778);
 * console.log(height); // Output: 1080
 */
declare function getWidthFromAR(width: number, ar: number): number;
export declare const ImageUtilities: {
    getWidthFromAR: typeof getWidthFromAR;
    getHeightFromAR: typeof getHeightFromAR;
    getAspectRatio: typeof getAspectRatio;
};
/**
 * Validates if the domain of an email matches the target domain.
 * @param email The email address to validate.
 * @param targetDomain The domain to check against.
 * @returns True if the email's domain matches the target domain, false otherwise.
 * @example
 * validateDomain("user@example.com", "example.com"); // true
 * validateDomain("admin@other.com", "example.com"); // false
 */
declare function validateDomain(email: string, targetDomain: string): boolean;
/**
 * Validates if the email is in a valid format.
 * @param email The email address to validate.
 * @returns True if the email format is valid, false otherwise.
 * @example
 * isValidEmail("user@example.com"); // true
 * isValidEmail("invalid-email"); // false
 */
declare function isValidEmail(email: string): boolean;
/**
 * Generates a random password with a given length, ensuring it meets the strength criteria.
 * Uses `isStrongPassword()` to ensure password is strong. Retries if not.
 * @param length The length of the password to generate.
 * @returns A randomly generated password that is strong.
 * @example
 * const password = generateRandomPassword(12);
 * console.log(password); // Example: "aA1!xYz@9Pq#"
 */
declare function generateRandomPassword(length: number): string;
/**
 * Validates if the password is strong.
 * @param password The password to check.
 * @param minLength The minimum password length. Defaults to 8.
 * @returns True if the password meets strength criteria, false otherwise.
 * @example
 * isStrongPassword("aB3$dEfG"); // true
 * isStrongPassword("weakpass"); // false
 */
declare function isStrongPassword(password: string, minLength?: number): boolean;
/**
 * Checks if a user has the required role.
 * @param userRoles The roles assigned to the user.
 * @param requiredRole The role required for the action.
 * @returns True if the user has the required role, false otherwise.
 * @example
 * hasRole(["admin", "editor"], "admin"); // true
 * hasRole(["viewer"], "editor"); // false
 */
declare function hasRole(userRoles: string[], requiredRole: string): boolean;
/**
 * Hashes a password asynchronously.
 * @param password The password to hash.
 * @returns The hashed password.
 * @example
 * const hashed = await hashPassword("SuperSecret123!");
 * console.log(hashed); // $2b$10$...
 */
declare function hashPassword(password: string): Promise<string>;
/**
 * Compares a plain password with a hashed password.
 * @param password The plain password.
 * @param hashedPassword The hashed password to compare against.
 * @returns True if the passwords match, false otherwise.
 * @example
 * const hashed = await hashPassword("myPassword123!");
 * const isMatch = await comparePassword("myPassword123!", hashed);
 * console.log(isMatch); // true
 */
declare function comparePassword(password: string, hashedPassword: string): Promise<boolean>;
/**
 * Auth Utilities
 */
export declare const AuthUtilities: {
    generateRandomPassword: typeof generateRandomPassword;
    validateDomain: typeof validateDomain;
    isValidEmail: typeof isValidEmail;
    isStrongPassword: typeof isStrongPassword;
    hasRole: typeof hasRole;
    comparePassword: typeof comparePassword;
    hashPassword: typeof hashPassword;
};
/**
 * A "pro" implementation of generic fetch/get.
 * @param host Host address to fetch from.
 * @param endpoint Endpoint to target.
 * @param query Query options
 * @param log Whether to log responses or not. Defaults to `false`.
 * @returns
 *
 * @example
 * const response = await proFetchGet(
 *   "https://api.example.com",
 *   "users",
 *   [{ field: "role", value: "admin" }, { field: "active", value: true }],
 *   true
 * );
 * console.log(response); // Logs the filtered user data if successful.
 */
declare function proFetchGet(host: string, endpoint: string, query: {
    field: string;
    value: any;
}[], log?: boolean): Promise<any>;
/**
 * A "pro" implementation of generic fetch/post.
 * @param host Host address to push to.
 * @param endpoint Endpoint to target.
 * @param body The record to post.
 * @param log Whether to log responses or not. Defaults to `false`.
 * @returns
 *
 * @example
 * const response = await proFetchPost(
 *   "https://api.example.com",
 *   "submit",
 *   { name: "Alice", score: 42 },
 *   true
 * );
 * console.log(response); // Logs the confirmation or resulting data from the POST request.
 */
declare function proFetchPost(host: string, endpoint: string, body: Record<string, any>, log?: boolean): Promise<any>;
/**
 * Fetch Utilities
 */
export declare const FetchUtilities: {
    proFetchGet: typeof proFetchGet;
    proFetchPost: typeof proFetchPost;
};
/**
 * Implementation of generic `switch` statement to reduce boilerplate.
 * @param key Value to evaluate.
 * @param cases Cases to use for switching.
 * @example
 * const color = "blue";

proSwitch(color, [
  { value: "red", operation: () => console.log("Color is red") },
  { value: "blue", operation: () => console.log("Color is blue") },
  { default: true, operation: () => console.log("Unknown color") },
]);
 */
declare function proSwitch<T>(key: T, cases: (SwitchCase<T> | DefaultCase)[]): void;
/**
 * Similar to a `match` expression in languages like Rust.
 * @param key Value to match for.
 * @param cases Values to match against.
 * @returns A value if a match was found.
 *
 * @example
 * const result = proSwitchReturn("green", [
  { value: "red", operation: () => "You chose red" },
  { value: "blue", operation: () => "You chose blue" },
  { default: true, operation: () => "Color not recognized" },
]);

console.log(result); // "Color not recognized"
 */
export declare function proSwitchReturn<T, R>(key: T, cases: (SwitchReturnCase<T, R> | DefaultReturnCase<R>)[]): R | undefined;
/**
 * Switch Utilities
 */
export declare const SwitchUtilities: {
    proSwitch: typeof proSwitch;
    proSwitchReturn: typeof proSwitchReturn;
};
/**
 * Shorthand validation that a value exists.
 * @param condition The condition to validate against.
 * @param msg Message to throw if condition fails. Default value of `Assertion failed`.
 * @example
 * assert(user != null, "User not found");
// Now `user` is not null or undefined in TS's eyes.
 */
declare function assert(condition: unknown, msg?: string): asserts condition;
/**
 * Validates that the provided value is truthy (not null or undefined).
 * This is essentially a shorthand for `assert(value != null)`.
 *
 * @param value The value to validate.
 * @param msg Optional custom error message.
 * @throws Error if the value is null or undefined.
 * @example
 * const input = getInput();
 * isValid(input, "Input must be provided");
 * console.log(input.length); // Safe to use now
 */
declare function isValid<T>(value: T, msg?: string): void;
/**
 * Unwraps an Option type and returns the contained value if it exists.
 * If the Option is "none", it returns the provided fallback value.
 *
 * @template T - The type of the value.
 * @param opt - The Option to unwrap.
 * @param fallback - The fallback value to return if `opt` is "none".
 * @returns The unwrapped value if present, or the fallback.
 * @example
 * const name = unwrapOr(Some("Bob"), "Anonymous"); // "Bob"
 * const name2 = unwrapOr(None(), "Anonymous");     // "Anonymous"
 */
declare function unwrapOr<T>(opt: Option<T>, fallback: T): T;
/**
 * Unwraps a `Result`, returning the value if it is `Ok`.
 * Throws the error if it is an `Err`.
 *
 * @param res - The `Result` to unwrap.
 * @returns The value if `res` is `Ok`.
 * @throws The error if `res` is `Err`.
 * @example
 * const result = Ok("Success!");
 * const value = unwrapResult(result); // "Success!"
 *
 * const errorResult = Err(new Error("Oops!"));
 * unwrapResult(errorResult); // throws Error: "Oops!"
 */
declare function unwrapResult<T, E>(res: Result<T, E>): T;
/**
 * Safety Utilities, heavily inspired by Rust.
 */
export declare const SafetyUtilities: {
    assert: typeof assert;
    Some: <T>(value: T) => Option<T>;
    None: () => Option<never>;
    Err: <E>(error: E) => Result<never, E>;
    Ok: <T>(value: T) => Result<T, never>;
    unwrapOr: typeof unwrapOr;
    unwrapResult: typeof unwrapResult;
    isValid: typeof isValid;
};
/**
 * Creates a throttled function that only invokes the provided function at most once every `wait` milliseconds.
 * If the function is invoked multiple times in quick succession, only the first call in the given `wait` period will be executed.
 *
 * @param fn The function to throttle.
 * @param wait The number of milliseconds to wait between invocations.
 * @returns A throttled function.
 *
 * @example
 * const throttledLog = throttle((message: string) => console.log(message), 1000);
 * throttledLog("Hello"); // Will log "Hello"
 * throttledLog("World"); // Will be ignored because it's within the 1000ms window.
 */
declare function throttle(fn: Function, wait: number): (...args: any[]) => void;
/**
 * Returns a promise that resolves after a specified number of milliseconds.
 * This is useful for delaying actions in asynchronous code.
 *
 * @param ms The number of milliseconds to wait before resolving.
 * @returns A promise that resolves after the given `ms`.
 *
 * @example
 * await wait(2000); // Waits for 2 seconds before continuing
 * console.log("This will print after 2 seconds");
 */
declare function wait(ms: number): Promise<void>;
/**
 * Creates a debounced function that delays the invocation of the provided function
 * until after the specified `wait` time has passed since the last time it was invoked.
 *
 * @param fn The function to debounce.
 * @param wait The number of milliseconds to wait before calling the function.
 * @returns A debounced function.
 *
 * @example
 * const debouncedLog = debounce((message: string) => console.log(message), 500);
 * debouncedLog("Hello"); // Will log "Hello" after 500ms if no other calls happen in that time.
 */
declare function debounce(fn: Function, wait: number): (...args: any[]) => void;
/**
 * Performance Utilities
 */
export declare const PerformanceUtilities: {
    debounce: typeof debounce;
    wait: typeof wait;
    throttle: typeof throttle;
};
export {};
