import { AuthGatewayInterface } from '../interfaces/Auth.gateway.interface';

export class SignOutUseCase {
  constructor(private readonly authGateway: AuthGatewayInterface) {}

  async execute(): Promise<void> {
    await this.authGateway.signOut();
  }
}
