/**
 * Checks if a directory exists and if not, optionally creates it.
 * @param path The directory path to check.
 * @param create Optional input parameter, defaults to false.
 */
export declare function dirExists(path: string, create?: boolean): void;
/**
 * Get the contents from a file.
 * @param file The file to read referenced from the project root.
 * @returns A JSON object or `null` if no file was found.
 */
export declare function getFileContents(file: string): object | null;
