import { AuthGatewayInterface } from '../interfaces/Auth.gateway.interface';
import { AuthUser } from '../model/AuthUser';

export class SignInWithEmailAndPasswordUseCase {
  constructor(private readonly authGateway: AuthGatewayInterface) {}

  async execute(email: string, password: string): Promise<AuthUser> {
    const user: AuthUser = await this.authGateway.signInWithEmailAndPassword({
      email: email,
      password: password,
    });
    return user;
  }
}
