/**
 * Retrieves the value of an environment variable by its key.
 *
 * @param key - The name of the environment variable to retrieve.
 * @returns The value of the specified environment variable.
 * @throws {Error} If the environment variable is not set.
 */
export function getEnv(key) {
    const value = process.env[key];
    if (!value)
        throw new Error(`Missing env variable: ${key}`);
    return value;
}
