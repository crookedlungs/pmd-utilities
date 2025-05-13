import { SwitchCase, DefaultCase, SwitchReturnCase, DefaultReturnCase } from "../../types.js";
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
export declare function proSwitch<T>(key: T, cases: (SwitchCase<T> | DefaultCase)[]): void;
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
export declare function proSwitchReturn<T, R>(key: T, cases: (SwitchReturnCase<T, R> | DefaultReturnCase<R>)[]): R | undefined;
