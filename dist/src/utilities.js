import { stateTaxRates } from "./data/us-tax-rates.js";
import bcrypt from "bcrypt";
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
/**
 * Formats a name with a prefix. Accepts either a string or an object with `firstName` and `lastName`.
 * @param name The name to format, either as a string or an object.
 * @param prefix A prefix to prepend (e.g., "Dr", "Ms", "Mr").
 * @returns A formatted string in the form of "<prefix>. <full name>".
 */
function formatNameWithPrefix(name, prefix) {
    const fullName = typeof name === "string"
        ? name
        : mergeFullName(name.firstName, name.lastName);
    return `${prefix}. ${fullName}`;
}
export const NameUtilities = {
    splitFullName,
    mergeFullName,
    formatNameWithPrefix,
};
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
 * @param array - The original array to filter.
 * @param property - The property of each item to check.
 * @param excludeValue - The value to exclude from the result.
 * @returns A new array containing all items except those matching the exclude value.
 *
 * @example
 * const nonAdmins = allExcept(users, 'role', 'admin');
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
// Async Utilities
/**
 * Wraps the function passed to `asyncFunc` in a try/catch block to reduce boilerplate code.
 * @param asyncFunc The function to wrap in the try/catch.
 * @param fallback Custom fallback value or error message.
 * @returns A promise determined by the input function.
 */
async function tryCatchAsync(asyncFunc, fallback) {
    try {
        return await asyncFunc();
    }
    catch (error) {
        console.error("Error occurred:", error);
        return fallback;
    }
}
export const AsyncUtilities = { tryCatchAsync };
// Auth Utilities
/**
 * Validates if the domain of an email matches the target domain.
 * @param email The email address to validate.
 * @param targetDomain The domain to check against.
 * @returns True if the email's domain matches the target domain, false otherwise.
 */
function validateDomain(email, targetDomain) {
    if (isValidEmail(email)) {
        // Check if the email contains exactly one "@" symbol
        const atIndex = email.indexOf("@");
        if (atIndex === -1 || atIndex !== email.lastIndexOf("@")) {
            return false; // Invalid email format
        }
        const domain = email.slice(atIndex + 1); // Extract domain after "@"
        return domain.toLowerCase() === targetDomain.toLowerCase(); // Compare domains case-insensitively}
    }
    else {
        return false; // Email is invalid
    }
}
/**
 * Validates if the email is in a valid format.
 * @param email The email address to validate.
 * @returns True if the email format is valid, false otherwise.
 */
function isValidEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
}
/**
 * Generates a random password with a given length, ensuring it meets the strength criteria.
 * Uses `isStrongPassword()` to ensure password is strong. Retries if not.
 * @param length The length of the password to generate.
 * @returns A randomly generated password that is strong.
 */
function generateRandomPassword(length) {
    const charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";
    let password = "";
    // Regenerate password if it's not strong enough
    do {
        password = "";
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * charset.length);
            password += charset[randomIndex];
        }
    } while (!isStrongPassword(password));
    return password;
}
/**
 * Validates if the password is strong.
 * @param password The password to check.
 * @param minLength The minimum password length. Defaults to 8.
 * @returns True if the password meets strength criteria, false otherwise.
 */
function isStrongPassword(password, minLength = 8) {
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumbers = /\d/.test(password);
    const hasSpecialChars = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    return (password.length >= minLength &&
        hasUpperCase &&
        hasLowerCase &&
        hasNumbers &&
        hasSpecialChars);
}
/**
 * Checks if a user has the required role.
 * @param userRoles The roles assigned to the user.
 * @param requiredRole The role required for the action.
 * @returns True if the user has the required role, false otherwise.
 */
function hasRole(userRoles, requiredRole) {
    return userRoles.includes(requiredRole);
}
/**
 * Hashes a password asynchronously.
 * @param password The password to hash.
 * @returns The hashed password.
 */
async function hashPassword(password) {
    const saltRounds = 10;
    return await bcrypt.hash(password, saltRounds);
}
/**
 * Compares a plain password with a hashed password.
 * @param password The plain password.
 * @param hashedPassword The hashed password to compare against.
 * @returns True if the passwords match, false otherwise.
 */
async function comparePassword(password, hashedPassword) {
    return await bcrypt.compare(password, hashedPassword);
}
/**
 * Auth Utilities
 */
export const AuthUtilities = {
    generateRandomPassword,
    validateDomain,
    isValidEmail,
    isStrongPassword,
    hasRole,
    comparePassword,
    hashPassword,
};
// Fetch Utilities
/**
 * A "pro" implementation of generic fetch/get.
 * @param host Host address to fetch from.
 * @param endpoint Endpoint to target.
 * @param query Query options
 * @param log Whether to log responses or not. Defaults to false.
 * @returns
 */
