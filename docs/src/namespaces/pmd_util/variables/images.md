[**@pathmaker-digital/pmd-utilities v2.0.2**](../../../../README.md)

***

> `const` **images**: `object` = `pmd_utilities.ImageUtilities`

Defined in: [src/index.ts:66](https://github.com/crookedlungs/pmd-utilities/blob/19500705a5dabc231662d26be5057eab6a35ebfe/src/index.ts#L66)

Image manipulation helpers.

## Type declaration

### getAspectRatio()

> **getAspectRatio**: (`height`, `width`) => `number`

Calculates the aspect ratio (width divided by height).

#### Parameters

##### height

`number`

The height of the element.

##### width

`number`

The width of the element.

#### Returns

`number`

The aspect ratio as a number (width / height).

#### Example

```ts
const ar = getAspectRatio(1080, 1920);
console.log(ar); // Output: 1.7777777777777777 (which is 16:9)
```

### getHeightFromAR()

> **getHeightFromAR**: (`height`, `ar`) => `number`

Calculates the width of an element from its height and aspect ratio.

#### Parameters

##### height

`number`

The height of the element.

##### ar

`number`

The aspect ratio (width / height).

#### Returns

`number`

The calculated width, rounded to the nearest whole number.

#### Example

```ts
const width = getHeightFromAR(1080, 1.7777777778);
console.log(width); // Output: 1920
```

### getWidthFromAR()

> **getWidthFromAR**: (`width`, `ar`) => `number`

Calculates the height of an element from its width and aspect ratio.

#### Parameters

##### width

`number`

The width of the element.

##### ar

`number`

The aspect ratio (width / height).

#### Returns

`number`

The calculated height, rounded to the nearest whole number.

#### Example

```ts
const height = getWidthFromAR(1920, 1.7777777778);
console.log(height); // Output: 1080
```
