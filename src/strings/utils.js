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
