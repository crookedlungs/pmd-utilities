/**
 * Clear the entire array. This is destructive.
 * @param array The array to clear.
 */
export declare function clearArray<T>(array: T[]): Promise<void>;
/**
 * Remove an item in an array at a specific index.
 * @param arr The array to search through.
 * @param index The index to remove.
 */
export declare function removeAt<T>(arr: T[], index: number): void;
/**
 * Find an item in an array by a specific property and value.
 * @param array - The array to search.
 * @param key - The property key to match.
 * @param value - The value to match.
 * @returns The found item or undefined.
 */
export declare function findInArray<T, K extends keyof T>(array: T[], key: K, value: T[K]): T | undefined;
/**
 * Find an item in an array by a specific property and value.
 * Throws an error if not found.
 * @param array - The array to search.
 * @param key - The property key to match.
 * @param value - The value to match.
 * @returns The found item.
 */
export declare function requireInArray<T, K extends keyof T>(array: T[], key: K, value: T[K]): T;
/**
 * Find the index of an item in an array by a specific property and value.
 * @param array - The array to search.
 * @param key - The property key to match.
 * @param value - The value to match.
 * @returns The index of the item, or -1 if not found.
 */
export declare function findIndexInArray<T, K extends keyof T>(array: T[], key: K, value: T[K]): number;
/**
 * Remove an item from an array by matching a property and value.
 * Returns a new array without the matched item.
 * @param array - The original array.
 * @param key - The property key to match.
 * @param value - The value to match.
 * @returns A new array without the matched item.
 */
export declare function removeFromArray<T, K extends keyof T>(array: T[], key: K, value: T[K]): T[];
/**
 * Remove multiple items from an array by matching a property against a list of values.
 * Returns a new array without the matched items.
 * @param array - The original array.
 * @param key - The property key to match.
 * @param values - The list of values to remove.
 * @returns A new array without the matched items.
 */
export declare function bulkRemoveFromArray<T, K extends keyof T>(array: T[], key: K, values: T[K][]): T[];
/**
 * Update an item in an array by matching a property and value.
 * Returns a new array with the item updated.
 * @param array - The original array.
 * @param key - The property key to match.
 * @param value - The value to match.
 * @param updater - A export function that returns the updated item.
 * @returns A new array with the updated item.
 */
export declare function updateInArray<T, K extends keyof T>(array: T[], key: K, value: T[K], updater: (item: T) => T): T[];
/**
 * Update multiple items in an array by matching a property against a list of values.
 * Returns a new array with the matched items updated.
 * @param array - The original array.
 * @param key - The property key to match.
 * @param values - The list of values to update.
 * @param updater - A export function that returns the updated item.
 * @returns A new array with the updated items.
 */
export declare function bulkUpdateInArray<T, K extends keyof T>(array: T[], key: K, values: T[K][], updater: (item: T) => T): T[];
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
export declare function allExcept<T, K extends keyof T>(array: T[], property: K, excludeValue: T[K]): T[];
