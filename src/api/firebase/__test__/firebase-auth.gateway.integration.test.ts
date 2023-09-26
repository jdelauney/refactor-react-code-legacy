import { describe, test, expect, beforeAll, afterAll } from 'vitest';
import { FB_AUTH_EMULATOR_HOST, firebaseTestConfig } from './setup/firebase.test.config';
import { connectAuthEmulator, User } from 'firebase/auth';
import { FirebaseApp, initializeApp } from 'firebase/app';
import { FirebaseAuthGateway } from '../auth/firebase-auth.gateway.ts';
import { AuthUser } from '../../auth/model/AuthUser.ts';

describe('Firebase auth', () => {
  let app: FirebaseApp | null;
  let firebaseAuthGateway: FirebaseAuthGateway;
  let bobUser: User;

  beforeAll(async () => {
    app = initializeApp(firebaseTestConfig);
    firebaseAuthGateway = new FirebaseAuthGateway(app);
    connectAuthEmulator(firebaseAuthGateway.getAuth(), FB_AUTH_EMULATOR_HOST);
  });

  afterAll(async () => {
    bobUser.delete();
    app = null;
  });

  describe('Anonymous user register himself as a new user with bob@test.com as email and password as password', () => {
    test('should return a user object not to be null', async () => {
      const result: AuthUser = await firebaseAuthGateway.registerUserWithEmailAndPassword({
        email: 'bob@test.com',
        password: 'password',
      });
      bobUser = firebaseAuthGateway.getCurrentUser();
      expect(result).not.toBeNull();
    });
  });

  describe('Registered user signin with alice@example.com as email and password as password', () => {
    test('should return a user object not to be null', async () => {
      const result: AuthUser = await firebaseAuthGateway.signInWithEmailAndPassword({
        email: 'alice@example.com',
        password: 'password',
      });
      expect(result).not.toBeNull();
    });
  });

  describe('SingIn user logout', async () => {
    test('should return an undefined user object ', async () => {
      await firebaseAuthGateway.signOut();
      const currentUser = firebaseAuthGateway.getCurrentUser();
      expect(currentUser).toBeNull();
    });
  });

  describe('Anonymous user register himself as a new user with an existing email alice@example.com as email', () => {
    test('should thrown an error', async () => {
      const result = firebaseAuthGateway.registerUserWithEmailAndPassword({
        email: 'bob@test.com',
        password: 'password',
      });
      expect(result).rejects.toThrowError('Cannot register new user');
    });
  });

  describe('Anonymous user try to signin with an not registered email anonymous@test.com', () => {
    test('should thrown an error', async () => {
      const result = firebaseAuthGateway.signInWithEmailAndPassword({
        email: 'anonymous@test.com',
        password: 'password',
      });
      expect(result).rejects.toThrowError('Cannot signin user');
    });
  });
});
