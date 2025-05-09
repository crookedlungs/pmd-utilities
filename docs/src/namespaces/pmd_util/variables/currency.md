[**@pathmaker-digital/pmd-utilities v2.0.2**](../../../../README.md)

***

> `const` **currency**: `object` = `pmd_utilities.CurrencyUtilities`

Defined in: [src/index.ts:37](https://github.com/crookedlungs/pmd-utilities/blob/216b7eef02efa9e0a1378f6c6f4885544f42cc60/src/index.ts#L37)

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

The tax amount.

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

The total amount including tax.

### convertCurrency()

> **convertCurrency**: (`amount`, `fromRate`, `toRate`) => `number`

Converts an amount from one currency rate to another.

#### Parameters

##### amount

`number`

The amount to convert.

##### fromRate

`number`

The rate of the original currency.

##### toRate

`number`

The rate of the target currency.

#### Returns

`number`

The converted amount.

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

### getTaxRateByState()

> **getTaxRateByState**: (`state`) => `undefined` \| `number`

Gets the sales tax rate for a given US state code.

#### Parameters

##### state

`string`

The 2-letter state abbreviation (e.g., 'CA', 'TX').

#### Returns

`undefined` \| `number`

The sales tax rate as a percentage, or `null` if not found.

### parseCurrency()

> **parseCurrency**: (`currencyString`) => `number`

Parses a currency string (like "$1,234.56") into a number.

#### Parameters

##### currencyString

`string`

The formatted currency string.

#### Returns

`number`

A number value.
