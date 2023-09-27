import { CreateUserProfilePayload, UserGatewayInterface } from '../interfaces/user.gateway.ts';
import { User } from '../models/user.model.ts';

type UpdateUserProfilCommand = {
  userId: string;
  payload: Partial<CreateUserProfilePayload>;
};
export class UpdateUserUsecase {
  constructor(private readonly userGateway: UserGatewayInterface) {}

  async execute({ userId, payload }: UpdateUserProfilCommand): Promise<User | null> {
    const user: User | null = await this.userGateway.updateUser({
      userId: userId,
      payload: payload,
    });

    return user;
  }
}
