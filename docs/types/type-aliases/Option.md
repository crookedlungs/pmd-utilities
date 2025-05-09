[**@pathmaker-digital/pmd-utilities v2.0.2**](../../README.md)

***

> **Option**\<`T`\> = \{ `kind`: `"some"`; `value`: `T`; \} \| \{ `kind`: `"none"`; \}

Defined in: [types.ts:58](https://github.com/crookedlungs/pmd-utilities/blob/46cbc46e13dc37eb1ceed5549ab48780ef2516a4/types.ts#L58)

A export type that represents an optional value.

- `Some<T>`: Indicates a value is present.
- `None`: Indicates the absence of a value.

This pattern is inspired by languages like Rust and helps avoid issues with `null` or `undefined`.

## Type Parameters

### T

`T`

The export type of the contained value.
