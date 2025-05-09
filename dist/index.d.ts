export declare namespace pmd_util {
    const strings: {
        capitalize: (word: string) => string;
    };
    const dates: {
        dateFromString: (input: string, locale?: string) => string;
    };
    const names: {
        splitFullName: (full_name: string, format?: boolean) => {
            firstName: string;
            last_name: string;
        };
        mergeFullName: (firstName: string, lastName: string, format?: boolean) => string;
    };
    const arrays: {
        allExcept: <T, K extends keyof T>(array: T[], property: K, excludeValue: T[K]) => T[];
        clearArray: <T_1>(array: T_1[]) => Promise<void>;
        removeAt: <T_2>(arr: T_2[], index: number) => void;
        findInArray: <T_3, K_1 extends keyof T_3>(array: T_3[], key: K_1, value: T_3[K_1]) => T_3 | undefined;
        requireInArray: <T_4, K_2 extends keyof T_4>(array: T_4[], key: K_2, value: T_4[K_2]) => T_4;
        findIndexInArray: <T_5, K_3 extends keyof T_5>(array: T_5[], key: K_3, value: T_5[K_3]) => number;
        removeFromArray: <T_6, K_4 extends keyof T_6>(array: T_6[], key: K_4, value: T_6[K_4]) => T_6[];
        bulkRemoveFromArray: <T_7, K_5 extends keyof T_7>(array: T_7[], key: K_5, values: T_7[K_5][]) => T_7[];
        updateInArray: <T_8, K_6 extends keyof T_8>(array: T_8[], key: K_6, value: T_8[K_6], updater: (item: T_8) => T_8) => T_8[];
        bulkUpdateInArray: <T_9, K_7 extends keyof T_9>(array: T_9[], key: K_7, values: T_9[K_7][], updater: (item: T_9) => T_9) => T_9[];
    };
    const currency: {
        formatCurrency: (amount: number, currency?: string) => string;
        calculateTax: (subtotal: number, taxRate: number) => number;
        calculateTotalWithTax: (subtotal: number, taxRate: number) => number;
        parseCurrency: (currencyString: string) => number;
        convertCurrency: (amount: number, fromRate: number, toRate: number) => number;
        getTaxRateByState: (state: string) => number | undefined;
    };
    const number: {
        formatPercentString: (number: number) => string;
    };
    const async: {
        tryCatchAsync: <T>(asyncFunc: () => Promise<T>, fallback: T) => Promise<T>;
    };
    const auth: {
        generateRandomPassword: (length: number) => string;
        validateDomain: (email: string, targetDomain: string) => boolean;
        isValidEmail: (email: string) => boolean;
        isStrongPassword: (password: string, minLength?: number) => boolean;
        hasRole: (userRoles: string[], requiredRole: string) => boolean;
        comparePassword: (password: string, hashedPassword: string) => Promise<boolean>;
        hashPassword: (password: string) => Promise<string>;
    };
}
