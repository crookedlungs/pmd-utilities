/**
 * Validates if the domain of an email matches the target domain.
 * @param email The email address to validate.
 * @param targetDomain The domain to check against.
 * @returns True if the email's domain matches the target domain, false otherwise.
 * @example
 * validateDomain("user@example.com", "example.com"); // true
 * validateDomain("admin@other.com", "example.com"); // false
 */
export declare function validateDomain(email: string, targetDomain: string): boolean;
/**
 * Validates if the email is in a valid format.
 * @param email The email address to validate.
 * @returns True if the email format is valid, false otherwise.
 * @example
 * isValidEmail("user@example.com"); // true
 * isValidEmail("invalid-email"); // false
 */
export declare function isValidEmail(email: string): boolean;
/**
 * Generates a random password with a given length, ensuring it meets the strength criteria.
 * Uses `isStrongPassword()` to ensure password is strong. Retries if not.
 * @param length The length of the password to generate.
 * @returns A randomly generated password that is strong.
 * @example
 * const password = generateRandomPassword(12);
 * console.log(password); // Example: "aA1!xYz@9Pq#"
 */
export declare function generateRandomPassword(length: number): string;
/**
 * Validates if the password is strong.
 * @param password The password to check.
 * @param minLength The minimum password length. Defaults to 8.
 * @returns True if the password meets strength criteria, false otherwise.
 * @example
 * isStrongPassword("aB3$dEfG"); // true
 * isStrongPassword("weakpass"); // false
 */
export declare function isStrongPassword(password: string, minLength?: number): boolean;
/**
 * Checks if a user has the required role.
 * @param userRoles The roles assigned to the user.
 * @param requiredRole The role required for the action.
 * @returns True if the user has the required role, false otherwise.
 * @example
 * hasRole(["admin", "editor"], "admin"); // true
 * hasRole(["viewer"], "editor"); // false
 */
export declare function hasRole(userRoles: string[], requiredRole: string): boolean;
/**
 * Hashes a password asynchronously.
 * @param password The password to hash.
 * @returns The hashed password.
 * @example
 * const hashed = await hashPassword("SuperSecret123!");
 * console.log(hashed); // $2b$10$...
 */
export declare function hashPassword(password: string): Promise<string>;
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
export declare function comparePassword(password: string, hashedPassword: string): Promise<boolean>;
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
export declare function uuidv4(): string;
