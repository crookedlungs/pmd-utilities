/**
 * Represents a case in a switch-like structure where a specific value is matched.
 * @template T The type of the value to be checked.
 * @property value The value to be checked against.
 * @property operation The function to execute when this case is matched.
 */
export type SwitchCase<T> = {
    value: T;
    operation: () => void;
};
/**
 * Represents the default case in a switch-like structure.
 * This case is executed if none of the other cases match.
 * @property default A flag to indicate that this is the default case.
 * @property operation The function to execute when the default case is selected.
 */
export type DefaultCase = {
    default: true;
    operation: () => void;
};
/**
 * Represents a case in a switch-like structure where a specific value is matched
 * and returns a result of type `R` when the operation is executed.
 * @template T The type of the value to be checked.
 * @template R The type of the return value from the operation.
 * @property value The value to be checked against.
 * @property operation The function to execute when this case is matched, returning a value of type `R`.
 */
export type SwitchReturnCase<T, R> = {
    value: T;
    operation: () => R;
};
/**
 * Represents the default case in a switch-like structure, with a return value of type `R`.
 * This case is executed if none of the other cases match.
 * @template R The type of the return value from the operation.
 * @property default A flag to indicate that this is the default case.
 * @property operation The function to execute when the default case is selected, returning a value of type `R`.
 */
export type DefaultReturnCase<R> = {
    default: true;
    operation: () => R;
};
/**
 * A export type that represents an optional value.
 *
 * - `Some<T>`: Indicates a value is present.
 * - `None`: Indicates the absence of a value.
 *
 * This pattern is inspired by languages like Rust and helps avoid issues with `null` or `undefined`.
 *
 * @template T - The export type of the contained value.
 */
export type Option<T> = {
    kind: "some";
    value: T;
} | {
    kind: "none";
};
/**
 * A export type that represents the result of an operation that may succeed (`Ok`) or fail (`Err`).
 *
 * - `Ok<T>`: Represents success and contains a value of export type `T`.
 * - `Err<E>`: Represents failure and contains an error of export type `E`.
 *
 * This pattern is useful for handling errors in a functional way without using exceptions.
 *
 * @template T - The success value export type.
 * @template E - The error value export type.
 */
export type Result<T, E> = {
    ok: true;
    value: T;
} | {
    ok: false;
    error: E;
};
