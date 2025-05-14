/**
 * Converts or ensures a word is capitalized.
 * @param word The word to capitalize.
 * @returns The capitalized version of the `word` parameter.
 * @example
 * capitalize("hello"); // "Hello"
 */
export declare function capitalize(word: string): string;
/**
 * Pluralizes a word.
 * @param word The word to pluralize.
 * @returns The plural of the given word.
 * @example
 * pluralize("dog"); // "dogs"
 */
export declare function pluralize(word: string): string;
/**
 * Wraps a value in backticks for use in template literals or documentation.
 * @param value - The value to wrap.
 * @returns The value wrapped in backticks.
 */
export declare function wrapBacktick(value: string | number | boolean): string;
/**
 * Wraps a value in double quotes.
 * @param value - The value to wrap.
 * @returns The value wrapped in double quotes.
 */
export declare function wrapQuotes(value: string | number | boolean): string;
/**
 * Wraps a value in square brackets.
 * @param value - The value to wrap.
 * @returns The value wrapped in square brackets.
 */
export declare function wrapBrackets(value: string | number | boolean): string;
