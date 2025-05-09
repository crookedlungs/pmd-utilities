# 🧰 Pathmaker Digital Utility Toolkit

A lightweight and modular collection of utility functions for working with **strings**, **numbers**, **dates**, **names**, **currency**, **taxes** and **arrays** in TypeScript and JavaScript.

---

## ✨ Features

- Useful helper functions for common problems including:
  - String capitalization
  - Simple date parsing from `MMDDYYYY`
  - Name splitting and merging (with optional formatting)
  - Array manipulation: find, remove, update, filter, and more
  - Currency and taxes

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
const capitalized = pmd.strings.capitalize("hello"); // "Hello"
```

### 📅 Date Utilities

```ts
const formattedDate = pmd.dates.dateFromString("05282025"); // e.g., "5/28/2025"
```

### 👤 Name Utilities

```ts
const nameParts = pmd.names.splitFullName("jane doe");
// { firstName: "Jane", last_name: "Doe" }

const fullName = pmd.names.mergeFullName("jane", "doe");
// "Jane Doe"
```

### 📑 Array Utilities

```ts
const users = [
  { id: 1, name: "Alice", role: "admin" },
  { id: 2, name: "Bob", role: "user" },
  { id: 3, name: "Carol", role: "user" },
];

// Clear an array
await pmd.arrays.clearArray(users); // users is now []

// Remove an item by index
const items = [1, 2, 3];
pmd.arrays.removeAt(items, 1); // items becomes [1, 3]

// Find an item by property
const found = pmd.arrays.findInArray(users, "id", 2);
// { id: 2, name: "Bob", role: "user" }

// Require an item (throws if not found)
const required = pmd.arrays.requireInArray(users, "id", 3);
// { id: 3, name: "Carol", role: "user" }

// Find index by property
const index = pmd.arrays.findIndexInArray(users, "id", 1);
// 0

// Remove item by property match
const newUsers = pmd.arrays.removeFromArray(users, "id", 2);
// users without Bob

// Bulk remove by property values
const bulkRemoved = pmd.arrays.bulkRemoveFromArray(users, "id", [1, 3]);
// users without Alice and Carol

// Update an item by property match
const updatedUsers = pmd.arrays.updateInArray(users, "id", 2, (user) => ({
  ...user,
  name: "Bobby",
}));
// Bob becomes Bobby

// Bulk update by property values
const bulkUpdated = pmd.arrays.bulkUpdateInArray(
  users,
  "id",
  [1, 3],
  (user) => ({
    ...user,
    role: "editor",
  })
);
// Alice and Carol roles updated

// Filter all except matching value
const nonAdmins = pmd.arrays.allExcept(users, "role", "admin");
// users without Alice
```
