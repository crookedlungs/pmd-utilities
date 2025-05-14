/**
 * A "pro" implementation of generic fetch/get.
 * @param host Host address to fetch from.
 * @param endpoint Endpoint to target.
 * @param query Query options
 * @param log Whether to log responses or not. Defaults to `false`.
 * @returns
 *
 * @example
 * const response = await proFetchGet(
 *   "https://api.example.com",
 *   "users",
 *   [{ field: "role", value: "admin" }, { field: "active", value: true }],
 *   true
 * );
 * console.log(response); // Logs the filtered user data if successful.
 */
export declare function proFetchGet(host: string, endpoint: string, query: {
    field: string;
    value: any;
}[], log?: boolean): Promise<any>;
/**
 * A "pro" implementation of generic fetch/post.
 * @param host Host address to push to.
 * @param endpoint Endpoint to target.
 * @param body The record to post.
 * @param log Whether to log responses or not. Defaults to `false`.
 * @returns
 *
 * @example
 * const response = await proFetchPost(
 *   "https://api.example.com",
 *   "submit",
 *   { name: "Alice", score: 42 },
 *   true
 * );
 * console.log(response); // Logs the confirmation or resulting data from the POST request.
 */
export declare function proFetchPost(host: string, endpoint: string, body: Record<string, any>, log?: boolean): Promise<any>;
