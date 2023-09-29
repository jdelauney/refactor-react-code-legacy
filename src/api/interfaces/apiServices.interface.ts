import { ApiAuthServiceInterface } from './apiAuthService.interface.ts';
import { ApiUserServiceInterface } from './apiUserService.interface.ts';

export interface ApiServicesInterface {
  getAuthService(): ApiAuthServiceInterface;
  getUserService(): ApiUserServiceInterface;
}
