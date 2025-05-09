[**@pathmaker-digital/pmd-utilities v2.0.5**](../../../../README.md)

***

> `const` **number**: `object` = `pmd_utilities.NumberUtilities`

Defined in: [src/index.ts:42](https://github.com/crookedlungs/pmd-utilities/blob/96f5fb3e3aec03fa6f71925b0e0fb0eacad84699/src/index.ts#L42)

Number manipulation utilities.

## Type declaration

### clamp()

> **clamp**: (`value`, `min`, `max`) => `number`

Clamps a value in between a specified minimum and maximum value.

#### Parameters

##### value

`number`

The value to clamp.

##### min

`number` = `0`

The minimum allowed value. Defaults to `0`.

##### max

`number` = `100`

The maximum allowed value. Defaults to `100`.

#### Returns

`number`

The number clamped between the `min` and `max`.

#### Example

```ts
clamp(100, 0, 50) // 50
```

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
