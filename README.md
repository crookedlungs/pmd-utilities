# 🧰 Pathmaker Digital Utility Toolkit

A collection of reusable utility functions for strings, numbers, currency, dates, names, and arrays. Designed for modern TypeScript applications.

---

## Note:

The most up-to-date docs are on the [Github Wiki](https://github.com/crookedlungs/pmd-utilities/wiki).
These docs are very much still a work in progress!

---

## ✨ Features

Useful helper functions for common problems including:

- ✏️ String capitalization
- 📆 Simple date parsing from `MMDDYYYY`
- 📛 Name splitting and merging (with optional formatting)
- Array manipulation: find, remove, update, filter, and more
- 💵 Currency and taxes
- 📷 Helpers for working with images
- ➿ Async function helpers
- 🔑 Simple auth helpers
- Better `fetch` implementation
- Better `switch` implementation
- 🦀 Rust-like safety integration

---

## 📦 Installation

```bash
npm i @pathmaker-digital/pmd-utilities
```

---

## 📚 Usage

### Import the utilities

```ts
import * as pmd from "pmd-utilities";
```

### 🔤 String Utilities

```ts
capitalize("hello"); // "Hello"
```

### Number Utilities

```ts
formatPercentString(10); // "10%"
```

### 📅 Date Utilities

```ts
dateFromString("05282025"); // e.g., "5/28/2025"
```

### 👤 Name Utilities

```ts
splitFullName("jane doe"); // { firstName: "Jane", last_name: "Doe" }

mergeFullName("jane", "doe"); // "Jane Doe"
```

### 📑 Array Utilities

```ts
const users = [
  { id: 1, name: "Alice", role: "admin" },
  { id: 2, name: "Bob", role: "user" },
  { id: 3, name: "Carol", role: "user" },
];

// Clear an array
clearArray(users); // users is now []

// Remove an item by index
const items = [1, 2, 3];
removeAt(items, 1); // items becomes [1, 3]

// Find an item by property
findInArray(users, "id", 2); // { id: 2, name: "Bob", role: "user" }

// Require an item (throws if not found)
requireInArray(users, "id", 3); // { id: 3, name: "Carol", role: "user" }

// Find index by property
findIndexInArray(users, "id", 1); // 0

// Remove item by property match
removeFromArray(users, "id", 2); // users without Bob

// Bulk remove by property values
bulkRemoveFromArray(users, "id", [1, 3]); // users without Alice and Carol

// Update an item by property match
updateInArray(users, "id", 2, (user) => ({
  ...user,
  name: "Bobby",
}));
// Bob becomes Bobby

// Bulk update by property values
bulkUpdateInArray(users, "id", [1, 3], (user) => ({
  ...user,
  role: "editor",
}));
// Alice and Carol roles updated

// Filter all except matching value
allExcept(users, "role", "admin"); // users without Alice
```
