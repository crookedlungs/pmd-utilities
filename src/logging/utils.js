import chalk from "chalk";
/**
 * Custom chalk instance.
 */
const customChalk = new chalk.Instance({ level: 1 });
/**
 * Logs a message to the console with a specific type and color.
 * @param message - The message to log.
 * @param template - The template of the log (info, warn, error, success, custom). Defaults to "info".
 * @param type - The type of log (log, warn, error). Defaults to "log".
 * @param color - The color of the message (red, blue, green, yellow, white). Defaults to "white".
 * @param bgColor - The background color of the message (bgRed, bgBlue, bgGreen, etc.). Defaults to "bgBlack".
 */
export const log = (message, template = "info", type = "log", color = "white", bgColor = "bgBlack") => {
    const plainMessage = String(message);
    const customStyled = () => {
        try {
            return customChalk[color][bgColor](plainMessage);
        }
        catch {
            return plainMessage;
        }
    };
    const handlers = {
        info: () => console.log(plainMessage),
        warn: () => console.warn(plainMessage),
        error: () => console.error(plainMessage),
        success: () => console.log(customChalk.green(plainMessage)),
        custom: () => console[type](customStyled()),
    };
    handlers[template]?.();
};
