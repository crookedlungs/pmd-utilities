import { isValid, None, Some } from "../safety/utils.js";
/**
 * Functional if/else utility. Executes or returns based on a condition.
 *
 * @param condition - Boolean condition to evaluate.
 * @param value - Optional value passed to both branches.
 *
 * @returns An API to define the `then` and `else` branches.
 *
 * @example
 * const result = branch(true, 42)
 * .then((val) => `Yes: ${val}`)
 * .else((val) => `No: ${val}`);
 * console.log(result); // Yes: 42
 *
 * @example
 * const result = branch(false)
 * .then(() => 'Yes')
 * .else(() => 'No');
 * console.log(result); // No
 *
 */
export function branch(condition, value) {
    return {
        then: (onTrue) => ({
            else: (onFalse) => (condition ? onTrue(value) : onFalse(value)),
        }),
    };
}
/**
 * Executes a function only if the condition is `false`.
 * This is an inverse of an `if` statement, providing a concise way to execute logic only if the condition is not met.
 *
 * @param cond - The condition to check.
 * @param fn - The function to execute if the condition is `false`.
 *
 * @example
 * // Will log "Access denied" because the condition is false
 * unless(user.isAdmin, () => console.log("Access denied"));
 *
 * @example
 * // Will not log anything because the condition is true
 * unless(user.isAdmin, () => console.log("Access denied"));
 */
export function unless(cond, fn) {
    if (!cond)
        fn();
}
/**
 * Repeatedly executes a function until a specified condition is met or a maximum number of attempts is reached.
 * Useful for retrying an operation with an interval or condition check.
 *
 * @param fn - The function to execute repeatedly.
 * @param predicate - A function that checks if the result of `fn` meets the desired condition.
 * @param maxTries - Maximum number of attempts to execute the function (default is 10).
 * @returns The result of `fn` once the predicate is satisfied or the maximum attempts are reached.
 *
 * @example
 * // Attempts to generate a valid email address, retrying up to 5 times
 * const result = repeatUntil(generateEmail, email => email.includes('@'), 5);
 *
 * @example
 * // Retries generating a random number between 1 and 5 until it's greater than 3
 * const number = repeatUntil(() => Math.floor(Math.random() * 5) + 1, n => n > 3);
 * console.log(number); // Outputs a number greater than 3
 */
export function repeatUntil(fn, predicate, maxTries = 10) {
    let result;
    let attempts = 0;
    do {
        result = fn();
        attempts++;
    } while (!predicate(result) && attempts < maxTries);
    return result;
}
/**
 * Executes a function if the condition is `true`. If the condition is `false`, returns `undefined`.
 * This is a concise way to run code conditionally without using a full `if` statement.
 *
 * @param cond - The condition to check.
 * @param fn - The function to execute if the condition is `true`.
 * @returns The result of the function if the condition is `true`, otherwise `undefined`.
 *
 * @example
 * // Will execute the function and return the result because the condition is true
 * const result = doIf(true, () => "Hello, world!");
 * console.log(result); // "Hello, world!"
 *
 * @example
 * // Will not execute the function and return undefined because the condition is false
 * const result = doIf(false, () => "This will not run");
 * console.log(result); // undefined
 */
export function doIf(cond, fn) {
    return cond ? fn() : undefined;
}
/**
 * Runs a function if `value` is valid (not null or undefined), and returns the result as an Option.
 *
 * @param value - The value to validate.
 * @param fn - The function to run if value is valid.
 * @returns `Some(fn())` if value is valid, otherwise `None()`.
 * @example
 * const maybeName = ifValid("Jane", () => "Hello, Jane");
 * // maybeName.kind === "some"
 *
 * const maybeNothing = ifValid(null, () => "This won't run");
 * // maybeNothing.kind === "none"
 */
export function ifValid(value, fn) {
    return isValid(value) ? Some(fn()) : None();
}
/**
 * Tries to execute a function and returns an object with the result of the attempt.
 * If the function executes successfully, it returns the result inside an object with `success: true`.
 * If an error is thrown, it returns the error inside an object with `success: false`.
 *
 * @param fn - The function to attempt to execute.
 * @returns An object containing `success: true` with the result if the function executes successfully,
 * or `success: false` with the error if the function throws an error.
 *
 * @example
 * // Successful execution
 * const result = attempt(() => {
 *   return "Success!";
 * });
 * console.log(result); // { success: true, result: "Success!" }
 *
 * @example
 * // Unsuccessful execution (throws error)
 * const result = attempt(() => {
 *   throw new Error("Something went wrong");
 * });
 * console.log(result); // { success: false, error: Error("Something went wrong") }
 */
export function attempt(fn) {
    try {
        return { success: true, result: fn() };
    }
    catch (error) {
        return { success: false, error };
    }
}
