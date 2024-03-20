export const ENVIRONMENT = process.env.NODE_ENV;
export const IS_PRODUCTION = ENVIRONMENT === 'production';
export const IS_DEVELOPMENT = !IS_PRODUCTION;