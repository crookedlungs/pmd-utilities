/**
 *
 * @param input
 * @returns
 */
export function dateFromString(input: string) {
  const month = input.slice(0, 2);
  const day = input.slice(2, 4);
  const year = input.slice(4, 8);

  // Construct a Date object (note: month is 0-based)
  const date = new Date(Number(year), Number(month) - 1, Number(day));

  // Format as a string
  return date.toLocaleDateString("en-US");
}
