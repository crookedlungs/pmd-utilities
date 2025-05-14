/**
 * Converts or ensures a word is capitalized.
 * @param word The word to capitalize.
 * @returns The capitalized version of the `word` parameter.
 * @example
 * capitalize("hello"); // "Hello"
 */
export function capitalize(word) {
    let out = word.slice(0, 1);
    out = out.toUpperCase();
    return out + word.slice(1);
}
/**
 * Pluralizes a word.
 * @param word The word to pluralize.
 * @returns The plural of the given word.
 * @example
 * pluralize("dog"); // "dogs"
 */
export function pluralize(word) {
    return `${word}s`;
}
/**
 * Wraps a value in backticks for use in template literals or documentation.
 * @param value - The value to wrap.
 * @returns The value wrapped in backticks.
 */
export function wrapBacktick(value) {
    return `\`${value}\``;
}
/**
 * Wraps a value in double quotes.
 * @param value - The value to wrap.
 * @returns The value wrapped in double quotes.
 */
export function wrapQuotes(value) {
    return `"${value}"`;
}
/**
 * Wraps a value in square brackets.
 * @param value - The value to wrap.
 * @returns The value wrapped in square brackets.
 */
export function wrapBrackets(value) {
    return `[${value}]`;
}
/**
 * Removes non-letter characters from a string.
 * @param str - The string to remove non-letter characters from.
 * @returns The original string with non-letter characters removed.
 */
export function removeNonLetters(str, trim = false) {
    let out = str.replace(/[^a-zA-Z]/g, "");
    if (trim) {
        out = out.trim();
    }
    return out;
}
