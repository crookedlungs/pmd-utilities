[**@pathmaker-digital/pmd-utilities v2.0.2**](../../../../README.md)

***

> `const` **dates**: `object` = `pmd_utilities.DateUtilities`

Defined in: [src/index.ts:25](https://github.com/crookedlungs/pmd-utilities/blob/e95126ac0ffa3721bf6a80fcac92206614bcb3cc/src/index.ts#L25)

Date manipulation utilities.

## Type declaration

### dateFromString()

> **dateFromString**: (`input`, `locale`) => `string`

Parses a date from mmddyyy format into a JS `Date` locale string.

#### Parameters

##### input

`string`

A date in mmddyyyy format.

##### locale

`string` = `"en-US"`

The locale to use for formatting. Defaults to `en-US`.

#### Returns

`string`

A `Date` locale string.
