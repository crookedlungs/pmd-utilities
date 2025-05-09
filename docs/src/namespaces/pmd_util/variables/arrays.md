[**@pathmaker-digital/pmd-utilities v2.0.2**](../../../../README.md)

***

> `const` **arrays**: `object` = `pmd_utilities.ArrayUtilities`

Defined in: [src/index.ts:33](https://github.com/crookedlungs/pmd-utilities/blob/216b7eef02efa9e0a1378f6c6f4885544f42cc60/src/index.ts#L33)

Array manipulation utilities.

## Type declaration

### allExcept()

> **allExcept**: \<`T`, `K`\>(`array`, `property`, `excludeValue`) => `T`[]

Returns a new array excluding items where a given property matches a specific value.

#### Type Parameters

##### T

`T`

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### array

`T`[]

The original array to filter.

##### property

`K`

The property of each item to check.

##### excludeValue

`T`\[`K`\]

The value to exclude from the result.

#### Returns

`T`[]

A new array containing all items except those matching the exclude value.

#### Example

```ts
const nonAdmins = allExcept(users, 'role', 'admin');
```

### bulkRemoveFromArray()

> **bulkRemoveFromArray**: \<`T`, `K`\>(`array`, `key`, `values`) => `T`[]

Remove multiple items from an array by matching a property against a list of values.
Returns a new array without the matched items.

#### Type Parameters

##### T

`T`

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### array

`T`[]

The original array.

##### key

`K`

The property key to match.

##### values

`T`\[`K`\][]

The list of values to remove.

#### Returns

`T`[]

A new array without the matched items.

### bulkUpdateInArray()

> **bulkUpdateInArray**: \<`T`, `K`\>(`array`, `key`, `values`, `updater`) => `T`[]

Update multiple items in an array by matching a property against a list of values.
Returns a new array with the matched items updated.

#### Type Parameters

##### T

`T`

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### array

`T`[]

The original array.

##### key

`K`

The property key to match.

##### values

`T`\[`K`\][]

The list of values to update.

##### updater

(`item`) => `T`

A function that returns the updated item.

#### Returns

`T`[]

A new array with the updated items.

### clearArray()

> **clearArray**: \<`T`\>(`array`) => `Promise`\<`void`\>

Clear the entire array. This is destructive.

#### Type Parameters

##### T

`T`

#### Parameters

##### array

`T`[]

The array to clear.

#### Returns

`Promise`\<`void`\>

### findInArray()

> **findInArray**: \<`T`, `K`\>(`array`, `key`, `value`) => `undefined` \| `T`

Find an item in an array by a specific property and value.

#### Type Parameters

##### T

`T`

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### array

`T`[]

The array to search.

##### key

`K`

The property key to match.

##### value

`T`\[`K`\]

The value to match.

#### Returns

`undefined` \| `T`

The found item or undefined.

### findIndexInArray()

> **findIndexInArray**: \<`T`, `K`\>(`array`, `key`, `value`) => `number`

Find the index of an item in an array by a specific property and value.

#### Type Parameters

##### T

`T`

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### array

`T`[]

The array to search.

##### key

`K`

The property key to match.

##### value

`T`\[`K`\]

The value to match.

#### Returns

`number`

The index of the item, or -1 if not found.

### removeAt()

> **removeAt**: \<`T`\>(`arr`, `index`) => `void`

Remove an item in an array at a specific index.

#### Type Parameters

##### T

`T`

#### Parameters

##### arr

`T`[]

The array to search through.

##### index

`number`

The index to remove.

#### Returns

`void`

### removeFromArray()

> **removeFromArray**: \<`T`, `K`\>(`array`, `key`, `value`) => `T`[]

Remove an item from an array by matching a property and value.
Returns a new array without the matched item.

#### Type Parameters

##### T

`T`

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### array

`T`[]

The original array.

##### key

`K`

The property key to match.

##### value

`T`\[`K`\]

The value to match.

#### Returns

`T`[]

A new array without the matched item.

### requireInArray()

> **requireInArray**: \<`T`, `K`\>(`array`, `key`, `value`) => `T`

Find an item in an array by a specific property and value.
Throws an error if not found.

#### Type Parameters

##### T

`T`

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### array

`T`[]

The array to search.

##### key

`K`

The property key to match.

##### value

`T`\[`K`\]

The value to match.

#### Returns

`T`

The found item.

### updateInArray()

> **updateInArray**: \<`T`, `K`\>(`array`, `key`, `value`, `updater`) => `T`[]

Update an item in an array by matching a property and value.
Returns a new array with the item updated.

#### Type Parameters

##### T

`T`

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### array

`T`[]

The original array.

##### key

`K`

The property key to match.

##### value

`T`\[`K`\]

The value to match.

##### updater

(`item`) => `T`

A function that returns the updated item.

#### Returns

`T`[]

A new array with the updated item.
