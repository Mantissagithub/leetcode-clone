export const validateEmptyOrSpacedFields = (fields: string[]) => {
    return fields.some((field) => !(field.trim().length > 0));
  };
  
  export const validateEmailAddress = (email: string): boolean => {
    const regex = /^[\w-.]+@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    return regex.test(email);
  };
  
  export const validatePasswordStrength = (password: string): string => {
    // Password strength checking algorithm goes here
    // Return a string indicating password strength: weak, moderate, strong, veryStrong
    const strongRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const moderateRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,}$/;

    if (strongRegex.test(password)) {
        return "veryStrong";
    } else if (moderateRegex.test(password)) {
        return "strong";
    } else if (password.length >= 6) {
        return "moderate";
    } else {
        return "weak";
    }
  };
  
  export const validatePhoneNumber = (phoneNumber: string): boolean => {
    const regex = /^\+(?:[0-9]‚Äč){6,14}[0-9]$/;
    return regex.test(phoneNumber);
  };