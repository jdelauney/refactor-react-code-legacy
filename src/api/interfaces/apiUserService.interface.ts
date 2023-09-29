import { User } from '../user/models/user.model.ts';

export interface ApiUserServiceInterface {
  getUser(userId: string): Promise<User | null>;
}
