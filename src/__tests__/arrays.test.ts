import * as pmd from "../utilities.ts";

describe("pmd.ArrayUtilities", () => {
  test("clearArray clears all items from the array", async () => {
    const arr = [1, 2, 3];
    await pmd.ArrayUtilities.clearArray(arr);
    expect(arr.length).toBe(0);
  });

  test("removeAt removes item at specified index", () => {
    const arr = [1, 2, 3];
    pmd.ArrayUtilities.removeAt(arr, 1);
    expect(arr).toEqual([1, 3]);
  });

  test("findInArray finds item by key/value", () => {
    const arr = [{ id: 1 }, { id: 2 }];
    const result = pmd.ArrayUtilities.findInArray(arr, "id", 2);
    expect(result).toEqual({ id: 2 });
  });

  test("requireInArray returns item or throws if not found", () => {
    const arr = [{ id: 1 }, { id: 2 }];
    const result = pmd.ArrayUtilities.requireInArray(arr, "id", 2);
    expect(result).toEqual({ id: 2 });

    expect(() => {
      pmd.ArrayUtilities.requireInArray(arr, "id", 3);
    }).toThrow("Item with id = 3 not found");
  });

  test("findIndexInArray finds correct index or returns -1", () => {
    const arr = [{ id: 1 }, { id: 2 }];
    expect(pmd.ArrayUtilities.findIndexInArray(arr, "id", 2)).toBe(1);
    expect(pmd.ArrayUtilities.findIndexInArray(arr, "id", 3)).toBe(-1);
  });

  test("removeFromArray returns array without the matched item", () => {
    const arr = [{ id: 1 }, { id: 2 }];
    const result = pmd.ArrayUtilities.removeFromArray(arr, "id", 1);
    expect(result).toEqual([{ id: 2 }]);
  });

  test("bulkRemoveFromArray returns array without any of the matched items", () => {
    const arr = [{ id: 1 }, { id: 2 }, { id: 3 }];
    const result = pmd.ArrayUtilities.bulkRemoveFromArray(arr, "id", [1, 3]);
    expect(result).toEqual([{ id: 2 }]);
  });

  test("updateInArray updates the correct item", () => {
    const arr = [
      { id: 1, value: "a" },
      { id: 2, value: "b" },
    ];
    const result = pmd.ArrayUtilities.updateInArray(arr, "id", 2, (item) => ({
      ...item,
      value: "updated",
    }));
    expect(result).toEqual([
      { id: 1, value: "a" },
      { id: 2, value: "updated" },
    ]);
  });

  test("bulkUpdateInArray updates all matched items", () => {
    const arr = [
      { id: 1, value: "a" },
      { id: 2, value: "b" },
      { id: 3, value: "c" },
    ];
    const result = pmd.ArrayUtilities.bulkUpdateInArray(
      arr,
      "id",
      [1, 3],
      (item) => ({
        ...item,
        value: "updated",
      })
    );
    expect(result).toEqual([
      { id: 1, value: "updated" },
      { id: 2, value: "b" },
      { id: 3, value: "updated" },
    ]);
  });

  test("allExcept excludes items with a specific property value", () => {
    const arr = [
      { role: "admin" },
      { role: "user" },
      { role: "guest" },
      { role: "admin" },
    ];
    const result = pmd.ArrayUtilities.allExcept(arr, "role", "admin");
    expect(result).toEqual([{ role: "user" }, { role: "guest" }]);
  });
});
