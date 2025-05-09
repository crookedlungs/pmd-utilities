[**@pathmaker-digital/pmd-utilities v2.0.2**](../../README.md)

***

> **SwitchReturnCase**\<`T`, `R`\> = `object`

Defined in: [types.ts:31](https://github.com/crookedlungs/pmd-utilities/blob/5ca315c6bbade42eec82f4fe36a9e0a801b153e9/types.ts#L31)

Represents a case in a switch-like structure where a specific value is matched
and returns a result of type `R` when the operation is executed.

## Type Parameters

### T

`T`

The type of the value to be checked.

### R

`R`

The type of the return value from the operation.

## Properties

### operation()

> **operation**: () => `R`

Defined in: [types.ts:33](https://github.com/crookedlungs/pmd-utilities/blob/5ca315c6bbade42eec82f4fe36a9e0a801b153e9/types.ts#L33)

The function to execute when this case is matched, returning a value of type `R`.

#### Returns

`R`

***

### value

> **value**: `T`

Defined in: [types.ts:32](https://github.com/crookedlungs/pmd-utilities/blob/5ca315c6bbade42eec82f4fe36a9e0a801b153e9/types.ts#L32)

The value to be checked against.
