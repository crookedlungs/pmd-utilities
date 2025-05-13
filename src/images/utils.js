/**
 * Calculates the aspect ratio (width divided by height).
 *
 * @param height - The height of the element.
 * @param width - The width of the element.
 * @returns The aspect ratio as a number (width / height).
 *
 * @example
 * const ar = getAspectRatio(1080, 1920);
 * console.log(ar); // Output: 1.7777777777777777 (which is 16:9)
 */
export function getAspectRatio(height, width) {
    return width / height;
}
/**
 * Calculates the width of an element from its height and aspect ratio.
 *
 * @param height - The height of the element.
 * @param ar - The aspect ratio (width / height).
 * @returns The calculated width, rounded to the nearest whole number.
 *
 * @example
 * const width = getHeightFromAR(1080, 1.7777777778);
 * console.log(width); // Output: 1920
 */
export function getHeightFromAR(height, ar) {
    return Math.round(height * ar);
}
/**
 * Calculates the height of an element from its width and aspect ratio.
 *
 * @param width - The width of the element.
 * @param ar - The aspect ratio (width / height).
 * @returns The calculated height, rounded to the nearest whole number.
 *
 * @example
 * const height = getWidthFromAR(1920, 1.7777777778);
 * console.log(height); // Output: 1080
 */
export function getWidthFromAR(width, ar) {
    return Math.round(width / ar);
}
