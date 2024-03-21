// src/utils/validators.ts

/**
 * Checks whether the given value matches email regex pattern
 * @param value Value to validate
 */
export const isValidEmail = (value: unknown): boolean => {
    const EMAIL_REGEX = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    return EMAIL_REGEX.test(String(value));
  };
  
  /**
   * Checks whether the given value matches strong password criteria
   * @param value Value to validate
   */
  export const isStrongPassword = (value: unknown): boolean => {
    const PASSWORD_MIN_LENGTH = 8;
    const STRONG_PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  
    if (typeof value !== 'string') {
      return false;
    }
  
    if (value.length < PASSWORD_MIN_LENGTH) {
      return false;
    }
  
    return STRONG_PASSWORD_REGEX.test(value);
  };