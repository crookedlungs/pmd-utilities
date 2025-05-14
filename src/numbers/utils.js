/**
 * Clamps a value in between a specified minimum and maximum value.
 * @param value The value to clamp.
 * @param min The minimum allowed value. Defaults to `0`.
 * @param max The maximum allowed value. Defaults to `100`.
 * @returns The number clamped between the `min` and `max`.
 * @example
 * clamp(100, 0, 50) // 50
 */
export function clamp(value, min = 0, max = 100) {
    if (value < min) {
        return min;
    }
    else if (value > max) {
        return max;
    }
    else {
        return value;
    }
}
/**
 * Formats a `number` as a `string` with a `%` sign suffix.
 * @param number The number to format.
 * @returns A formatted `%` string.
 * @example
 * formatPercentString(10); // "10%"
 */
export function formatPercentString(number) {
    return `${number}%`;
}
/**
 * Generates a random integer between the specified `min` and `max` values, inclusive.
 * Ensures the result is within the whole number range using `Math.ceil` and `Math.floor`.
 *
 * @param min The minimum integer value (inclusive).
 * @param max The maximum integer value (inclusive).
 * @returns A random integer between `min` and `max`, inclusive.
 *
 * @example
 * const roll = genRandomInRange(1, 6);
 * console.log(`You rolled a ${roll}`); // Output: You rolled a 3 (or any number between 1 and 6)
 *
 * @example
 * const temperature = genRandomInRange(-10, 40);
 * console.log(`Temperature: ${temperature}°C`); // Output: Temperature: 22°C (or any between -10 and 40)
 */
export function genRandomInRange(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}
