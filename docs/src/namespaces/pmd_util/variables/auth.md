[**@pathmaker-digital/pmd-utilities v2.0.2**](../../../../README.md)

***

> `const` **auth**: `object` = `pmd_utilities.AuthUtilities`

Defined in: [src/index.ts:49](https://github.com/crookedlungs/pmd-utilities/blob/46cbc46e13dc37eb1ceed5549ab48780ef2516a4/src/index.ts#L49)

Authorization helpers.

## Type declaration

### comparePassword()

> **comparePassword**: (`password`, `hashedPassword`) => `Promise`\<`boolean`\>

Compares a plain password with a hashed password.

#### Parameters

##### password

`string`

The plain password.

##### hashedPassword

`string`

The hashed password to compare against.

#### Returns

`Promise`\<`boolean`\>

True if the passwords match, false otherwise.

### generateRandomPassword()

> **generateRandomPassword**: (`length`) => `string`

Generates a random password with a given length, ensuring it meets the strength criteria.
Uses `isStrongPassword()` to ensure password is strong. Retries if not.

#### Parameters

##### length

`number`

The length of the password to generate.

#### Returns

`string`

A randomly generated password that is strong.

### hashPassword()

> **hashPassword**: (`password`) => `Promise`\<`string`\>

Hashes a password asynchronously.

#### Parameters

##### password

`string`

The password to hash.

#### Returns

`Promise`\<`string`\>

The hashed password.

### hasRole()

> **hasRole**: (`userRoles`, `requiredRole`) => `boolean`

Checks if a user has the required role.

#### Parameters

##### userRoles

`string`[]

The roles assigned to the user.

##### requiredRole

`string`

The role required for the action.

#### Returns

`boolean`

True if the user has the required role, false otherwise.

### isStrongPassword()

> **isStrongPassword**: (`password`, `minLength`) => `boolean`

Validates if the password is strong.

#### Parameters

##### password

`string`

The password to check.

##### minLength

`number` = `8`

The minimum password length. Defaults to 8.

#### Returns

`boolean`

True if the password meets strength criteria, false otherwise.

### isValidEmail()

> **isValidEmail**: (`email`) => `boolean`

Validates if the email is in a valid format.

#### Parameters

##### email

`string`

The email address to validate.

#### Returns

`boolean`

True if the email format is valid, false otherwise.

### validateDomain()

> **validateDomain**: (`email`, `targetDomain`) => `boolean`

Validates if the domain of an email matches the target domain.

#### Parameters

##### email

`string`

The email address to validate.

##### targetDomain

`string`

The domain to check against.

#### Returns

`boolean`

True if the email's domain matches the target domain, false otherwise.
