/**
 * Safely retrieves a deeply nested value from a JSON object using dot notation, with optional fallback.
 *
 * @param path - A dot-separated string path like "ui.settings.theme"
 * @param fallback - A fallback value returned if the path is not found.
 * @returns The found value or the fallback.
 * @example
 * const port = configSafeGet<number>("server.port", 3000);
 * const theme = configSafeGet<string>("ui.settings.theme", "light");
 * const output = configSafeGet<string>("outputDir", "./dist");
 */
export declare function jsonSafeGet<T = any>(json: JSON, path: string, fallback?: T | null): T | null;
