// Array export functions
/**
 * Clear the entire array. This is destructive.
 * @param array The array to clear.
 */
export async function clearArray(array) {
    while (array.length > 0) {
        array.pop();
    }
}
/**
 * Remove an item in an array at a specific index.
 * @param arr The array to search through.
 * @param index The index to remove.
 */
export function removeAt(arr, index) {
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
export function findInArray(array, key, value) {
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
export function requireInArray(array, key, value) {
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
export function findIndexInArray(array, key, value) {
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
export function removeFromArray(array, key, value) {
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
export function bulkRemoveFromArray(array, key, values) {
    const valueSet = new Set(values);
    return array.filter((item) => !valueSet.has(item[key]));
}
/**
 * Update an item in an array by matching a property and value.
 * Returns a new array with the item updated.
 * @param array - The original array.
 * @param key - The property key to match.
 * @param value - The value to match.
 * @param updater - A export function that returns the updated item.
 * @returns A new array with the updated item.
 */
export function updateInArray(array, key, value, updater) {
    return array.map((item) => (item[key] === value ? updater(item) : item));
}
/**
 * Update multiple items in an array by matching a property against a list of values.
 * Returns a new array with the matched items updated.
 * @param array - The original array.
 * @param key - The property key to match.
 * @param values - The list of values to update.
 * @param updater - A export function that returns the updated item.
 * @returns A new array with the updated items.
 */
export function bulkUpdateInArray(array, key, values, updater) {
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
export function allExcept(array, property, excludeValue) {
    return array.filter((item) => item[property] !== excludeValue);
}
