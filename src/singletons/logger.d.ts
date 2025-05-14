import { GlobalLoggerContext, GlobalLoggerEnv, GlobalLoggerLevel, GlobalLogMessage } from "../../types";
/**
 * Sets the global logger context.
 * This function allows you to set the global logger context, which includes the environment,
 * @param arg - The argument can be a GlobalLoggerContext, GlobalLoggerEnv, or GlobalLoggerLevel.
 * If it's a string, it can be either "development", "production", "info", "warn", "error", or "debug".
 */
export declare function setGlobalLoggerContext(ctx: GlobalLoggerContext): void;
export declare function setGlobalLoggerContext(env: GlobalLoggerEnv): void;
export declare function setGlobalLoggerContext(logLevel: GlobalLoggerLevel): void;
/**
 * Gets the current global logger context.
 * @returns The current global logger context.
 */
export declare function getGlobalLoggerContext(): GlobalLoggerContext;
/**
 * Logs a message to the appropriate output based on the current global logger context.
 * Accepts either a plain string or a structured object with environment-specific log messages.
 *
 * - For string messages: logs directly if `env` is not production + debug.
 * - For structured messages: logs based on matching `env` and `logLevel`.
 *
 * @param msg The message to log, either as a string or a structured `GlobalLogMessage`.
 */
export declare function globalLog(globalMsg: GlobalLogMessage): void;
/**
 * Logs a message to the appropriate output based on the current global logger context.
 * Accepts either a plain string or a structured object with environment-specific log messages.
 *
 * - For string messages: logs directly if `env` is not production + debug.
 * - For structured messages: logs based on matching `env` and `logLevel`.
 *
 * @param msg The message to log, either as a string or a structured `GlobalLogMessage`.
 */
export declare function globalLog(genericMsg: string): void;
