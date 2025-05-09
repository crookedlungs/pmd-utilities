[**@pathmaker-digital/pmd-utilities v2.0.2**](../../README.md)

***

> **Option**\<`T`\> = \{ `kind`: `"some"`; `value`: `T`; \} \| \{ `kind`: `"none"`; \}

Defined in: [types.ts:58](https://github.com/crookedlungs/pmd-utilities/blob/5ca315c6bbade42eec82f4fe36a9e0a801b153e9/types.ts#L58)

A export type that represents an optional value.

- `Some<T>`: Indicates a value is present.
- `None`: Indicates the absence of a value.

This pattern is inspired by languages like Rust and helps avoid issues with `null` or `undefined`.

## Type Parameters

### T

`T`

The export type of the contained value.
