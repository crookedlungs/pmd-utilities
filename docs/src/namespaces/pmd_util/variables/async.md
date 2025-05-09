[**@pathmaker-digital/pmd-utilities v2.0.2**](../../../../README.md)

***

> `const` **async**: `object` = `pmd_utilities.AsyncUtilities`

Defined in: [src/index.ts:45](https://github.com/crookedlungs/pmd-utilities/blob/5ca315c6bbade42eec82f4fe36a9e0a801b153e9/src/index.ts#L45)

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
