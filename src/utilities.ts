import {
  type SwitchCase,
  type DefaultCase,
  type SwitchReturnCase,
  type DefaultReturnCase,
  type Result,
  type Option,
} from "../types";
import { stateTaxRates } from "./data/us-tax-rates";
import bcrypt from "bcrypt";

// String Functions

/**
 * Converts or ensures a word is capitalized.
 * @param word The word to capitalize.
 * @returns The capitalized version of the `word` parameter.
 * @example
 * capitalize("hello"); // "Hello"
 */
function capitalize(word: string): string {
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
 * Clamps a value in between a specified minimum and maximum value.
 * @param value The value to clamp.
 * @param min The minimum allowed value. Defaults to `0`.
 * @param max The maximum allowed value. Defaults to `100`.
 * @returns The number clamped between the `min` and `max`.
 * @example
 * clamp(100, 0, 50) // 50
 */
function clamp(value: number, min: number = 0, max: number = 100): number {
  if (value < min) {
    return min;
  } else if (value > max) {
    return max;
  } else {
    return value;
  }
}

/**
 * Formats a `number` as a `string` with a `%` sign suffix.
 * @param number The number to format.
 * @returns A formatted `%` string.
 * @example
 * formatPercentString(10); // "10%"
 */
function formatPercentString(number: number): string {
  return `${number}%`;
}

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
function genRandomInRange(min: number, max: number): number {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

/**
 * Utility functions relevant to working with numbers.
 */
export const NumberUtilities = { clamp, formatPercentString, genRandomInRange };

// Currency

/**
 * Formats a number into a currency string.
 * @param amount The number to convert.
 * @param currency The currency symbol to prefix.
 * @returns A formatted string like "$5.00"
 * @example
 * formatCurrency(10) // "$10"
 */
function formatCurrency(amount: number, currency: string = "$"): string {
  return `${currency}${amount.toFixed(2)}`;
}

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
function calculateTax(subtotal: number, taxRate: number): number {
  return +(subtotal * (taxRate / 100)).toFixed(2);
}

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
function getTaxRateByState(state: string): number | undefined {
  return stateTaxRates[state as keyof typeof stateTaxRates];
}

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
function calculateTotalWithTax(subtotal: number, taxRate: number): number {
  return +(subtotal + calculateTax(subtotal, taxRate)).toFixed(2);
}

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
function parseCurrency(currencyString: string): number {
  return parseFloat(currencyString.replace(/[^0-9.-]+/g, ""));
}

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
function convertCurrency(
  amount: number,
  fromRate: number,
  toRate: number
): number {
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
function dateFromString(input: string, locale: string = "en-US") {
  const month = input.slice(0, 2);
  const day = input.slice(2, 4);
  const year = input.slice(4, 8);

  // Construct a Date object (note: month is 0-based)
  const date = new Date(Number(year), Number(month) - 1, Number(day));

  // Format as a string
  return date.toLocaleDateString(locale);
}

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
function isSameDay(date1: Date, date2: Date): boolean {
  return (
    date1.getFullYear() === date2.getFullYear() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getDate() === date2.getDate()
  );
}

/**
 * Converts a timestamp to a human-readable relative time string.
 * @param timestamp The timestamp in milliseconds.
 * @returns A string like "just now", "5 minutes ago", "2 hours ago", etc.
 *
 * @example
 * const msg = getTimeAgo(Date.now() - 60000); // 1 minute ago
 * // msg === "1 minute ago"
 */
function getTimeAgo(timestamp: number): string {
  const now = Date.now();
  const diff = Math.floor((now - timestamp) / 1000); // in seconds

  if (diff < 5) return "just now";
  if (diff < 60) return `${diff} seconds ago`;
  if (diff < 3600)
    return `${Math.floor(diff / 60)} minute${diff >= 120 ? "s" : ""} ago`;
  if (diff < 86400)
    return `${Math.floor(diff / 3600)} hour${diff >= 7200 ? "s" : ""} ago`;
  if (diff < 604800)
    return `${Math.floor(diff / 86400)} day${diff >= 172800 ? "s" : ""} ago`;

  const date = new Date(timestamp);
  return date.toLocaleDateString(); // fallback to date
}

/**
 * Utility functions relevant to working with dates.
 */
export const DateUtilities = { dateFromString, isSameDay, getTimeAgo };

// Name Functions

/**
 * Takes a full name as `string` and returns it as an object containing
 * first and last name as separate strings. Useful for converting from database
 * to frontend UI.
 * @param full_name A `string` containing both first and last name.
 * @param format Whether or not to format the output by capitalizing the first letter of the names. Optional and defaults to `true`.
 * @returns `Object` containing separate first and last name.
 */
function splitFullName(
  full_name: string,
  format: boolean = true
): {
  firstName: string;
  last_name: string;
} {
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
function mergeFullName(
  firstName: string,
  lastName: string,
  format: boolean = true
) {
  return `${format ? capitalize(firstName) : firstName} ${
    format ? capitalize(lastName) : lastName
  }`;
}

/**
 * Formats a name with a prefix. Accepts either a string or an object with `firstName` and `lastName`.
 * @param name The name to format, either as a string or an object.
 * @param prefix A prefix to prepend (e.g., "Dr", "Ms", "Mr").
 * @returns A formatted string in the form of "<prefix>. <full name>".
 */
function formatNameWithPrefix(
  name: { firstName: string; lastName: string } | string,
  prefix: "Mr" | "Mrs" | "Ms" | "Dr"
): string {
  const fullName =
    typeof name === "string"
      ? name
      : mergeFullName(
          name.firstName.length === 0 ? "John" : name.firstName,
          name.lastName.length === 0 ? "Doe" : name.lastName
        );
  return `${prefix}. ${fullName}`;
}

/**
 * Name Utilities
 */
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
async function clearArray<T>(array: T[]) {
  while (array.length > 0) {
    array.pop();
  }
}

/**
 * Remove an item in an array at a specific index.
 * @param arr The array to search through.
 * @param index The index to remove.
 */
function removeAt<T>(arr: T[], index: number) {
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
function findInArray<T, K extends keyof T>(
  array: T[],
  key: K,
  value: T[K]
): T | undefined {
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
function requireInArray<T, K extends keyof T>(
  array: T[],
  key: K,
  value: T[K]
): T {
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
function findIndexInArray<T, K extends keyof T>(
  array: T[],
  key: K,
  value: T[K]
): number {
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
function removeFromArray<T, K extends keyof T>(
  array: T[],
  key: K,
  value: T[K]
): T[] {
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
function bulkRemoveFromArray<T, K extends keyof T>(
  array: T[],
  key: K,
  values: T[K][]
): T[] {
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
function updateInArray<T, K extends keyof T>(
  array: T[],
  key: K,
  value: T[K],
  updater: (item: T) => T
): T[] {
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
function bulkUpdateInArray<T, K extends keyof T>(
  array: T[],
  key: K,
  values: T[K][],
  updater: (item: T) => T
): T[] {
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
function allExcept<T, K extends keyof T>(
  array: T[],
  property: K,
  excludeValue: T[K]
): T[] {
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
async function tryCatchAsync<T>(
  asyncFunc: () => Promise<T>,
  fallback: T
): Promise<T> {
  try {
    return await asyncFunc();
  } catch (error) {
    console.error("Error occurred:", error);
    return fallback;
  }
}

export const AsyncUtilities = { tryCatchAsync };

// Image Utilities

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
function getAspectRatio(height: number, width: number): number {
  return width / height;
}

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
function getHeightFromAR(height: number, ar: number): number {
  return Math.round(height * ar);
}

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
function getWidthFromAR(width: number, ar: number): number {
  return Math.round(width / ar);
}

export const ImageUtilities = {
  getWidthFromAR,
  getHeightFromAR,
  getAspectRatio,
};

// Auth Utilities

/**
 * Validates if the domain of an email matches the target domain.
 * @param email The email address to validate.
 * @param targetDomain The domain to check against.
 * @returns True if the email's domain matches the target domain, false otherwise.
 * @example
 * validateDomain("user@example.com", "example.com"); // true
 * validateDomain("admin@other.com", "example.com"); // false
 */
function validateDomain(email: string, targetDomain: string): boolean {
  if (isValidEmail(email)) {
    // Check if the email contains exactly one "@" symbol
    const atIndex = email.indexOf("@");
    if (atIndex === -1 || atIndex !== email.lastIndexOf("@")) {
      return false; // Invalid email format
    }

    const domain = email.slice(atIndex + 1); // Extract domain after "@"

    return domain.toLowerCase() === targetDomain.toLowerCase(); // Compare domains case-insensitively}
  } else {
    return false; // Email is invalid
  }
}

/**
 * Validates if the email is in a valid format.
 * @param email The email address to validate.
 * @returns True if the email format is valid, false otherwise.
 * @example
 * isValidEmail("user@example.com"); // true
 * isValidEmail("invalid-email"); // false
 */
function isValidEmail(email: string): boolean {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
}

/**
 * Generates a random password with a given length, ensuring it meets the strength criteria.
 * Uses `isStrongPassword()` to ensure password is strong. Retries if not.
 * @param length The length of the password to generate.
 * @returns A randomly generated password that is strong.
 * @example
 * const password = generateRandomPassword(12);
 * console.log(password); // Example: "aA1!xYz@9Pq#"
 */
function generateRandomPassword(length: number): string {
  const charset =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";
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
 * @example
 * isStrongPassword("aB3$dEfG"); // true
 * isStrongPassword("weakpass"); // false
 */
function isStrongPassword(password: string, minLength: number = 8): boolean {
  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasNumbers = /\d/.test(password);
  const hasSpecialChars = /[!@#$%^&*(),.?":{}|<>]/.test(password);

  return (
    password.length >= minLength &&
    hasUpperCase &&
    hasLowerCase &&
    hasNumbers &&
    hasSpecialChars
  );
}

/**
 * Checks if a user has the required role.
 * @param userRoles The roles assigned to the user.
 * @param requiredRole The role required for the action.
 * @returns True if the user has the required role, false otherwise.
 * @example
 * hasRole(["admin", "editor"], "admin"); // true
 * hasRole(["viewer"], "editor"); // false
 */
function hasRole(userRoles: string[], requiredRole: string): boolean {
  return userRoles.includes(requiredRole);
}

/**
 * Hashes a password asynchronously.
 * @param password The password to hash.
 * @returns The hashed password.
 * @example
 * const hashed = await hashPassword("SuperSecret123!");
 * console.log(hashed); // $2b$10$...
 */
async function hashPassword(password: string): Promise<string> {
  const saltRounds = 10;
  return await bcrypt.hash(password, saltRounds);
}

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
async function comparePassword(
  password: string,
  hashedPassword: string
): Promise<boolean> {
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
async function proFetchGet(
  host: string,
  endpoint: string,
  query: { field: string; value: any }[],
  log: boolean = false
): Promise<any> {
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
  } catch (err) {
    console.error("Failed to fetch or parse JSON:", err);
    throw err; // optional, depending on your needs
  }
}

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
async function proFetchPost(
  host: string,
  endpoint: string,
  body: Record<string, any>,
  log: boolean = false
): Promise<any> {
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
  } catch (err) {
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
function proSwitch<T>(key: T, cases: (SwitchCase<T> | DefaultCase)[]): void {
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
export function proSwitchReturn<T, R>(
  key: T,
  cases: (SwitchReturnCase<T, R> | DefaultReturnCase<R>)[]
): R | undefined {
  let defaultCase: (() => R) | undefined;

  for (const c of cases) {
    if ("default" in c && c.default) {
      defaultCase = c.operation;
    } else if ("value" in c && c.value === key) {
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
function assert(
  condition: unknown,
  msg = "Assertion failed"
): asserts condition {
  if (!condition) throw new Error(msg);
}

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
function isValid<T>(value: T, msg = "Value is invalid!") {
  assert(value != null, msg);
}

/**
 * Represents a successful presence of a value, wrapped in an Option type.
 *
 * @template T - The type of the wrapped value.
 * @param value - The value to wrap.
 * @returns An Option of kind "some" containing the provided value.
 * @example
 * const maybeName = Some("Alice");
 * console.log(maybeName.kind); // "some"
 * console.log(maybeName.value); // "Alice"
 */
const Some = <T>(value: T): Option<T> => ({ kind: "some", value });

/**
 * Represents the absence of a value.
 *
 * @returns An Option of kind "none".
 * @example
 * const maybeEmpty = None();
 * console.log(maybeEmpty.kind); // "none"
 */
const None = (): Option<never> => ({ kind: "none" });

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
function unwrapOr<T>(opt: Option<T>, fallback: T): T {
  return opt.kind === "some" ? opt.value : fallback;
}

/**
 * Creates a successful `Result` containing a value.
 *
 * @param value - The value to wrap in an `Ok`.
 * @returns A `Result` of type `Ok<T>`.
 * @example
 * const result = Ok(42);
 * if (result.ok) {
 *   console.log(result.value); // 42
 * }
 */
const Ok = <T>(value: T): Result<T, never> => ({ ok: true, value });

/**
 * Creates a failed `Result` containing an error.
 *
 * @param error - The error to wrap in an `Err`.
 * @returns A `Result` of type `Err<E>`.
 * @example
 * const result = Err("Something went wrong");
 * if (!result.ok) {
 *   console.error(result.error); // "Something went wrong"
 * }
 */
const Err = <E>(error: E): Result<never, E> => ({ ok: false, error });

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
function unwrapResult<T, E>(res: Result<T, E>): T {
  if (res.ok) return res.value;
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
function throttle(fn: Function, wait: number): (...args: any[]) => void {
  let lastTime = 0;
  return function (...args: any[]) {
    const now = Date.now();
    if (now - lastTime >= wait) {
      lastTime = now;
      fn(...args);
    }
  };
}

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
function wait(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

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
function debounce(fn: Function, wait: number): (...args: any[]) => void {
  let timeout: NodeJS.Timeout;
  return function (...args: any[]) {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn(...args), wait);
  };
}

/**
 * Performance Utilities
 */
export const PerformanceUtilities = { debounce, wait, throttle };
