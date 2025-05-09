[**@pathmaker-digital/pmd-utilities v2.0.2**](../../../../README.md)

***

> `const` **async**: `object` = `pmd_utilities.AsyncUtilities`

Defined in: [src/index.ts:45](https://github.com/crookedlungs/pmd-utilities/blob/46cbc46e13dc37eb1ceed5549ab48780ef2516a4/src/index.ts#L45)

Async helpers.

## Type declaration

### tryCatchAsync()

> **tryCatchAsync**: \<`T`\>(`asyncFunc`, `fallback`) => `Promise`\<`T`\>

Wraps the function passed to `asyncFunc` in a try/catch block to reduce boilerplate code.

#### Type Parameters

##### T

`T`

#### Parameters

##### asyncFunc

() => `Promise`\<`T`\>

The function to wrap in the try/catch.

##### fallback

`T`

Custom fallback value or error message.

#### Returns

`Promise`\<`T`\>

A promise determined by the input function.
