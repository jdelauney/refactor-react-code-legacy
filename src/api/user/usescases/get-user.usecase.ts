import { UserGatewayInterface } from '../interfaces/user.gateway.ts';
import { User } from '../models/user.model.ts';

export class getUserUsecase {
  constructor(private readonly userGateway: UserGatewayInterface) {}

  async execute(userId: string): Promise<User | null> {
    return this.userGateway.getUserById(userId);
  }
}
