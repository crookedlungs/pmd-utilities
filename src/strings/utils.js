/**
 * Determines if a character is lowercase or not.
 * @param char The character to evaluate.
 * @returns `true` if lowercase, `false` if not.
 */
export function isLowerCase(char) {
    return char >= "a" && char <= "z";
}
/**
 * Determines if a character is uppercase or not.
 * @param char The character to evaluate.
 * @returns `true` if uppercase, `false` if not.
 */
export function isUpperCase(char) {
    return char >= "A" && char <= "Z";
}
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
    let out = str.replace(/[^a-zA-Z0-9_]/g, "");
    if (trim) {
        out = out.trim();
    }
    return out;
}
/**
 *
 * @param src
 * @returns
 */
export function identifyNamingConvention(src) {
    if (src.includes("-"))
        return "kebab";
    if (src.includes("_") && src[0] != "_")
        return "snake";
    if (isLowerCase(src[0]))
        return "camel";
    if (isUpperCase(src[0]))
        return "pascal";
}
/**
 * Splits a camelCase or PascalCase string into individual words.
 *
 * @param {string} src - The string to split.
 * @returns {string[]} An array of the words extracted from the input.
 */
export function splitCamelPascal(src) {
    return (src
        .match(/([A-Z]?[^A-Z]*)/g)
        ?.filter(Boolean)
        .map((s) => s.trim()) ?? []);
}
/**
 * Converts an array of words into a given naming convention.
 *
 * @param {string[]} words - The array of normalized words to convert.
 * @param {NamingConvention} to - The target naming convention.
 * @returns {string} The resulting formatted string.
 */
export function formatWords(words, to) {
    const normalized = normalizeWords(words);
    switch (to) {
        case "snake":
            return normalized.join("_");
        case "kebab":
            return normalized.join("-");
        case "pascal":
            return normalized.map((w) => capitalize(w)).join("");
        case "camel":
            return normalized.map((w, i) => (i === 0 ? w : capitalize(w))).join("");
    }
}
/**
 * Normalizes an array of words by trimming whitespace and converting to lowercase.
 *
 * @param {string[]} words - The array of words to normalize.
 * @returns {string[]} The normalized words.
 */
export function normalizeWords(words) {
    return words.map((w) => w.toLowerCase().trim());
}
/**
 * Converts a string or an array of words into a specified naming convention.
 *
 * If the input is a string, its naming convention is auto-detected. The function
 * can also preserve a leading underscore (e.g., `_unusedVar`) if requested.
 *
 * @param {string | string[]} from - The input name, either as a compound string or an array of words.
 * @param {NamingConvention} to - The desired target naming convention.
 * @param {boolean} [preserveLeadingUnderscore=false] - If `true`, preserves a leading underscore in the output
 *                                                      (e.g., "_fooBar" → "_foo_bar").
 * @returns {string} The name formatted in the specified convention.
 */
export function compoundNameFrom(from, to, preserveLeadingUnderscore = false) {
    if (!from || (Array.isArray(from) && from.length === 0))
        return "";
    let words = [];
    let preserveUnderscorePrefix = false;
    if (typeof from === "string") {
        from = from.trim();
        // Remember and strip leading underscore if present
        preserveUnderscorePrefix = from.startsWith("_");
        if (preserveUnderscorePrefix) {
            from = from.slice(1);
        }
        const convention = identifyNamingConvention(from);
        if (!convention) {
            console.warn(`Unknown naming convention for input: ${from}`);
            return from;
        }
        switch (convention) {
            case "camel":
            case "pascal":
                words = splitCamelPascal(from);
                break;
            case "snake":
                words = from.split("_");
                break;
            case "kebab":
                words = from.split("-");
                break;
        }
    }
    else {
        words = normalizeWords(from);
    }
    return ((preserveUnderscorePrefix && preserveLeadingUnderscore ? "_" : "") +
        formatWords(words, to));
}
