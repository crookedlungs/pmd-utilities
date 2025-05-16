/**
 * Parses a date from mmddyyy format into a JS `Date` locale string.
 * @param input A date in mmddyyyy format.
 * @param locale The locale to use for formatting. Defaults to `en-US`.
 * @returns A `Date` locale string.
 */
export declare function dateFromString(input: string, locale?: string): string;
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
export declare function isSameDay(date1: Date, date2: Date): boolean;
/**
 * Converts a timestamp to a human-readable relative time string.
 * @param timestamp The timestamp in milliseconds.
 * @returns A string like "just now", "5 minutes ago", "2 hours ago", etc.
 *
 * @example
 * const msg = getTimeAgo(Date.now() - 60000); // 1 minute ago
 * // msg === "1 minute ago"
 */
export declare function getTimeAgo(timestamp: number): string;
