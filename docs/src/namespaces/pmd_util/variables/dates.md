[**@pathmaker-digital/pmd-utilities v2.0.5**](../../../../README.md)

***

> `const` **dates**: `object` = `pmd_utilities.DateUtilities`

Defined in: [src/index.ts:26](https://github.com/crookedlungs/pmd-utilities/blob/96f5fb3e3aec03fa6f71925b0e0fb0eacad84699/src/index.ts#L26)

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

### getTimeAgo()

> **getTimeAgo**: (`timestamp`) => `string`

Converts a timestamp to a human-readable relative time string.

#### Parameters

##### timestamp

`number`

The timestamp in milliseconds.

#### Returns

`string`

A string like "just now", "5 minutes ago", "2 hours ago", etc.

#### Example

```ts
const msg = getTimeAgo(Date.now() - 60000); // 1 minute ago
// msg === "1 minute ago"
```

### isSameDay()

> **isSameDay**: (`date1`, `date2`) => `boolean`

Checks if two Date objects fall on the same calendar day.

#### Parameters

##### date1

`Date`

The first date.

##### date2

`Date`

The second date.

#### Returns

`boolean`

`true` if both dates are on the same day, otherwise `false`.

#### Example

```ts
const result = isSameDay(new Date('2024-05-01'), new Date('2024-05-01'));
// result === true
```
