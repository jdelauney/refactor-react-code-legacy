import { ApiAuthServiceInterface } from '../../interfaces/apiAuthService.interface.ts';
import { RegisterUserWithEmailAndPasswordUseCase } from '../../auth/usecases/registerUserWithEmailAndPassword.usecase.ts';
import { SignInWithEmailAndPasswordUseCase } from '../../auth/usecases/signInWithEmailAndPassword.usecase.ts';
import { SignOutUseCase } from '../../auth/usecases/signOut.usecase.ts';
import { FirebaseApp } from 'firebase/app';
import { FirebaseAuthGateway } from '../auth/firebase-auth.gateway.ts';
import { AuthUser } from '../../auth/model/AuthUser.ts';
import { Auth } from 'firebase/auth';

export class FirebaseAuthService implements ApiAuthServiceInterface {
  private registerWithEmailAndPasswordUsecase: RegisterUserWithEmailAndPasswordUseCase;
  private signInWithEmailAndPasswordUsecase: SignInWithEmailAndPasswordUseCase;
  private signOutUsecase: SignOutUseCase;
  private readonly authGateway: FirebaseAuthGateway;
  constructor(App: FirebaseApp) {
    this.authGateway = new FirebaseAuthGateway(App);
    this.registerWithEmailAndPasswordUsecase = new RegisterUserWithEmailAndPasswordUseCase(this.authGateway);
    this.signInWithEmailAndPasswordUsecase = new SignInWithEmailAndPasswordUseCase(this.authGateway);
    this.signOutUsecase = new SignOutUseCase(this.authGateway);
  }

  async registerWithEmailAndPassword(email: string, password: string): Promise<AuthUser | null> {
    const result = await this.registerWithEmailAndPasswordUsecase.execute(email, password);
    return result;
  }

  async signInWithEmailAndPassword(email: string, password: string): Promise<AuthUser | null> {
    const result = await this.signInWithEmailAndPasswordUsecase.execute(email, password);
    return result;
  }

  async signOut(): Promise<void> {
    await this.signOutUsecase.execute();
  }

  getAuth(): Auth {
    return this.authGateway.getAuth();
  }
}
