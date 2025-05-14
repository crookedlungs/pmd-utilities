/**
 * Shorthand validation that a value exists.
 * @param condition The condition to validate against.
 * @param msg Message to throw if condition fails. Default value of `Assertion failed`.
 * @example
 * assert(user != null, "User not found");
// Now `user` is not null or undefined in TS's eyes.
 */
export function assert(condition, msg = "Assertion failed") {
    if (!condition)
        throw new Error(msg);
}
/**
 * Validates that the provided value is truthy (not null or undefined).
 * Returns `boolean` based on truthiness.
 *
 * @param value The value to validate.
 * @returns `True` if the value is not null or undefined, `False` if otherwise.
 * @example
 * const input = getInput();
 * isValid(input); // True if input is valid.
 */
export function isValid(value) {
    if (value != null && value != undefined) {
        return true;
    }
    else {
        return false;
    }
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
export const Some = (value) => ({ kind: "some", value });
/**
 * Represents the absence of a value.
 *
 * @returns An Option of kind "none".
 * @example
 * const maybeEmpty = None();
 * console.log(maybeEmpty.kind); // "none"
 */
export const None = () => ({ kind: "none" });
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
export function unwrapOr(opt, fallback) {
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
export const Ok = (value) => ({ ok: true, value });
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
export const Err = (error) => ({ ok: false, error });
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
export function unwrapResult(res) {
    if (res.ok)
        return res.value;
    throw res.error;
}
/**
 * Check if a value exists in an enum-like object.
 * @example
 * enum Colors { Red = 'red', Blue = 'blue' }
 * isEnumValue(Colors, 'red'); // true
 */
export function isEnumValue(e, val) {
    return Object.values(e).includes(val);
}
/**
 * Throws an error if a value is undefined.
 * @example
 * const user = getOrThrow(getUser(), 'User not found');
 */
export function getOrThrow(val, msg = "Missing value") {
    if (val === undefined)
        throw new Error(msg);
    return val;
}
/**
 * Checks if a value is a string.
 *
 * @param value - The value to check.
 * @returns True if the value is a string.
 *
 * @example
 * isString("hello"); // true
 * isString(123);     // false
 */
export function isString(value) {
    return typeof value === "string";
}
/**
 * Checks if a value is a valid number (not NaN).
 *
 * @param value - The value to check.
 * @returns True if the value is a number and not NaN.
 *
 * @example
 * isNumber(42);       // true
 * isNumber(NaN);      // false
 * isNumber("123");    // false
 */
export function isNumber(value) {
    return typeof value === "number" && !isNaN(value);
}
/**
 * Checks if a value is a boolean.
 *
 * @param value - The value to check.
 * @returns True if the value is a boolean.
 *
 * @example
 * isBoolean(true);     // true
 * isBoolean(false);    // true
 * isBoolean("true");   // false
 */
export function isBoolean(value) {
    return typeof value === "boolean";
}
/**
 * Checks if a value is `null` or `undefined`.
 *
 * @param value - The value to check.
 * @returns True if the value is `null` or `undefined`.
 *
 * @example
 * isNullish(null);        // true
 * isNullish(undefined);   // true
 * isNullish("");          // false
 */
export function isNullish(value) {
    return value === null || value === undefined;
}
/**
 * Check if an unknown value is an array where each item passes a guard.
 * @example
 * isArrayOf(['a', 'b'], isString); // true
 */
export function isArrayOf(value, guard) {
    return Array.isArray(value) && value.every(guard);
}
/**
 * Check if an unknown value is a record with string keys and guarded values.
 */
export function isRecordOf(value, guard) {
    return (typeof value === "object" &&
        value !== null &&
        Object.values(value).every(guard));
}
/**
 * Validates email format.
 */
export const isEmail = (s) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s);
/**
 * Validates an unknown value as a valid email string.
 */
export function validateEmail(value) {
    if (typeof value !== "string")
        return { valid: false, error: "Not a string" };
    if (!isEmail(value))
        return { valid: false, error: "Invalid email format" };
    return { valid: true };
}
/**
 * Validates a string as a UUID v4.
 */
export const isUuid = (s) => /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(s);
/**
 * Checks if a string can be parsed into a valid ISO date.
 */
export const isIsoDate = (s) => !isNaN(Date.parse(s));
/**
 * Safely access deeply nested values without throwing.
 * @example
 * safeAccess(user, u => u.profile?.name);
 */
export function safeAccess(obj, fn) {
    try {
        return fn(obj);
    }
    catch {
        return undefined;
    }
}
