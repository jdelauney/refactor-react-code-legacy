import { AuthUser } from '../auth/model/AuthUser.ts';

export interface ApiAuthServiceInterface {
  registerWithEmailAndPassword(email: string, password: string): Promise<AuthUser | null>;
  signInWithEmailAndPassword(email: string, password: string): Promise<AuthUser | null>;
  signOut(): Promise<void>;
  getAuth(): unknown;
}
