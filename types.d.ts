/**
 * A type representing a string that can be either a single value or an array of values.
 */
export type KVPair<K, V> = {
    key: K;
    value: V;
};
/**
 * Helper type with fields for first and last name.
 */
export type Name = {
    firstName: string;
    lastName: string;
};
/**
 * Represents a case in a switch-like structure where a specific value is matched.
 * @template T The type of the value to be checked.
 * @property value The value to be checked against.
 * @property operation The function to execute when this case is matched.
 */
export type SwitchCase<T> = {
    value: T;
    operation: () => void;
};
/**
 * Represents the default case in a switch-like structure.
 * This case is executed if none of the other cases match.
 * @property default A flag to indicate that this is the default case.
 * @property operation The function to execute when the default case is selected.
 */
export type DefaultCase = {
    default: true;
    operation: () => void;
};
/**
 * Represents a case in a switch-like structure where a specific value is matched
 * and returns a result of type `R` when the operation is executed.
 * @template T The type of the value to be checked.
 * @template R The type of the return value from the operation.
 * @property value The value to be checked against.
 * @property operation The function to execute when this case is matched, returning a value of type `R`.
 */
export type SwitchReturnCase<T, R> = {
    value: T;
    operation: () => R;
};
/**
 * Represents the default case in a switch-like structure, with a return value of type `R`.
 * This case is executed if none of the other cases match.
 * @template R The type of the return value from the operation.
 * @property default A flag to indicate that this is the default case.
 * @property operation The function to execute when the default case is selected, returning a value of type `R`.
 */
export type DefaultReturnCase<R> = {
    default: true;
    operation: () => R;
};
/**
 * A export type that represents an optional value.
 *
 * - `Some<T>`: Indicates a value is present.
 * - `None`: Indicates the absence of a value.
 *
 * This pattern is inspired by languages like Rust and helps avoid issues with `null` or `undefined`.
 *
 * @template T - The export type of the contained value.
 */
export type Option<T> = {
    kind: "some";
    value: T;
} | {
    kind: "none";
};
/**
 * A export type that represents the result of an operation that may succeed (`Ok`) or fail (`Err`).
 *
 * - `Ok<T>`: Represents success and contains a value of export type `T`.
 * - `Err<E>`: Represents failure and contains an error of export type `E`.
 *
 * This pattern is useful for handling errors in a functional way without using exceptions.
 *
 * @template T - The success value export type.
 * @template E - The error value export type.
 */
export type Result<T, E> = {
    ok: true;
    value: T;
} | {
    ok: false;
    error: E;
};
/**
 * Represents a branching execution structure that allows conditional logic
 * based on a value of type `T`. The `then` method specifies the action to
 * perform if the condition is true, and the `else` method specifies the
 * action to perform if the condition is false.
 *
 * @template T - The type of the input value used in the branching logic.
 * @template R - The type of the result returned by the branching logic.
 */
export type BranchExec<T, R> = {
    then: (onTrue: (val?: T) => R) => {
        else: (onFalse: (val?: T) => R) => R;
    };
};
/**
 * Represents the result of an attempt to perform an operation that can either succeed or fail.
 *
 * @template T - The type of the result when the operation is successful.
 *
 * @property success - A boolean indicating whether the operation was successful.
 * @property result - The result of the operation if it was successful. Present only when `success` is `true`.
 * @property error - The error encountered during the operation if it failed. Present only when `success` is `false`.
 */
export type AttemptResult<T> = {
    success: true;
    result: T;
} | {
    success: false;
    error: unknown;
};
/**
 * Represents the result of a validation operation.
 *
 * This type can either indicate a successful validation with `valid: true`,
 * or a failed validation with `valid: false` and an accompanying error message.
 *
 * @property valid - A boolean indicating whether the validation was successful.
 * @property error - A string describing the error, present only when `valid` is `false`.
 */
export type ValidationResult = {
    valid: true;
} | {
    valid: false;
    error: string;
};
/**
 * Represents a color in the terminal.
 * This type is used to specify colors for text and background in terminal output.
 */
export type LogColor = "black" | "red" | "green" | "yellow" | "blue" | "magenta" | "cyan" | "white" | "blackBright" | "gray" | "grey" | "redBright" | "greenBright" | "yellowBright" | "blueBright" | "magentaBright" | "cyanBright" | "whiteBright";
/**
 * Represents a background color in the terminal.
 * This type is used to specify background colors for text in terminal output.
 */
export type LogBackgroundColor = "bgBlack" | "bgRed" | "bgGreen" | "bgYellow" | "bgBlue" | "bgMagenta" | "bgCyan" | "bgWhite" | "bgBlackBright" | "bgGray" | "bgGrey" | "bgRedBright" | "bgGreenBright" | "bgYellowBright" | "bgBlueBright" | "bgMagentaBright" | "bgCyanBright" | "bgWhiteBright";
/**
 * Represents a style in the terminal.
 * This type is used to specify styles for text in terminal output.
 */
export type LogType = "log" | "warn" | "error";
/**
 * Represents a template for logging messages.
 * This type is used to specify the template of log message.
 */
export type LogTemplate = "error" | "success" | "info" | "warn" | "custom";
/**
 * Global logger level type.
 * This type defines the possible log levels for the global logger.
 */
export type GlobalLoggerLevel = "info" | "warn" | "error" | "debug";
/**
 * Global logger location type.
 * This type defines the possible locations for logging messages.
 */
export type GlobalLoggerLocation = "terminal" | "file" | "both";
/**
 * Global logger environment type.
 * This type defines the possible environments for the global logger.
 */
export type GlobalLoggerEnv = "development" | "production";
/**
 * Global logger context interface.
 * This interface defines the structure of the global logger context.
 */
export interface GlobalLoggerContext {
    /**
     * The environment in which the logger is operating.
     * Can be either "development" or "production".
     */
    env: GlobalLoggerEnv;
    /**
     * The log level for the logger.
     * Can be one of "info", "warn", "error", or "debug".
     */
    logLevel: GlobalLoggerLevel;
    /**
     * Where to log the messages.
     * Can be either "terminal", "file", or "both".
     */
    logLocation: GlobalLoggerLocation;
}
/**
 * Global log message interface.
 * This interface defines the structure of log messages for different environments.
 */
export interface GlobalLogMessage {
    development: {
        debug?: string;
        info?: string;
        warn?: string;
        error?: string;
    };
    production: {
        debug?: string;
        info?: string;
        warn?: string;
        error?: string;
    };
}
