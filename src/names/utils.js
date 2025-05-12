import { capitalize } from "../strings/utils.js";
/**
 * Takes a full name as `string` and returns it as an object containing
 * first and last name as separate strings. Useful for converting from database
 * to frontend UI.
 * @param full_name A `string` containing both first and last name.
 * @param format Whether or not to format the output by capitalizing the first letter of the names. Optional and defaults to `true`.
 * @returns `Object` containing separate first and last name.
 */
export function splitFullName(full_name, format = true) {
    const names = full_name.trim().split(/\s+/); // split by whitespace
    const firstName = names[0] || "";
    const lastName = names.slice(1).join(" ") || ""; // join rest as last name
    return {
        firstName: format ? capitalize(firstName) : firstName,
        lastName: format ? capitalize(lastName) : lastName,
    };
}
/**
 * Merges separate first and last name together into a unified `string`.
 * @param firstName The first name to merge.
 * @param lastName The surname to merge.
 * @param format Whether or not to format the output by capitalizing the first letter of the names. Optional and defaults to `true`.
 * @returns A `string` comprised of merged first and last name.
 */
export function mergeFullName(firstName, lastName, format = true) {
    return `${format ? capitalize(firstName) : firstName} ${format ? capitalize(lastName) : lastName}`;
}
/**
 * Formats a name with a prefix. Accepts either a string or an object with `firstName` and `lastName`.
 * @param name The name to format, either as a string or an object.
 * @param prefix A prefix to prepend (e.g., "Dr", "Ms", "Mr").
 * @returns A formatted string in the form of "<prefix>. <full name>".
 */
export function formatNameWithPrefix(name, prefix) {
    const fullName = typeof name === "string"
        ? name
        : mergeFullName(name.firstName.length === 0 ? "John" : name.firstName, name.lastName.length === 0 ? "Doe" : name.lastName);
    return `${prefix}. ${fullName}`;
}
