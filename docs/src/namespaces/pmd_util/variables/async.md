[**@pathmaker-digital/pmd-utilities v2.0.4**](../../../../README.md)

***

> `const` **async**: `object` = `pmd_utilities.AsyncUtilities`

Defined in: [src/index.ts:46](https://github.com/crookedlungs/pmd-utilities/blob/b257efe87df84203e61d3fe57b7510d8a3632920/src/index.ts#L46)

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
