[**@pathmaker-digital/pmd-utilities v2.0.4**](../../../../README.md)

***

> `const` **dates**: `object` = `pmd_utilities.DateUtilities`

Defined in: [src/index.ts:26](https://github.com/crookedlungs/pmd-utilities/blob/b257efe87df84203e61d3fe57b7510d8a3632920/src/index.ts#L26)

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
