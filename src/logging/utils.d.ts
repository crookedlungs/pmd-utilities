import { LogType, LogColor, LogBackgroundColor, LogTemplate } from "../../types.js";
/**
 * Logs a message to the console with a specific type and color.
 * @param message - The message to log.
 * @param template - The template of the log (info, warn, error, success, custom). Defaults to "info".
 * @param type - The type of log (log, warn, error). Defaults to "log".
 * @param color - The color of the message (red, blue, green, yellow, white). Defaults to "white".
 * @param bgColor - The background color of the message (bgRed, bgBlue, bgGreen, etc.). Defaults to "bgBlack".
 */
export declare const logTest: <T>(message: T, template?: LogTemplate, type?: LogType, color?: LogColor, bgColor?: LogBackgroundColor) => void;
