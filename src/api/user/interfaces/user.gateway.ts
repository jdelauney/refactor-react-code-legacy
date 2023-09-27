import { User } from '../models/user.model.ts';

export type CreateUserProfilePayload = {
  username: string;
  avatarUrl: string;
  bio: string;
  games: string;
  availabilities: string;
};
export interface UserGatewayInterface {
  getUserById(userId: string): Promise<User | null>;
  createUser({ authUserId, payload }: { authUserId: string; payload: CreateUserProfilePayload }): Promise<User | null>;
  updateUser({ userId, payload }: { userId: string; payload: Partial<CreateUserProfilePayload> }): Promise<User | null>;
  deleteUser(userId: string): Promise<boolean>;
}
