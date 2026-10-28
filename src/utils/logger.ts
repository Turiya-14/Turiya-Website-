/**
 * Minimal logger: warnings are printed only in development; errors are always printed
 * (without stack noise in production). Hook an error tracker such as Sentry in `error`.
 */
const isDev = import.meta.env.DEV;

export const logger = {
  warn(message: string, ...args: unknown[]): void {
    if (isDev) console.warn(`[warn] ${message}`, ...args);
  },

  error(message: string, error?: unknown, ...args: unknown[]): void {
    if (isDev) {
      console.error(`[error] ${message}`, error, ...args);
    } else {
      console.error(message);
    }
  }
};
