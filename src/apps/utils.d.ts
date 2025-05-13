/**
 * Verifies all app directories and optionally creates them if missing.
 * Can be part of a larger `appInit` function.
 * @param directories Optional, An array of app directories to check for. Will use `dirs` from `./appDef.json` if not provided.
 * @param create Optional, defaults to `false`.
 */
export declare function verifyAppDirectories(directories?: string[], create?: boolean): void;
