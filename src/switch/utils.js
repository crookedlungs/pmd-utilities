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
export function proSwitch(key, cases) {
    for (const c of cases) {
        if ("default" in c && c.default) {
            c.operation(); // run default if nothing else matched later
            return;
        }
        if ("value" in c && c.value === key) {
            c.operation();
            return;
        }
    }
}
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
export function proSwitchReturn(key, cases) {
    let defaultCase;
    for (const c of cases) {
        if ("default" in c && c.default) {
            defaultCase = c.operation;
        }
        else if ("value" in c && c.value === key) {
            return c.operation();
        }
    }
    return defaultCase?.();
}
