// String Functions

/**
 * Converts or ensures a word is capitalized.
 * @param word The word to capitalize.
 * @returns The capitalized version of the `word` parameter.
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

// Date Functions

/**
 * Parses a date from mmddyyy format into a JS `Date` locale string.
 * @param input A date in mmddyyyy format.
 * @returns A `Date` locale string.
 */
function dateFromString(input: string) {
  const month = input.slice(0, 2);
  const day = input.slice(2, 4);
  const year = input.slice(4, 8);

  // Construct a Date object (note: month is 0-based)
  const date = new Date(Number(year), Number(month) - 1, Number(day));

  // Format as a string
  return date.toLocaleDateString("en-US");
}

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

export const NameUtilities = { splitFullName, mergeFullName };

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
 * Example:
 *   const nonAdmins = allExcept(users, 'role', 'admin');
 *
 * @param array - The original array to filter.
 * @param property - The property of each item to check.
 * @param excludeValue - The value to exclude from the result.
 * @returns A new array containing all items except those matching the exclude value.
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
