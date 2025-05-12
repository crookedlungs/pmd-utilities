/**
 * Creates a throttled function that only invokes the provided function at most once every `wait` milliseconds.
 * If the function is invoked multiple times in quick succession, only the first call in the given `wait` period will be executed.
 *
 * @param fn The function to throttle.
 * @param wait The number of milliseconds to wait between invocations.
 * @returns A throttled function.
 *
 * @example
 * const throttledLog = throttle((message: string) => console.log(message), 1000);
 * throttledLog("Hello"); // Will log "Hello"
 * throttledLog("World"); // Will be ignored because it's within the 1000ms window.
 */
export declare function throttle(fn: Function, wait: number): (...args: any[]) => void;
/**
 * Returns a promise that resolves after a specified number of milliseconds.
 * This is useful for delaying actions in asynchronous code.
 *
 * @param ms The number of milliseconds to wait before resolving.
 * @returns A promise that resolves after the given `ms`.
 *
 * @example
 * await wait(2000); // Waits for 2 seconds before continuing
 * console.log("This will print after 2 seconds");
 */
export declare function wait(ms: number): Promise<void>;
/**
 * Creates a debounced function that delays the invocation of the provided function
 * until after the specified `wait` time has passed since the last time it was invoked.
 *
 * @param fn The function to debounce.
 * @param wait The number of milliseconds to wait before calling the function.
 * @returns A debounced function.
 *
 * @example
 * const debouncedLog = debounce((message: string) => console.log(message), 500);
 * debouncedLog("Hello"); // Will log "Hello" after 500ms if no other calls happen in that time.
 */
export declare function debounce(fn: Function, wait: number): (...args: any[]) => void;
/**
 * Measures the performance of an asynchronous function by timing its execution.
 *
 * @template T - The return type of the asynchronous function.
 * @param label - A label to identify the measurement in the console log.
 * @param fn - The asynchronous function to be measured.
 * @returns A promise that resolves to the result of the asynchronous function.
 *
 * @example
 * ```typescript
 * async function fetchData() {
 *   // Simulate an API call
 *   return new Promise((resolve) => setTimeout(() => resolve("data"), 1000));
 * }
 *
 * const result = await measurePerformance("Fetch Data", fetchData);
 * console.log(result); // Outputs: "data"
 * ```
 */
export declare function measurePerformance<T>(label: string, fn: () => Promise<T>): Promise<T>;
