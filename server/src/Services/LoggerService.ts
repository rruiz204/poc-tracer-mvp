import winston from "winston";

const console = new winston.transports.Console();

const file = new winston.transports.File({
  filename: "logs/playwright.log"
});

const format = winston.format.combine(
  winston.format.colorize(),
  winston.format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),

  winston.format.printf(({ level, message, timestamp }) => {
    return `[${timestamp}] [${level.toUpperCase()}]: ${message}`;
  }),
);

export const LoggerService = winston.createLogger({
  level: "info",
  format: format,
  transports: [file, console]
});