[**@pathmaker-digital/pmd-utilities v2.0.2**](../../README.md)

***

> **Result**\<`T`, `E`\> = \{ `ok`: `true`; `value`: `T`; \} \| \{ `error`: `E`; `ok`: `false`; \}

Defined in: [types.ts:71](https://github.com/crookedlungs/pmd-utilities/blob/19500705a5dabc231662d26be5057eab6a35ebfe/types.ts#L71)

A export type that represents the result of an operation that may succeed (`Ok`) or fail (`Err`).

- `Ok<T>`: Represents success and contains a value of export type `T`.
- `Err<E>`: Represents failure and contains an error of export type `E`.

This pattern is useful for handling errors in a functional way without using exceptions.

## Type Parameters

### T

`T`

The success value export type.

### E

`E`

The error value export type.
