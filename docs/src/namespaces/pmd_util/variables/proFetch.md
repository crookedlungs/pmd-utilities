[**@pathmaker-digital/pmd-utilities v2.0.2**](../../../../README.md)

***

> `const` **proFetch**: `object` = `pmd_utilities.FetchUtilities`

Defined in: [src/index.ts:53](https://github.com/crookedlungs/pmd-utilities/blob/216b7eef02efa9e0a1378f6c6f4885544f42cc60/src/index.ts#L53)

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

Whether to log responses or not. Defaults to false.

#### Returns

`Promise`\<`any`\>

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

Whether to log responses or not. Defaults to false.

#### Returns

`Promise`\<`any`\>

#### Example

```ts
const response = await proFetchPost(
 "https://api.example.com",
 "submit",
 { name: "Alice", score: 42 }
);
```
