import { ApiServicesInterface } from '../interfaces/apiServices.interface.ts';
import { FirebaseApp } from 'firebase/app';
import { FirebaseUserService } from './services/firebaseUserService.ts';
import { FirebaseAuthService } from './services/firebaseAuthService.ts';

export class FirebaseServices implements ApiServicesInterface {
  private readonly authService: FirebaseAuthService;
  private readonly userService: FirebaseUserService;
  constructor(App: FirebaseApp) {
    this.authService = new FirebaseAuthService(App);
    this.userService = new FirebaseUserService(App);
  }

  getAuthService() {
    return this.authService;
  }

  getUserService() {
    return this.userService;
  }
}
