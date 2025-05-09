[**@pathmaker-digital/pmd-utilities v2.0.4**](../../../../README.md)

***

> `const` **number**: `object` = `pmd_utilities.NumberUtilities`

Defined in: [src/index.ts:42](https://github.com/crookedlungs/pmd-utilities/blob/9f39d32abe09ed42c70c16473f8a612f4d8491bd/src/index.ts#L42)

Number manipulation utilities.

## Type declaration

### formatPercentString()

> **formatPercentString**: (`number`) => `string`

Formats a `number` as a `string` with a `%` sign suffix.

#### Parameters

##### number

`number`

The number to format.

#### Returns

`string`

A formatted `%` string.

#### Example

```ts
formatPercentString(10); // "10%"
```

### genRandomInRange()

> **genRandomInRange**: (`min`, `max`) => `number`

Generates a random integer between the specified `min` and `max` values, inclusive.
Ensures the result is within the whole number range using `Math.ceil` and `Math.floor`.

#### Parameters

##### min

`number`

The minimum integer value (inclusive).

##### max

`number`

The maximum integer value (inclusive).

#### Returns

`number`

A random integer between `min` and `max`, inclusive.

#### Examples

```ts
const roll = genRandomInRange(1, 6);
console.log(`You rolled a ${roll}`); // Output: You rolled a 3 (or any number between 1 and 6)
```

```ts
const temperature = genRandomInRange(-10, 40);
console.log(`Temperature: ${temperature}°C`); // Output: Temperature: 22°C (or any between -10 and 40)
```
