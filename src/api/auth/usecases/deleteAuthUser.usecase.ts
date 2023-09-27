import { AuthGatewayInterface } from '../interfaces/Auth.gateway.interface.ts';

export class DeleteAuthUserUsecase {
  constructor(private readonly authGateway: AuthGatewayInterface) {}

  async execute(): Promise<void> {
    await this.authGateway.deleteUser();
  }
}
