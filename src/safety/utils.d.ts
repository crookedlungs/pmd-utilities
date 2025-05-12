import { type Result, type Option } from "../../types";
/**
 * Shorthand validation that a value exists.
 * @param condition The condition to validate against.
 * @param msg Message to throw if condition fails. Default value of `Assertion failed`.
 * @example
 * assert(user != null, "User not found");
// Now `user` is not null or undefined in TS's eyes.
 */
export declare function assert(condition: unknown, msg?: string): asserts condition;
/**
 * Validates that the provided value is truthy (not null or undefined).
 * Returns `boolean` based on truthiness.
 *
 * @param value The value to validate.
 * @param msg Optional custom error message.
 * @returns `True` if the value is not null or undefined, `False` if otherwise.
 * @example
 * const input = getInput();
 * isValid(input); // True if input is valid.
 */
export declare function isValid<T>(value: T): boolean;
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
export declare const Some: <T>(value: T) => Option<T>;
/**
 * Represents the absence of a value.
 *
 * @returns An Option of kind "none".
 * @example
 * const maybeEmpty = None();
 * console.log(maybeEmpty.kind); // "none"
 */
export declare const None: () => Option<never>;
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
export declare function unwrapOr<T>(opt: Option<T>, fallback: T): T;
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
export declare const Ok: <T>(value: T) => Result<T, never>;
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
export declare const Err: <E>(error: E) => Result<never, E>;
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
export declare function unwrapResult<T, E>(res: Result<T, E>): T;
/**
 * Check if a value exists in an enum-like object.
 * @example
 * enum Colors { Red = 'red', Blue = 'blue' }
 * isEnumValue(Colors, 'red'); // true
 */
export declare function isEnumValue<T extends object>(e: T, val: unknown): val is T[keyof T];
/**
 * Throws an error if a value is undefined.
 * @example
 * const user = getOrThrow(getUser(), 'User not found');
 */
export declare function getOrThrow<T>(val: T | undefined, msg?: string): T;
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
export declare function isString(value: unknown): value is string;
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
export declare function isNumber(value: unknown): value is number;
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
export declare function isBoolean(value: unknown): value is boolean;
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
export declare function isNullish(value: unknown): value is null | undefined;
/**
 * Check if an unknown value is an array where each item passes a guard.
 * @example
 * isArrayOf(['a', 'b'], isString); // true
 */
export declare function isArrayOf<T>(value: unknown, guard: (x: unknown) => x is T): value is T[];
/**
 * Check if an unknown value is a record with string keys and guarded values.
 */
export declare function isRecordOf<T>(value: unknown, guard: (x: unknown) => x is T): value is Record<string, T>;
/**
 * Validates email format.
 */
export declare const isEmail: (s: string) => boolean;
export type ValidationResult = {
    valid: true;
} | {
    valid: false;
    error: string;
};
/**
 * Validates an unknown value as a valid email string.
 */
export declare function validateEmail(value: unknown): ValidationResult;
/**
 * Validates a string as a UUID v4.
 */
export declare const isUuid: (s: string) => boolean;
/**
 * Checks if a string can be parsed into a valid ISO date.
 */
export declare const isIsoDate: (s: string) => boolean;
/**
 * Safely access deeply nested values without throwing.
 * @example
 * safeAccess(user, u => u.profile?.name);
 */
export declare function safeAccess<T, R>(obj: T, fn: (val: T) => R): R | undefined;
