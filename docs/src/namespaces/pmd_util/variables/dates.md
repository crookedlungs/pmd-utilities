[**@pathmaker-digital/pmd-utilities v2.0.2**](../../../../README.md)

***

> `const` **dates**: `object` = `pmd_utilities.DateUtilities`

Defined in: [src/index.ts:25](https://github.com/crookedlungs/pmd-utilities/blob/5ca315c6bbade42eec82f4fe36a9e0a801b153e9/src/index.ts#L25)

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
