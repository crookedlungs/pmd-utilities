import { dirExists } from "../fileSystem/utils.js";
import fs from "fs";
import path from "path";
/**
 * Verifies all app directories and optionally creates them if missing.
 * Can be part of a larger `appInit` function.
 * @param directories Optional, An array of app directories to check for. Will use `dirs` from `./appDef.json` if not provided.
 * @param create Optional, defaults to `false`.
 */
export function verifyAppDirectories(directories = [], create = false) {
    let appDef = null;
    fs.readFile(path.resolve(process.cwd(), "./appDef.json"), "utf8", (err, data) => {
        if (!err) {
            appDef = JSON.parse(data);
        }
    });
    const dirs = appDef.dirs ?? directories;
    for (const dir of dirs) {
        dirExists(dir, create);
    }
}
/* export function getAppDef() {
  const appDef = getFileContents("./appDefs.json");

} */
