[**@pathmaker-digital/pmd-utilities v2.0.5**](../../README.md)

***

> **DefaultReturnCase**\<`R`\> = `object`

Defined in: [types.ts:43](https://github.com/crookedlungs/pmd-utilities/blob/96f5fb3e3aec03fa6f71925b0e0fb0eacad84699/types.ts#L43)

Represents the default case in a switch-like structure, with a return value of type `R`.
This case is executed if none of the other cases match.

## Type Parameters

### R

`R`

The type of the return value from the operation.

## Properties

### default

> **default**: `true`

Defined in: [types.ts:44](https://github.com/crookedlungs/pmd-utilities/blob/96f5fb3e3aec03fa6f71925b0e0fb0eacad84699/types.ts#L44)

A flag to indicate that this is the default case.

***

### operation()

> **operation**: () => `R`

Defined in: [types.ts:45](https://github.com/crookedlungs/pmd-utilities/blob/96f5fb3e3aec03fa6f71925b0e0fb0eacad84699/types.ts#L45)

The function to execute when the default case is selected, returning a value of type `R`.

#### Returns

`R`
