[**@pathmaker-digital/pmd-utilities v2.0.5**](../../../../README.md)

***

> `const` **currency**: `object` = `pmd_utilities.CurrencyUtilities`

Defined in: [src/index.ts:38](https://github.com/crookedlungs/pmd-utilities/blob/96f5fb3e3aec03fa6f71925b0e0fb0eacad84699/src/index.ts#L38)

Currency manipulation utilities.

## Type declaration

### calculateTax()

> **calculateTax**: (`subtotal`, `taxRate`) => `number`

Calculates the tax amount for a given subtotal and tax rate.

#### Parameters

##### subtotal

`number`

The pre-tax amount.

##### taxRate

`number`

The tax rate as a percentage (e.g., 8.25 for 8.25%).

#### Returns

`number`

The tax amount, rounded to 2 decimal places.

#### Example

```ts
const tax = calculateTax(100, 8.25);
console.log(tax); // Output: 8.25
```

### calculateTotalWithTax()

> **calculateTotalWithTax**: (`subtotal`, `taxRate`) => `number`

Calculates the total amount after applying tax.

#### Parameters

##### subtotal

`number`

The original amount before tax.

##### taxRate

`number`

The tax rate as a percentage.

#### Returns

`number`

The total amount including tax, rounded to 2 decimal places.

#### Example

```ts
const total = calculateTotalWithTax(100, 8.25);
console.log(total); // Output: 108.25
```

### convertCurrency()

> **convertCurrency**: (`amount`, `fromRate`, `toRate`) => `number`

Converts an amount from one currency rate to another.

#### Parameters

##### amount

`number`

The amount to convert.

##### fromRate

`number`

The exchange rate of the original currency (e.g., USD).

##### toRate

`number`

The exchange rate of the target currency (e.g., EUR).

#### Returns

`number`

The converted amount rounded to 2 decimal places.

#### Examples

```ts
// Convert $10 USD to EUR, where 1 USD = 1 and 1 EUR = 0.85
const converted = convertCurrency(10, 1, 0.85);
console.log(converted); // Output: 8.5
```

```ts
// Convert 100 GBP to JPY, where 1 GBP = 1.2 and 1 JPY = 0.0075
const yen = convertCurrency(100, 1.2, 0.0075);
console.log(yen); // Output: 0.63
```

### formatCurrency()

> **formatCurrency**: (`amount`, `currency`) => `string`

Formats a number into a currency string.

#### Parameters

##### amount

`number`

The number to convert.

##### currency

`string` = `"$"`

The currency symbol to prefix.

#### Returns

`string`

A formatted string like "$5.00"

#### Example

```ts
formatCurrency(10) // "$10"
```

### getTaxRateByState()

> **getTaxRateByState**: (`state`) => `undefined` \| `number`

Gets the sales tax rate for a given US state code.

#### Parameters

##### state

`string`

The 2-letter state abbreviation (e.g., 'CA', 'TX').

#### Returns

`undefined` \| `number`

The sales tax rate as a percentage, or `undefined` if not found.

#### Example

```ts
const rate = getTaxRateByState("TX");
console.log(rate); // Output: 6.25 (if defined in stateTaxRates)
```

### parseCurrency()

> **parseCurrency**: (`currencyString`) => `number`

Parses a currency string (like "$1,234.56") into a number.

#### Parameters

##### currencyString

`string`

The formatted currency string.

#### Returns

`number`

A numeric value extracted from the string.

#### Examples

```ts
const amount = parseCurrency("$1,234.56");
console.log(amount); // Output: 1234.56
```

```ts
const negative = parseCurrency("($500.00)");
console.log(negative); // Output: -500 (if formatted correctly)
```
