import * as pmd_utilities from "./utilities.js";
export var pmd_util;
(function (pmd_util) {
    pmd_util.strings = pmd_utilities.StringUtilities;
    pmd_util.dates = pmd_utilities.DateUtilities;
    pmd_util.names = pmd_utilities.NameUtilities;
    pmd_util.arrays = pmd_utilities.ArrayUtilities;
    pmd_util.currency = pmd_utilities.CurrencyUtilities;
    pmd_util.number = pmd_utilities.NumberUtilities;
})(pmd_util || (pmd_util = {}));
