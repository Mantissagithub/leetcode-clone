export interface SessionToken {
    sessionToken: string;
  }
  
  export interface TokenResponse {
    token: SessionToken;
    refreshToken: string;
    user: User;
  }
  
  export interface UserCredentials {
    emailAddress: string;
    password: string;
  }
  
  export interface User {
    id: string;
    name?: string;
    emailAddress: string;
    photoUrl?: string;
    provider: string;
  }
  
  export interface RegistrationDetails extends UserCredentials {
    name: string;
  }
  
  export interface ResetPasswordDetails {
    emailAddress: string;
    password: string;
    verificationCode: string;
  }
  
  export interface VerifyAccountDetails {
    emailAddress: string;
    verificationCode: string;
  }