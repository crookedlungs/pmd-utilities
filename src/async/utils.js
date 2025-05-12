/**
 * Wraps the function passed to `asyncFunc` in a try/catch block to reduce boilerplate code.
 * @param asyncFunc The function to wrap in the try/catch.
 * @param fallback Custom fallback value or error message.
 * @returns A promise determined by the input function.
 */
export async function tryCatchAsync(asyncFunc, fallback) {
    try {
        return await asyncFunc();
    }
    catch (error) {
        console.error("Error occurred:", error);
        return fallback;
    }
}
