[**@pathmaker-digital/pmd-utilities v2.0.2**](../../../../README.md)

***

> `const` **proSwitch**: `object` = `pmd_utilities.SwitchUtilities`

Defined in: [src/index.ts:58](https://github.com/crookedlungs/pmd-utilities/blob/19500705a5dabc231662d26be5057eab6a35ebfe/src/index.ts#L58)

Custom `switch` implementation.

## Type declaration

### proSwitch()

> **proSwitch**: \<`T`\>(`key`, `cases`) => `void`

Implementation of generic `switch` statement to reduce boilerplate.

#### Type Parameters

##### T

`T`

#### Parameters

##### key

`T`

Value to evaluate.

##### cases

([`DefaultCase`](../../../../types/type-aliases/DefaultCase.md) \| [`SwitchCase`](../../../../types/type-aliases/SwitchCase.md)\<`T`\>)[]

Cases to use for switching.

#### Returns

`void`

#### Example

```ts
const color = "blue";

proSwitch(color, [
 { value: "red", operation: () => console.log("Color is red") },
 { value: "blue", operation: () => console.log("Color is blue") },
 { default: true, operation: () => console.log("Unknown color") },
]);
```

### proSwitchReturn()

> **proSwitchReturn**: \<`T`, `R`\>(`key`, `cases`) => `undefined` \| `R`

Similar to a `match` expression in languages like Rust.

#### Type Parameters

##### T

`T`

##### R

`R`

#### Parameters

##### key

`T`

Value to match for.

##### cases

([`SwitchReturnCase`](../../../../types/type-aliases/SwitchReturnCase.md)\<`T`, `R`\> \| [`DefaultReturnCase`](../../../../types/type-aliases/DefaultReturnCase.md)\<`R`\>)[]

Values to match against.

#### Returns

`undefined` \| `R`

A value if a match was found.

#### Example

```ts
const result = proSwitchReturn("green", [
 { value: "red", operation: () => "You chose red" },
 { value: "blue", operation: () => "You chose blue" },
 { default: true, operation: () => "Color not recognized" },
]);

console.log(result); // "Color not recognized"
```
