import { FirebaseApp } from 'firebase/app';
import {
  Auth,
  User,
  UserCredential,
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { AuthUserPayload } from '../../auth/interfaces/Auth.gateway.interface';
import { AuthUser } from '../../auth/model/AuthUser';

export class FirebaseAuthGateway {
  private readonly auth: Auth;

  constructor(firebaseApp: FirebaseApp) {
    this.auth = getAuth(firebaseApp);
  }

  async registerUserWithEmailAndPassword({ email, password }: AuthUserPayload): Promise<AuthUser> {
    try {
      const userCredential: UserCredential = await createUserWithEmailAndPassword(this.auth, email, password);
      const authUser: AuthUser = {
        id: userCredential.user.uid,
        displayName: userCredential.user.displayName as string,
        avatarUrl: userCredential.user.photoURL as string,
      };
      return Promise.resolve(authUser);
    } catch (error) {
      return Promise.reject(new Error('Cannot register new user'));
    }
  }

  async signInWithEmailAndPassword({ email, password }: AuthUserPayload): Promise<AuthUser> {
    try {
      const userCredential: UserCredential = await signInWithEmailAndPassword(this.auth, email, password);
      const authUser: AuthUser = {
        id: userCredential.user.uid,
        displayName: userCredential.user.displayName as string,
        avatarUrl: userCredential.user.photoURL as string,
      };
      return Promise.resolve(authUser);
    } catch (error) {
      return Promise.reject(new Error('Cannot signin user'));
    }
  }

  async signOut(): Promise<void> {
    try {
      await this.auth.signOut();
    } catch (error) {
      return Promise.reject(new Error('Cannot signout user'));
    }
  }

  getAuth(): Auth {
    return this.auth;
  }

  getCurrentUser(): User {
    return this.auth.currentUser as User;
  }

  async deleteUser(): Promise<void> {
    const currentUser = this.getCurrentUser();
    if (currentUser) {
      return currentUser.delete();
    }
  }
}
