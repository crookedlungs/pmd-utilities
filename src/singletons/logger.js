import fs from "fs";
import path from "path";
/**
 * Global logger context singleton.
 */
let GLOBAL_LOGGER_CONTEXT = {
    env: "development",
    logLevel: "info",
    logLocation: "terminal",
};
// Implementation
export function setGlobalLoggerContext(arg) {
    if (typeof arg === "string") {
        if (["development", "production"].includes(arg)) {
            GLOBAL_LOGGER_CONTEXT.env = arg;
        }
        else if (["info", "warn", "error", "debug"].includes(arg)) {
            GLOBAL_LOGGER_CONTEXT.logLevel = arg;
        }
        else {
            throw new Error(`Invalid string value for setGlobalLoggerContext: ${arg}`);
        }
    }
    else {
        GLOBAL_LOGGER_CONTEXT = arg;
    }
}
/**
 * Gets the current global logger context.
 * @returns The current global logger context.
 */
export function getGlobalLoggerContext() {
    return GLOBAL_LOGGER_CONTEXT;
}
/**
 * Logs a message to the appropriate output based on the current global logger context.
 * Accepts either a plain string or a structured object with environment-specific log messages.
 *
 * - For string messages: logs directly if `env` is not production + debug.
 * - For structured messages: logs based on matching `env` and `logLevel`.
 *
 * @param msg The message to log, either as a string or a structured `GlobalLogMessage`.
 */
export function globalLog(msg) {
    const { env, logLevel, logLocation } = GLOBAL_LOGGER_CONTEXT;
    // If we are passing in a simple generic message string.
    if (typeof msg === "string") {
        if (env === "production" && logLevel === "debug") {
            return;
        }
        if (logLocation === "terminal") {
            console.log(msg);
        }
        else if (logLocation === "file") {
            logToFile(msg);
        }
        else {
            console.log(msg);
            logToAll(msg);
        }
    }
    else {
        // If we are passing in a GlobalLogMessage object.
        const logMessages = msg[env];
        let logMessage = (() => {
            if (!logMessages)
                return undefined;
            if (logLevel === "info")
                return logMessages.info;
            if (logLevel === "warn")
                return logMessages.warn || logMessages.info;
            if (logLevel === "error")
                return logMessages.error || logMessages.warn || logMessages.info;
            return undefined;
        })();
        if (logMessage) {
            switch (logLocation) {
                case "terminal":
                    console.log(logMessage);
                    break;
                case "file":
                    logToFile(logMessage);
                    break;
                case "both":
                    logToAll(logMessage);
                    break;
                default:
                    console.warn(`[Logger] Unknown log location: ${logLocation}`);
                    console.log(logMessage);
            }
        }
    }
}
/**
 * Logs to all outputs (console and file).
 * @param message The message to log.
 */
function logToAll(message) {
    console.log(message);
    logToFile(message);
}
/**
 * Logs a message to a file.
 * @param message The message to log.
 */
function logToFile(message) {
    const logFilePath = path.join(__dirname, "logs", "app.log");
    const logMessage = `${new Date().toISOString()} - ${message}\n`;
    fs.appendFile(logFilePath, logMessage, (err) => {
        if (err) {
            console.error("Error writing to log file:", err);
        }
    });
}
