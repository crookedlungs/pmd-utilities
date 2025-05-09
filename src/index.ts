import * as pmd_utilities from "./utilities.js";

/**
 * A collection of reusable utility functions for strings, numbers, currency, dates, names, and arrays. Designed for modern TypeScript applications.
 * Useful helper functions for common problems including:
  - String capitalization
  - Simple date parsing from `MMDDYYYY`
  - Name splitting and merging (with optional formatting)
  - Array manipulation: find, remove, update, filter, and more
  - Currency and taxes
  - Helpers for working with images.
  - Async function helpers
  - Simple auth helpers
  - Better `fetch` implementation.
  - Better `switch` implementation.
  - Rust-like safety integration.
 */
export namespace pmd_util {
  /**
   * String manipulation utilities.
   */
  export const strings = pmd_utilities.StringUtilities;
  /**
   * Date manipulation utilities.
   */
  export const dates = pmd_utilities.DateUtilities;
  /**
   * Name manipulation utilities.
   */
  export const names = pmd_utilities.NameUtilities;
  /**
   * Array manipulation utilities.
   */
  export const arrays = pmd_utilities.ArrayUtilities;
  /**
   * Currency manipulation utilities.
   */
  export const currency = pmd_utilities.CurrencyUtilities;
  /**
   * Number manipulation utilities.
   */
  export const number = pmd_utilities.NumberUtilities;
  /**
   * Async helpers.
   */
  export const async = pmd_utilities.AsyncUtilities;
  /**
   * Authorization helpers.
   */
  export const auth = pmd_utilities.AuthUtilities;
  /**
   * Custom `fetch` implementation.
   */
  export const proFetch = pmd_utilities.FetchUtilities;
  /**
   * Custom `switch` implementation.
   */
  export const proSwitch = pmd_utilities.SwitchUtilities;
  /**
   * Rust-like safety integration.
   */
  export const safety = pmd_utilities.SafetyUtilities;
  /**
   * Image manipulation helpers.
   */
  export const images = pmd_utilities.ImageUtilities;
  /**
   * Helpers to improve performance.
   */
  export const performance = pmd_utilities.PerformanceUtilities;
}
