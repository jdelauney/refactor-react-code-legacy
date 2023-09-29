import { FirebaseApp } from 'firebase/app';
import { GetUserUsecase } from '../../user/usescases/get-user.usecase.ts';
import { FirebaseUserGateway } from '../user/firebase-user.gateway.ts';
import { User } from '../../user/models/user.model.ts';

export class FirebaseUserService {
  private readonly getUserUsecase: GetUserUsecase;
  private readonly userGateway: FirebaseUserGateway;
  constructor(App: FirebaseApp) {
    this.userGateway = new FirebaseUserGateway(App);
    this.getUserUsecase = new GetUserUsecase(this.userGateway);
  }
  async getUser(userId: string): Promise<User | null> {
    const result = await this.getUserUsecase.execute(userId);
    return result;
  }
}
