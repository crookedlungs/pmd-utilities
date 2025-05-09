[**@pathmaker-digital/pmd-utilities v2.0.5**](../../../../README.md)

***

> `const` **performance**: `object` = `pmd_utilities.PerformanceUtilities`

Defined in: [src/index.ts:70](https://github.com/crookedlungs/pmd-utilities/blob/96f5fb3e3aec03fa6f71925b0e0fb0eacad84699/src/index.ts#L70)

Helpers to improve performance.

## Type declaration

### debounce()

> **debounce**: (`fn`, `wait`) => (...`args`) => `void`

Creates a debounced function that delays the invocation of the provided function
until after the specified `wait` time has passed since the last time it was invoked.

#### Parameters

##### fn

`Function`

The function to debounce.

##### wait

`number`

The number of milliseconds to wait before calling the function.

#### Returns

A debounced function.

> (...`args`): `void`

##### Parameters

###### args

...`any`[]

##### Returns

`void`

#### Example

```ts
const debouncedLog = debounce((message: string) => console.log(message), 500);
debouncedLog("Hello"); // Will log "Hello" after 500ms if no other calls happen in that time.
```

### throttle()

> **throttle**: (`fn`, `wait`) => (...`args`) => `void`

Creates a throttled function that only invokes the provided function at most once every `wait` milliseconds.
If the function is invoked multiple times in quick succession, only the first call in the given `wait` period will be executed.

#### Parameters

##### fn

`Function`

The function to throttle.

##### wait

`number`

The number of milliseconds to wait between invocations.

#### Returns

A throttled function.

> (...`args`): `void`

##### Parameters

###### args

...`any`[]

##### Returns

`void`

#### Example

```ts
const throttledLog = throttle((message: string) => console.log(message), 1000);
throttledLog("Hello"); // Will log "Hello"
throttledLog("World"); // Will be ignored because it's within the 1000ms window.
```

### wait()

> **wait**: (`ms`) => `Promise`\<`void`\>

Returns a promise that resolves after a specified number of milliseconds.
This is useful for delaying actions in asynchronous code.

#### Parameters

##### ms

`number`

The number of milliseconds to wait before resolving.

#### Returns

`Promise`\<`void`\>

A promise that resolves after the given `ms`.

#### Example

```ts
await wait(2000); // Waits for 2 seconds before continuing
console.log("This will print after 2 seconds");
```
