/**
 * Logger - Simple logging utility
 */

export enum LogLevel {
  DEBUG = 'DEBUG',
  INFO = 'INFO',
  WARN = 'WARN',
  ERROR = 'ERROR',
}

export class Logger {
  private level: LogLevel;

  constructor(level: LogLevel = LogLevel.INFO) {
    this.level = level;
  }

  private log(logLevel: LogLevel, message: string, data?: unknown) {
    const timestamp = new Date().toISOString();
    const levelValue = Object.values(LogLevel).indexOf(logLevel);
    const currentValue = Object.values(LogLevel).indexOf(this.level);

    if (levelValue >= currentValue) {
      const output = data ? `${message} ${JSON.stringify(data)}` : message;
      console.log(`[${timestamp}] [${logLevel}] ${output}`);
    }
  }

  debug(message: string, data?: unknown) {
    this.log(LogLevel.DEBUG, message, data);
  }

  info(message: string, data?: unknown) {
    this.log(LogLevel.INFO, message, data);
  }

  warn(message: string, data?: unknown) {
    this.log(LogLevel.WARN, message, data);
  }

  error(message: string, data?: unknown) {
    this.log(LogLevel.ERROR, message, data);
  }
}

export const logger = new Logger();
