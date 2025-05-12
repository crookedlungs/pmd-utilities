import bcrypt from "bcrypt";
/**
 * Validates if the domain of an email matches the target domain.
 * @param email The email address to validate.
 * @param targetDomain The domain to check against.
 * @returns True if the email's domain matches the target domain, false otherwise.
 * @example
 * validateDomain("user@example.com", "example.com"); // true
 * validateDomain("admin@other.com", "example.com"); // false
 */
export function validateDomain(email, targetDomain) {
    if (isValidEmail(email)) {
        // Check if the email contains exactly one "@" symbol
        const atIndex = email.indexOf("@");
        if (atIndex === -1 || atIndex !== email.lastIndexOf("@")) {
            return false; // Invalid email format
        }
        const domain = email.slice(atIndex + 1); // Extract domain after "@"
        return domain.toLowerCase() === targetDomain.toLowerCase(); // Compare domains case-insensitively}
    }
    else {
        return false; // Email is invalid
    }
}
/**
 * Validates if the email is in a valid format.
 * @param email The email address to validate.
 * @returns True if the email format is valid, false otherwise.
 * @example
 * isValidEmail("user@example.com"); // true
 * isValidEmail("invalid-email"); // false
 */
export function isValidEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
}
/**
 * Generates a random password with a given length, ensuring it meets the strength criteria.
 * Uses `isStrongPassword()` to ensure password is strong. Retries if not.
 * @param length The length of the password to generate.
 * @returns A randomly generated password that is strong.
 * @example
 * const password = generateRandomPassword(12);
 * console.log(password); // Example: "aA1!xYz@9Pq#"
 */
export function generateRandomPassword(length) {
    const charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";
    let password = "";
    // Regenerate password if it's not strong enough
    do {
        password = "";
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * charset.length);
            password += charset[randomIndex];
        }
    } while (!isStrongPassword(password));
    return password;
}
/**
 * Validates if the password is strong.
 * @param password The password to check.
 * @param minLength The minimum password length. Defaults to 8.
 * @returns True if the password meets strength criteria, false otherwise.
 * @example
 * isStrongPassword("aB3$dEfG"); // true
 * isStrongPassword("weakpass"); // false
 */
export function isStrongPassword(password, minLength = 8) {
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumbers = /\d/.test(password);
    const hasSpecialChars = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    return (password.length >= minLength &&
        hasUpperCase &&
        hasLowerCase &&
        hasNumbers &&
        hasSpecialChars);
}
/**
 * Checks if a user has the required role.
 * @param userRoles The roles assigned to the user.
 * @param requiredRole The role required for the action.
 * @returns True if the user has the required role, false otherwise.
 * @example
 * hasRole(["admin", "editor"], "admin"); // true
 * hasRole(["viewer"], "editor"); // false
 */
export function hasRole(userRoles, requiredRole) {
    return userRoles.includes(requiredRole);
}
/**
 * Hashes a password asynchronously.
 * @param password The password to hash.
 * @returns The hashed password.
 * @example
 * const hashed = await hashPassword("SuperSecret123!");
 * console.log(hashed); // $2b$10$...
 */
export async function hashPassword(password) {
    const saltRounds = 10;
    return await bcrypt.hash(password, saltRounds);
}
/**
 * Compares a plain password with a hashed password.
 * @param password The plain password.
 * @param hashedPassword The hashed password to compare against.
 * @returns True if the passwords match, false otherwise.
 * @example
 * const hashed = await hashPassword("myPassword123!");
 * const isMatch = await comparePassword("myPassword123!", hashed);
 * console.log(isMatch); // true
 */
export async function comparePassword(password, hashedPassword) {
    return await bcrypt.compare(password, hashedPassword);
}
/**
 * Generates a version 4 UUID (Universally Unique Identifier) as per RFC 4122.
 *
 * A UUID is a 128-bit value that is unique across space and time. This function
 * uses the `crypto.getRandomValues` method to generate random values for the UUID
 * and ensures compliance with the version 4 and variant 10 specifications.
 *
 * @returns {string} A string representation of the generated UUID in the format:
 *                   xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx
 *                   where `x` is a hexadecimal digit and `y` is one of [8, 9, A, B].
 */
export function uuidv4() {
    const bytes = new Uint8Array(16);
    crypto.getRandomValues(bytes);
    // Per RFC4122 §4.4
    bytes[6] = (bytes[6] & 0x0f) | 0x40; // version 4
    bytes[8] = (bytes[8] & 0x3f) | 0x80; // variant 10
    const toHex = (n) => n.toString(16).padStart(2, "0");
    return (toHex(bytes[0]) +
        toHex(bytes[1]) +
        toHex(bytes[2]) +
        toHex(bytes[3]) +
        "-" +
        toHex(bytes[4]) +
        toHex(bytes[5]) +
        "-" +
        toHex(bytes[6]) +
        toHex(bytes[7]) +
        "-" +
        toHex(bytes[8]) +
        toHex(bytes[9]) +
        "-" +
        toHex(bytes[10]) +
        toHex(bytes[11]) +
        toHex(bytes[12]) +
        toHex(bytes[13]) +
        toHex(bytes[14]) +
        toHex(bytes[15]));
}
