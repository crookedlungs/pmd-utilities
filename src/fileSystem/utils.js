import fs from "fs";
import path from "path";
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
/**
 * Get the contents from a file.
 * @param file The file to read referenced from the project root.
 * @returns A JSON object or `null` if no file was found.
 */
export function getFileContents(file) {
    let out = null;
    fs.readFile(path.resolve(process.cwd(), file), "utf8", (err, data) => {
        if (err)
            throw err;
        out = JSON.parse(data);
    });
    return out;
}
