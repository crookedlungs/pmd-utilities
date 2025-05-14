import { KVPair } from "../../types";
/**
 * Converts an object to an iterable array of key-value pairs.
 * @param obj - The object to convert.
 * @returns The object as an iterable array of key-value pairs.
 */
export declare function objToIterable(obj: object): KVPair<string, any>[];
/**
 * Converts an object to either a string or array of its keys.
 * @param obj - The object to get keys from.
 * @param output - The desired output format.
 */
export declare function getKeys(obj: object, output: "string"): string;
/**
 * Converts an object to either a string or array of its keys.
 * @param obj - The object to get keys from.
 * @param output - The desired output format.
 */
export declare function getKeys(obj: object, output: "array"): string[];
/**
 * Converts an object to either a string or array of its values.
 * @param obj - The object to get keys from.
 * @param output - The desired output format.
 */
export declare function getValues(obj: object, output: "string"): string;
/**
 * Converts an object to either a string or array of its values.
 * @param obj - The object to get keys from.
 * @param output - The desired output format.
 */
export declare function getValues(obj: object, output: "array"): string[];