async function proFetchGet(host, endpoint, query, log = false) {
    const options = {
        method: "GET",
        headers: {
            Accept: "application/json",
        },
    };
    let target = `${host}/${endpoint}`;
    if (query.length > 0) {
        const params = new URLSearchParams();
        query.forEach(({ field, value }) => {
            params.append(field, String(value));
        });
        target += `?${params.toString()}`;
    }
    try {
        const res = await fetch(target, options);
        const text = await res.text();
        if (log) {
            console.log("Raw response:", text);
        }
        const json = JSON.parse(text);
        if (log) {
            console.log("Parsed JSON:", json);
        }
        return json;
    }
    catch (err) {
        console.error("Failed to fetch or parse JSON:", err);
        throw err; // optional, depending on your needs
    }
}
/**
 * A "pro" implementation of generic fetch/post.
 * @param host Host address to push to.
 * @param endpoint Endpoint to target.
 * @param body The record to post.
 * @param log Whether to log responses or not. Defaults to false.
 * @returns
 *
 * @example const response = await proFetchPost(
  "https://api.example.com",
  "submit",
  { name: "Alice", score: 42 }
);
 */
async function proFetchPost(host, endpoint, body, log = false) {
    const options = {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
    };
    const target = `${host}/${endpoint}`;
    try {
        const res = await fetch(target, options);
        const text = await res.text();
        if (log) {
            console.log("Raw response:", text);
        }
        const json = JSON.parse(text);
        if (log) {
            console.log("Parsed JSON:", json);
        }
        return json;
    }
    catch (err) {
        if (log) {
            console.error("Failed to fetch or parse JSON:", err);
        }
        throw err;
    }
}
/**
 * Fetch Utilities
 */
export const FetchUtilities = { proFetchGet, proFetchPost };
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
function proSwitch(key, cases) {
    for (const c of cases) {
        if ("default" in c && c.default) {
            c.operation(); // run default if nothing else matched later
            return;
        }
        if ("value" in c && c.value === key) {
            c.operation();
            return;
        }
    }
}
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
export function proSwitchReturn(key, cases) {
    let defaultCase;
    for (const c of cases) {
        if ("default" in c && c.default) {
            defaultCase = c.operation;
        }
        else if ("value" in c && c.value === key) {
            return c.operation();
        }
    }
    return defaultCase?.();
}
/**
 * Switch Utilities
 */
export const SwitchUtilities = { proSwitch, proSwitchReturn };
// Safety Utilities
/**
 * Shorthand validation that a value exists.
 * @param condition The condition to validate against.
 * @param msg Message to throw if condition fails. Default value of `Assertion failed`.
 * @example
 * assert(user != null, "User not found");
// Now `user` is not null or undefined in TS's eyes.
 */
function assert(condition, msg = "Assertion failed") {
    if (!condition)
        throw new Error(msg);
}
/**
 * Validates that the provided value is truthy (not null or undefined).
 * This is essentially a shorthand for `assert(value != null)`.
 *
 * @param value The value to validate.
 * @param msg Optional custom error message.
 * @throws Error if the value is null or undefined.
 */
function isValid(value, msg = "value is invalid!") {
    assert(value != null, msg);
}
/**
 * Represents a successful presence of a value, wrapped in an Option type.
 *
 * @template T - The type of the wrapped value.
 * @param value - The value to wrap.
 * @returns An Option of kind "some" containing the provided value.
 */
const Some = (value) => ({ kind: "some", value });
/**
 * Represents the absence of a value.
 *
 * @returns An Option of kind "none".
 */
const None = () => ({ kind: "none" });
/**
 * Unwraps an Option type and returns the contained value if it exists.
 * If the Option is "none", it returns the provided fallback value.
 *
 * @template T - The type of the value.
 * @param opt - The Option to unwrap.
 * @param fallback - The fallback value to return if `opt` is "none".
 * @returns The unwrapped value if present, or the fallback.
 */
function unwrapOr(opt, fallback) {
    return opt.kind === "some" ? opt.value : fallback;
}
/**
 * Creates a successful `Result` containing a value.
 *
 * @param value - The value to wrap in an `Ok`.
 * @returns A `Result` of type `Ok<T>`.
 */
const Ok = (value) => ({ ok: true, value });
/**
 * Creates a failed `Result` containing an error.
 *
 * @param error - The error to wrap in an `Err`.
 * @returns A `Result` of type `Err<E>`.
 */
const Err = (error) => ({ ok: false, error });
/**
 * Unwraps a `Result`, returning the value if it is `Ok`.
 * Throws the error if it is an `Err`.
 *
 * @param res - The `Result` to unwrap.
 * @returns The value if `res` is `Ok`.
 * @throws The error if `res` is `Err`.
 */
function unwrapResult(res) {
    if (res.ok)
        return res.value;
    throw res.error;
}
/**
 * Safety Utilities, heavily inspired by Rust.
 */
export const SafetyUtilities = {
    assert,
    Some,
    None,
    Err,
    Ok,
    unwrapOr,
    unwrapResult,
    isValid,
};
