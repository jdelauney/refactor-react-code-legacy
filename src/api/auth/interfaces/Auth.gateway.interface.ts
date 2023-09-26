import { AuthUser } from '../model/AuthUser';

export type AuthUserPayload = {
  email: string;
  password: string;
};

export interface AuthGatewayInterface {
  registerUserWithEmailAndPassword({ email, password }: AuthUserPayload): Promise<AuthUser>;
  signInWithEmailAndPassword({ email, password }: AuthUserPayload): Promise<AuthUser>;
  signOut(): Promise<void>;
  //onAuthStateChanged(listener: (user: AuthUser) => void): void;
  //getCurrentUser(): Promise<AuthUser>;
  //updateCurrentUser(user: UserModel): Promise<void>;
  //deleteUser(): Promise<void>;
  // sendEmailVerification(): Promise<void>;
  // sendPasswordResetEmail(email: string): Promise<void>;
  // confirmPasswordReset(code: string, newPassword: string): Promise<void>;
  // verifyPasswordResetCode(code: string): Promise<string>;
  // signInWithGoogle();
  // signInWithFacebook();
  // signInWithTwitter();
  // signInWithGithub();
}
