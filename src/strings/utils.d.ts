/**
 * Determines if a character is lowercase or not.
 * @param char The character to evaluate.
 * @returns `true` if lowercase, `false` if not.
 */
export declare function isLowerCase(char: string): boolean;
/**
 * Determines if a character is uppercase or not.
 * @param char The character to evaluate.
 * @returns `true` if uppercase, `false` if not.
 */
export declare function isUpperCase(char: string): boolean;
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
/**
 * Removes non-letter characters from a string.
 * @param str - The string to remove non-letter characters from.
 * @returns The original string with non-letter characters removed.
 */
export declare function removeNonLetters(str: string, trim?: boolean): string;
/**
 *
 * @param src
 * @returns
 */
export declare function identifyNamingConvention(src: string): NamingConvention | undefined;
/**
 * Union type representing common naming conventions.
 *
 * - `pascal` (e.g., MyVariableName)
 * - `camel` (e.g., myVariableName)
 * - `snake` (e.g., my_variable_name)
 * - `kebab` (e.g., my-variable-name)
 */
export type NamingConvention = "pascal" | "kebab" | "camel" | "snake";
/**
 * Splits a camelCase or PascalCase string into individual words.
 *
 * @param {string} src - The string to split.
 * @returns {string[]} An array of the words extracted from the input.
 */
export declare function splitCamelPascal(src: string): string[];
/**
 * Converts an array of words into a given naming convention.
 *
 * @param {string[]} words - The array of normalized words to convert.
 * @param {NamingConvention} to - The target naming convention.
 * @returns {string} The resulting formatted string.
 */
export declare function formatWords(words: string[], to: NamingConvention): string;
/**
 * Normalizes an array of words by trimming whitespace and converting to lowercase.
 *
 * @param {string[]} words - The array of words to normalize.
 * @returns {string[]} The normalized words.
 */
export declare function normalizeWords(words: string[]): string[];
/**
 * Converts a string or array of words from one naming convention to another.
 *
 * @param {string} from - The original string to convert.
 * @param {NamingConvention} to - The target naming convention.
 * @returns {string} The converted string.
 */
export declare function compoundNameFrom(from: string, to: NamingConvention): string;
/**
 * Converts a string or array of words from one naming convention to another.
 *
 * @param {string[]} from - An array of words to format.
 * @param {NamingConvention} to - The target naming convention.
 * @returns {string} The formatted string.
 */
export declare function compoundNameFrom(from: string[], to: NamingConvention): string;
