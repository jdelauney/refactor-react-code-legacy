import { CreateUserProfilePayload, UserGatewayInterface } from '../interfaces/user.gateway.ts';
import { User } from '../models/user.model.ts';

type CreateUserProfilCommand = {
  authUserId: string;
  payload: CreateUserProfilePayload;
};
export class CreateUserUsecase {
  constructor(private readonly userGateway: UserGatewayInterface) {}

  async execute({ authUserId, payload }: CreateUserProfilCommand): Promise<User | null> {
    const user: User | null = await this.userGateway.createUser({
      authUserId: authUserId,
      payload: payload,
    });

    return user;
  }
}
