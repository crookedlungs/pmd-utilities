[**@pathmaker-digital/pmd-utilities v2.0.5**](../../../../README.md)

***

> `const` **names**: `object` = `pmd_utilities.NameUtilities`

Defined in: [src/index.ts:30](https://github.com/crookedlungs/pmd-utilities/blob/96f5fb3e3aec03fa6f71925b0e0fb0eacad84699/src/index.ts#L30)

Name manipulation utilities.

## Type declaration

### formatNameWithPrefix()

> **formatNameWithPrefix**: (`name`, `prefix`) => `string`

Formats a name with a prefix. Accepts either a string or an object with `firstName` and `lastName`.

#### Parameters

##### name

The name to format, either as a string or an object.

`string` | \{ `firstName`: `string`; `lastName`: `string`; \}

##### prefix

A prefix to prepend (e.g., "Dr", "Ms", "Mr").

`"Mr"` | `"Mrs"` | `"Ms"` | `"Dr"`

#### Returns

`string`

A formatted string in the form of "<prefix>. <full name>".

### mergeFullName()

> **mergeFullName**: (`firstName`, `lastName`, `format`) => `string`

Merges separate first and last name together into a unified `string`.

#### Parameters

##### firstName

`string`

The first name to merge.

##### lastName

`string`

The surname to merge.

##### format

`boolean` = `true`

Whether or not to format the output by capitalizing the first letter of the names. Optional and defaults to `true`.

#### Returns

`string`

A `string` comprised of merged first and last name.

### splitFullName()

> **splitFullName**: (`full_name`, `format`) => `object`

Takes a full name as `string` and returns it as an object containing
first and last name as separate strings. Useful for converting from database
to frontend UI.

#### Parameters

##### full\_name

`string`

A `string` containing both first and last name.

##### format

`boolean` = `true`

Whether or not to format the output by capitalizing the first letter of the names. Optional and defaults to `true`.

#### Returns

`object`

`Object` containing separate first and last name.

##### firstName

> **firstName**: `string`

##### last\_name

> **last\_name**: `string`
