[**@pathmaker-digital/pmd-utilities v2.0.4**](../../../../README.md)

***

> `const` **safety**: `object` = `pmd_utilities.SafetyUtilities`

Defined in: [src/index.ts:62](https://github.com/crookedlungs/pmd-utilities/blob/9f39d32abe09ed42c70c16473f8a612f4d8491bd/src/index.ts#L62)

Rust-like safety integration.

## Type declaration

### assert()

> **assert**: (`condition`, `msg`) => `asserts condition`

Shorthand validation that a value exists.

#### Parameters

##### condition

`unknown`

The condition to validate against.

##### msg

`string` = `"Assertion failed"`

Message to throw if condition fails. Default value of `Assertion failed`.

#### Returns

`asserts condition`

#### Example

```ts
assert(user != null, "User not found");
// Now `user` is not null or undefined in TS's eyes.
```

### Err()

> **Err**: \<`E`\>(`error`) => [`Result`](../../../../types/type-aliases/Result.md)\<`never`, `E`\>

Creates a failed `Result` containing an error.

#### Type Parameters

##### E

`E`

#### Parameters

##### error

`E`

The error to wrap in an `Err`.

#### Returns

[`Result`](../../../../types/type-aliases/Result.md)\<`never`, `E`\>

A `Result` of type `Err<E>`.

#### Example

```ts
const result = Err("Something went wrong");
if (!result.ok) {
  console.error(result.error); // "Something went wrong"
}
```

### isValid()

> **isValid**: \<`T`\>(`value`, `msg`) => `void`

Validates that the provided value is truthy (not null or undefined).
This is essentially a shorthand for `assert(value != null)`.

#### Type Parameters

##### T

`T`

#### Parameters

##### value

`T`

The value to validate.

##### msg

`string` = `"value is invalid!"`

Optional custom error message.

#### Returns

`void`

#### Throws

Error if the value is null or undefined.

#### Example

```ts
const input = getInput();
isValid(input, "Input must be provided");
console.log(input.length); // Safe to use now
```

### None()

> **None**: () => [`Option`](../../../../types/type-aliases/Option.md)\<`never`\>

Represents the absence of a value.

#### Returns

[`Option`](../../../../types/type-aliases/Option.md)\<`never`\>

An Option of kind "none".

#### Example

```ts
const maybeEmpty = None();
console.log(maybeEmpty.kind); // "none"
```

### Ok()

> **Ok**: \<`T`\>(`value`) => [`Result`](../../../../types/type-aliases/Result.md)\<`T`, `never`\>

Creates a successful `Result` containing a value.

#### Type Parameters

##### T

`T`

#### Parameters

##### value

`T`

The value to wrap in an `Ok`.

#### Returns

[`Result`](../../../../types/type-aliases/Result.md)\<`T`, `never`\>

A `Result` of type `Ok<T>`.

#### Example

```ts
const result = Ok(42);
if (result.ok) {
  console.log(result.value); // 42
}
```

### Some()

> **Some**: \<`T`\>(`value`) => [`Option`](../../../../types/type-aliases/Option.md)\<`T`\>

Represents a successful presence of a value, wrapped in an Option type.

#### Type Parameters

##### T

`T`

The type of the wrapped value.

#### Parameters

##### value

`T`

The value to wrap.

#### Returns

[`Option`](../../../../types/type-aliases/Option.md)\<`T`\>

An Option of kind "some" containing the provided value.

#### Example

```ts
const maybeName = Some("Alice");
console.log(maybeName.kind); // "some"
console.log(maybeName.value); // "Alice"
```

### unwrapOr()

> **unwrapOr**: \<`T`\>(`opt`, `fallback`) => `T`

Unwraps an Option type and returns the contained value if it exists.
If the Option is "none", it returns the provided fallback value.

#### Type Parameters

##### T

`T`

The type of the value.

#### Parameters

##### opt

[`Option`](../../../../types/type-aliases/Option.md)\<`T`\>

The Option to unwrap.

##### fallback

`T`

The fallback value to return if `opt` is "none".

#### Returns

`T`

The unwrapped value if present, or the fallback.

#### Example

```ts
const name = unwrapOr(Some("Bob"), "Anonymous"); // "Bob"
const name2 = unwrapOr(None(), "Anonymous");     // "Anonymous"
```

### unwrapResult()

> **unwrapResult**: \<`T`, `E`\>(`res`) => `T`

Unwraps a `Result`, returning the value if it is `Ok`.
Throws the error if it is an `Err`.

#### Type Parameters

##### T

`T`

##### E

`E`

#### Parameters

##### res

[`Result`](../../../../types/type-aliases/Result.md)\<`T`, `E`\>

The `Result` to unwrap.

#### Returns

`T`

The value if `res` is `Ok`.

#### Throws

The error if `res` is `Err`.

#### Example

```ts
const result = Ok("Success!");
const value = unwrapResult(result); // "Success!"

const errorResult = Err(new Error("Oops!"));
unwrapResult(errorResult); // throws Error: "Oops!"
```
