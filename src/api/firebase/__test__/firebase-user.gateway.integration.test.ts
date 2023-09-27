import { describe, test, expect, beforeAll, afterAll } from 'vitest';
import {
  /*FB_AUTH_EMULATOR_HOST,
  FB_STORE_EMULATOR_HOST,
  FB_STORE_EMULATOR_PORT,*/
  firebaseTestConfig,
} from './setup/firebase.test.config';

import {
  //connectAuthEmulator,
  User,
} from 'firebase/auth';
import { FirebaseApp, initializeApp } from 'firebase/app';
import {
  Firestore,
  addDoc,
  collection,
  //connectFirestoreEmulator,
  getFirestore,
  getDoc,
  query,
  updateDoc,
  doc,
  getDocs,
  where,
  deleteDoc,
} from 'firebase/firestore';
import { FirebaseAuthGateway } from '../auth/firebase-auth.gateway';
import { AuthUser } from '../../auth/model/AuthUser';

describe('Firebase user', () => {
  let app: FirebaseApp | null;
  let firebaseAuthGateway: FirebaseAuthGateway;
  let bobUser: User;
  let store: Firestore;
  let userId: string;

  beforeAll(async () => {
    //process.env['FIRESTORE_EMULATOR_HOST'] = 'http://127.0.0.1:8081';
    app = initializeApp(firebaseTestConfig);
    firebaseAuthGateway = new FirebaseAuthGateway(app);
    //connectAuthEmulator(firebaseAuthGateway.getAuth(), FB_AUTH_EMULATOR_HOST);
    store = getFirestore(app);

    if (!store) {
      throw new Error('Cannot get firestore instance');
    }

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
      const bobRef = collection(store, 'users');
      //const docRef = doc(bobRef);
      //doc(store, 'users', userId);
      //store.collection('users').doc(userId);
      const newDocRef = await addDoc(bobRef, newProfile);
      const snapshot = await getDoc(newDocRef);
      const data = snapshot.data();

      expect(data).toEqual(newProfile);
    });
    describe('Update profil of user bob@test.com', async () => {
      test('Should be return same data as updatedProfil', async () => {
        const updatedProfile = {
          userId: userId,
          username: 'SuperBob',
          bio: 'I am Super Bob',
          games: 'I like to play',
          availabilities: 'I am available',
          avatarUrl: 'https://i.pravatar.cc/150?img=60',
        };
        const q = query(collection(store, 'users'), where('userId', '==', userId));
        const result = await getDocs(q);

        //const colRef = collection(store, 'users');
        const docRef = result.docs[0];
        const bobRef = doc(store, 'users', docRef.id);
        //doc(store, 'users', userId);
        await updateDoc(bobRef, updatedProfile);
        const snapshot = await getDoc(bobRef);
        const data = snapshot.data();

        expect(data).toEqual(updatedProfile);
      });
    });

    describe('Get profil of user', async () => {
      test('Should be return same data as updatedProfil', async () => {
        const q = query(collection(store, 'users'), where('userId', '==', userId));
        const result = await getDocs(q);

        //const colRef = collection(store, 'users');
        const docRef = result.docs[0];
        const bobRef = doc(store, 'users', docRef.id);
        //doc(store, 'users', userId);
        const snapshot = await getDoc(bobRef);
        const data = snapshot.data();

        expect(data).toEqual({
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
        const q = query(collection(store, 'users'), where('userId', '==', userId));
        const queryResult = await getDocs(q);

        //const colRef = collection(store, 'users');
        const docRef = queryResult.docs[0];
        await deleteDoc(docRef.ref);

        const snapshot = await getDoc(docRef.ref);

        const result = snapshot.exists();
        expect(result).toBe(false);
      });
    });
  });

  afterAll(async () => {
    await bobUser.delete();
  });
});
