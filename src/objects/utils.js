/**
 * Converts an object to an iterable array of key-value pairs.
 * @param obj - The object to convert.
 * @returns The object as an iterable array of key-value pairs.
 */
export function objToIterable(obj) {
    return Object.entries(obj).map(([key, value]) => ({
        key,
        value,
    }));
}
/**
 * Converts an object to either a string or array of its keys.
 * @param obj - The object to get keys from.
 * @param output - The desired output format.
 */
export function getKeys(obj, output) {
    const keys = Object.keys(obj);
    return output === "string" ? keys.join(", ") : keys;
}
/**
 * Converts an object to a string representation.
 * @param obj - The object to convert.
 * @param output - The desired output format.
 */
export function getValues(obj, output) {
    const values = Object.values(obj);
    return output === "string" ? values.join(", ") : values;
}
