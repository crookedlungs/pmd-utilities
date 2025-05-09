[**@pathmaker-digital/pmd-utilities v2.0.5**](../../../../README.md)

***

> `const` **proFetch**: `object` = `pmd_utilities.FetchUtilities`

Defined in: [src/index.ts:54](https://github.com/crookedlungs/pmd-utilities/blob/96f5fb3e3aec03fa6f71925b0e0fb0eacad84699/src/index.ts#L54)

Custom `fetch` implementation.

## Type declaration

### proFetchGet()

> **proFetchGet**: (`host`, `endpoint`, `query`, `log`) => `Promise`\<`any`\>

A "pro" implementation of generic fetch/get.

#### Parameters

##### host

`string`

Host address to fetch from.

##### endpoint

`string`

Endpoint to target.

##### query

`object`[]

Query options

##### log

`boolean` = `false`

Whether to log responses or not. Defaults to `false`.

#### Returns

`Promise`\<`any`\>

#### Example

```ts
const response = await proFetchGet(
  "https://api.example.com",
  "users",
  [{ field: "role", value: "admin" }, { field: "active", value: true }],
  true
);
console.log(response); // Logs the filtered user data if successful.
```

### proFetchPost()

> **proFetchPost**: (`host`, `endpoint`, `body`, `log`) => `Promise`\<`any`\>

A "pro" implementation of generic fetch/post.

#### Parameters

##### host

`string`

Host address to push to.

##### endpoint

`string`

Endpoint to target.

##### body

`Record`\<`string`, `any`\>

The record to post.

##### log

`boolean` = `false`

Whether to log responses or not. Defaults to `false`.

#### Returns

`Promise`\<`any`\>

#### Example

```ts
const response = await proFetchPost(
  "https://api.example.com",
  "submit",
  { name: "Alice", score: 42 },
  true
);
console.log(response); // Logs the confirmation or resulting data from the POST request.
```
