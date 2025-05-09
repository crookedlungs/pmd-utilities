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
export declare namespace pmd_util {
    /**
     * String manipulation utilities.
     */
    const strings: {
        capitalize: (word: string) => string;
    };
    /**
     * Date manipulation utilities.
     */
    const dates: {
        dateFromString: (input: string, locale?: string) => string;
    };
    /**
     * Name manipulation utilities.
     */
    const names: {
        splitFullName: (full_name: string, format?: boolean) => {
            firstName: string;
            last_name: string;
        };
        mergeFullName: (firstName: string, lastName: string, format?: boolean) => string;
        formatNameWithPrefix: (name: {
            firstName: string;
            lastName: string;
        } | string, prefix: "Mr" | "Mrs" | "Ms" | "Dr") => string;
    };
    /**
     * Array manipulation utilities.
     */
    const arrays: {
        allExcept: <T, K extends keyof T>(array: T[], property: K, excludeValue: T[K]) => T[];
        clearArray: <T>(array: T[]) => Promise<void>;
        removeAt: <T>(arr: T[], index: number) => void;
        findInArray: <T, K extends keyof T>(array: T[], key: K, value: T[K]) => T | undefined;
        requireInArray: <T, K extends keyof T>(array: T[], key: K, value: T[K]) => T;
        findIndexInArray: <T, K extends keyof T>(array: T[], key: K, value: T[K]) => number;
        removeFromArray: <T, K extends keyof T>(array: T[], key: K, value: T[K]) => T[];
        bulkRemoveFromArray: <T, K extends keyof T>(array: T[], key: K, values: T[K][]) => T[];
        updateInArray: <T, K extends keyof T>(array: T[], key: K, value: T[K], updater: (item: T) => T) => T[];
        bulkUpdateInArray: <T, K extends keyof T>(array: T[], key: K, values: T[K][], updater: (item: T) => T) => T[];
    };
    /**
     * Currency manipulation utilities.
     */
    const currency: {
        formatCurrency: (amount: number, currency?: string) => string;
        calculateTax: (subtotal: number, taxRate: number) => number;
        calculateTotalWithTax: (subtotal: number, taxRate: number) => number;
        parseCurrency: (currencyString: string) => number;
        convertCurrency: (amount: number, fromRate: number, toRate: number) => number;
        getTaxRateByState: (state: string) => number | undefined;
    };
    /**
     * Number manipulation utilities.
     */
    const number: {
        formatPercentString: (number: number) => string;
        genRandomInRange: (min: number, max: number) => number;
    };
    /**
     * Async helpers.
     */
    const async: {
        tryCatchAsync: <T>(asyncFunc: () => Promise<T>, fallback: T) => Promise<T>;
    };
    /**
     * Authorization helpers.
     */
    const auth: {
        generateRandomPassword: (length: number) => string;
        validateDomain: (email: string, targetDomain: string) => boolean;
        isValidEmail: (email: string) => boolean;
        isStrongPassword: (password: string, minLength?: number) => boolean;
        hasRole: (userRoles: string[], requiredRole: string) => boolean;
        comparePassword: (password: string, hashedPassword: string) => Promise<boolean>;
        hashPassword: (password: string) => Promise<string>;
    };
    /**
     * Custom `fetch` implementation.
     */
    const proFetch: {
        proFetchGet: (host: string, endpoint: string, query: {
            field: string;
            value: any;
        }[], log?: boolean) => Promise<any>;
        proFetchPost: (host: string, endpoint: string, body: Record<string, any>, log?: boolean) => Promise<any>;
    };
    /**
     * Custom `switch` implementation.
     */
    const proSwitch: {
        proSwitch: <T>(key: T, cases: (import("../types.js").SwitchCase<T> | import("../types.js").DefaultCase)[]) => void;
        proSwitchReturn: typeof pmd_utilities.proSwitchReturn;
    };
    /**
     * Rust-like safety integration.
     */
    const safety: {
        assert: (condition: unknown, msg?: string) => asserts condition;
        Some: <T>(value: T) => import("../types.js").Option<T>;
        None: () => import("../types.js").Option<never>;
        Err: <E>(error: E) => import("../types.js").Result<never, E>;
        Ok: <T>(value: T) => import("../types.js").Result<T, never>;
        unwrapOr: <T>(opt: import("../types.js").Option<T>, fallback: T) => T;
        unwrapResult: <T, E>(res: import("../types.js").Result<T, E>) => T;
        isValid: <T>(value: T, msg?: string) => void;
    };
    /**
     * Image manipulation helpers.
     */
    const images: {
        getWidthFromAR: (width: number, ar: number) => number;
        getHeightFromAR: (height: number, ar: number) => number;
        getAspectRatio: (height: number, width: number) => number;
    };
}
