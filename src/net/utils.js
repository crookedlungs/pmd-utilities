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
export async function proFetchGet(host, endpoint, query, log = false) {
    const options = {
        method: "GET",
        headers: {
            Accept: "application/json",
        },
    };
    let target = `${host}/${endpoint}`;
    if (query.length > 0) {
        const params = new URLSearchParams();
        query.forEach(({ field, value }) => {
            params.append(field, String(value));
        });
        target += `?${params.toString()}`;
    }
    try {
        const res = await fetch(target, options);
        const text = await res.text();
        if (log) {
            console.log("Raw response:", text);
        }
        const json = JSON.parse(text);
        if (log) {
            console.log("Parsed JSON:", json);
        }
        return json;
    }
    catch (err) {
        console.error("Failed to fetch or parse JSON:", err);
        throw err; // optional, depending on your needs
    }
}
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
export async function proFetchPost(host, endpoint, body, log = false) {
    const options = {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
    };
    const target = `${host}/${endpoint}`;
    try {
        const res = await fetch(target, options);
        const text = await res.text();
        if (log) {
            console.log("Raw response:", text);
        }
        const json = JSON.parse(text);
        if (log) {
            console.log("Parsed JSON:", json);
        }
        return json;
    }
    catch (err) {
        if (log) {
            console.error("Failed to fetch or parse JSON:", err);
        }
        throw err;
    }
}
