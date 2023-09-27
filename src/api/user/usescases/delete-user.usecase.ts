import { UserGatewayInterface } from '../interfaces/user.gateway.ts';

export class DeleteUserUsecase {
  constructor(private readonly userGateway: UserGatewayInterface) {}

  async execute(userId: string): Promise<boolean> {
    return this.userGateway.deleteUser(userId);
  }
}
