import fs from "fs";
/**
 * Checks if a directory exists and if not, optionally creates it.
 * @param path The directory path to check.
 * @param create Optional input parameter, defaults to false.
 */
export function dirExists(path, create = false) {
    if (fs.existsSync(path)) {
        console.log(`Directory ${path} exists!`);
    }
    else {
        console.log(`Directory ${path} does not exist!`);
        if (create) {
            console.log("Creating it now!");
            fs.mkdirSync(path);
        }
        else {
            console.log("Not creating it.");
        }
    }
}
