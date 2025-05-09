import * as pmd_utilities from "./utilities.js";
export var pmd_util;
(function (pmd_util) {
    pmd_util.strings = pmd_utilities.StringUtilities;
    pmd_util.dates = pmd_utilities.DateUtilities;
    pmd_util.names = pmd_utilities.NameUtilities;
    pmd_util.arrays = pmd_utilities.ArrayUtilities;
    pmd_util.currency = pmd_utilities.CurrencyUtilities;
    pmd_util.number = pmd_utilities.NumberUtilities;
    pmd_util.async = pmd_utilities.AsyncUtilities;
    pmd_util.auth = pmd_utilities.AuthUtilities;
    pmd_util.proFetch = pmd_utilities.FetchUtilities;
    pmd_util.proSwitch = pmd_utilities.SwitchUtilities;
    pmd_util.safety = pmd_utilities.SafetyUtilities;
})(pmd_util || (pmd_util = {}));
