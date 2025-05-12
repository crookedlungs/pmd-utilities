import { dirExists } from "../fileSystem/utils.js";
/**
 * Verifies all app directories and optionally creates them if missing.
 * Can be part of a larger `appInit` function.
 * @param directories An array of app directories to check for.
 * @param create Optional input, defaults to `false`.
 */
export function verifyAppDirectories(directories, create = false) {
    for (const dir of directories) {
        dirExists(dir, create);
    }
}
