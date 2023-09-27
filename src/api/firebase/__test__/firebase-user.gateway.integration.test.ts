import { describe, test, expect, beforeAll, afterAll } from 'vitest';
import { firebaseTestConfig } from './setup/firebase.test.config';

import { User } from 'firebase/auth';
import { FirebaseApp, initializeApp } from 'firebase/app';

import { FirebaseAuthGateway } from '../auth/firebase-auth.gateway';
import { AuthUser } from '../../auth/model/AuthUser';
import { FirebaseUserGateway } from '../user/firebase-user.gateway.ts';
import { CreateUserProfilePayload } from '../../user/interfaces/user.gateway.ts';

console.log('firebaseTestConfig', firebaseTestConfig);

describe('Firebase user', () => {
  let app: FirebaseApp | null;
  let firebaseAuthGateway: FirebaseAuthGateway;
  let firebaseUserGateway: FirebaseUserGateway;
  let bobUser: User;
  let userId: string;

  beforeAll(async () => {
    app = initializeApp(firebaseTestConfig);
    firebaseAuthGateway = new FirebaseAuthGateway(app);
    firebaseUserGateway = new FirebaseUserGateway(app);

    //connectAuthEmulator(firebaseAuthGateway.getAuth(), FB_AUTH_EMULATOR_HOST);

    //connectFirestoreEmulator(store, FB_STORE_EMULATOR_HOST, FB_STORE_EMULATOR_PORT);
  });

  describe('Create profil of a new user bob@test.com', async () => {
    test('Should be return same data as newProfil', async () => {
      const newUser: AuthUser = await firebaseAuthGateway.registerUserWithEmailAndPassword({
        email: 'bob@test.com',
        password: 'password',
      });
      //let result: boolean = false;
      bobUser = firebaseAuthGateway.getCurrentUser();
      userId = newUser.id;
      const newProfile = {
        userId: userId,
        username: 'SpongeBob',
        bio: 'I am SpongeBob',
        games: 'I like to play',
        availabilities: 'I am available',
        avatarUrl: 'https://i.pravatar.cc/150?img=60',
      };
      const result = await firebaseUserGateway.createUser({
        authUserId: userId,
        payload: newProfile,
      });
      expect(result).toEqual({
        userId: userId,
        username: 'SpongeBob',
        bio: 'I am SpongeBob',
        games: 'I like to play',
        availabilities: 'I am available',
        avatarUrl: 'https://i.pravatar.cc/150?img=60',
      });
    });

    describe('Update profil of user bob@test.com', async () => {
      test('Should be return same data as updatedProfil', async () => {
        const updatedProfile: Partial<CreateUserProfilePayload> = {
          username: 'SuperBob',
          bio: 'I am Super Bob',
          games: 'I like to play',
          availabilities: 'I am available',
          avatarUrl: 'https://i.pravatar.cc/150?img=60',
        };
        const result = await firebaseUserGateway.updateUser({
          userId: userId,
          payload: updatedProfile,
        });

        expect(result).toEqual({
          userId: userId,
          username: 'SuperBob',
          bio: 'I am Super Bob',
          games: 'I like to play',
          availabilities: 'I am available',
          avatarUrl: 'https://i.pravatar.cc/150?img=60',
        });
      });
    });

    describe('Get profil of user', async () => {
      test('Should be return same data as updatedProfil', async () => {
        const result = await firebaseUserGateway.getUserById(userId);
        expect(result).toEqual({
          userId: userId,
          username: 'SuperBob',
          bio: 'I am Super Bob',
          games: 'I like to play',
          availabilities: 'I am available',
          avatarUrl: 'https://i.pravatar.cc/150?img=60',
        });
      });
    });

    describe('Delete profil of user', async () => {
      test('Should be return same data as updatedProfil', async () => {
        const result: boolean = await firebaseUserGateway.deleteUser(userId);
        expect(result).toBe(true);
      });
    });
  });

  afterAll(async () => {
    await bobUser.delete();
  });
});
