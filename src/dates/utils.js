/**
 * Parses a date from mmddyyy format into a JS `Date` locale string.
 * @param input A date in mmddyyyy format.
 * @param locale The locale to use for formatting. Defaults to `en-US`.
 * @returns A `Date` locale string.
 */
export function dateFromString(input, locale = "en-US") {
    const month = input.slice(0, 2);
    const day = input.slice(2, 4);
    const year = input.slice(4, 8);
    // Construct a Date object (note: month is 0-based)
    const date = new Date(Number(year), Number(month) - 1, Number(day));
    // Format as a string
    return date.toLocaleDateString(locale);
}
/**
 * Checks if two Date objects fall on the same calendar day.
 * @param date1 The first date.
 * @param date2 The second date.
 * @returns `true` if both dates are on the same day, otherwise `false`.
 *
 * @example
 * const result = isSameDay(new Date('2024-05-01'), new Date('2024-05-01'));
 * // result === true
 */
export function isSameDay(date1, date2) {
    return (date1.getFullYear() === date2.getFullYear() &&
        date1.getMonth() === date2.getMonth() &&
        date1.getDate() === date2.getDate());
}
/**
 * Converts a timestamp to a human-readable relative time string.
 * @param timestamp The timestamp in milliseconds.
 * @returns A string like "just now", "5 minutes ago", "2 hours ago", etc.
 *
 * @example
 * const msg = getTimeAgo(Date.now() - 60000); // 1 minute ago
 * // msg === "1 minute ago"
 */
export function getTimeAgo(timestamp) {
    const now = Date.now();
    const diff = Math.floor((now - timestamp) / 1000); // in seconds
    if (diff < 5)
        return "just now";
    if (diff < 60)
        return `${diff} seconds ago`;
    if (diff < 3600)
        return `${Math.floor(diff / 60)} minute${diff >= 120 ? "s" : ""} ago`;
    if (diff < 86400)
        return `${Math.floor(diff / 3600)} hour${diff >= 7200 ? "s" : ""} ago`;
    if (diff < 604800)
        return `${Math.floor(diff / 86400)} day${diff >= 172800 ? "s" : ""} ago`;
    const date = new Date(timestamp);
    return date.toLocaleDateString(); // fallback to date
}
