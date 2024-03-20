export const debugLogger = (message: string, payload?: any) => console.debug(`Debug: ${JSON.stringify(payload)}, ${message}`);
export const infoLogger = (message: string, payload?: any) => console.info(`Info: ${JSON.stringify(payload)}, ${message}`);
export const warnLogger = (message: string, payload?: any) => console.warn(`Warn: ${JSON.stringify(payload)}, ${message}`);
export const errorLogger = (message: string, payload?: any) => console.error(`Error: ${JSON.stringify(payload)}, ${message}`);