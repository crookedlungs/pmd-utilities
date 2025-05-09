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
export var pmd_util;
(function (pmd_util) {
    /**
     * String manipulation utilities.
     */
    pmd_util.strings = pmd_utilities.StringUtilities;
    /**
     * Date manipulation utilities.
     */
    pmd_util.dates = pmd_utilities.DateUtilities;
    /**
     * Name manipulation utilities.
     */
    pmd_util.names = pmd_utilities.NameUtilities;
    /**
     * Array manipulation utilities.
     */
    pmd_util.arrays = pmd_utilities.ArrayUtilities;
    /**
     * Currency manipulation utilities.
     */
    pmd_util.currency = pmd_utilities.CurrencyUtilities;
    /**
     * Number manipulation utilities.
     */
    pmd_util.number = pmd_utilities.NumberUtilities;
    /**
     * Async helpers.
     */
    pmd_util.async = pmd_utilities.AsyncUtilities;
    /**
     * Authorization helpers.
     */
    pmd_util.auth = pmd_utilities.AuthUtilities;
    /**
     * Custom `fetch` implementation.
     */
    pmd_util.proFetch = pmd_utilities.FetchUtilities;
    /**
     * Custom `switch` implementation.
     */
    pmd_util.proSwitch = pmd_utilities.SwitchUtilities;
    /**
     * Rust-like safety integration.
     */
    pmd_util.safety = pmd_utilities.SafetyUtilities;
    /**
     * Image manipulation helpers.
     */
    pmd_util.images = pmd_utilities.ImageUtilities;
})(pmd_util || (pmd_util = {}));
