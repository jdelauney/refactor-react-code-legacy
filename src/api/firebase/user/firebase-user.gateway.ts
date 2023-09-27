import { CreateUserProfilePayload, UserGatewayInterface } from '../../user/interfaces/user.gateway.ts';
import { User } from '../../user/models/user.model.ts';
import { findOneDocRefBy, findOneSnapshotBy } from '../firebase.helper.ts';
import { FirebaseApp } from 'firebase/app';
import { addDoc, collection, deleteDoc, Firestore, getDoc, getFirestore, updateDoc } from 'firebase/firestore';

export class FirebaseUserGateway implements UserGatewayInterface {
  private readonly db: Firestore;
  constructor(firebaseApp: FirebaseApp) {
    this.db = getFirestore(firebaseApp);
  }
  async getUserById(userId: string): Promise<User | null> {
    const snapshot = await findOneSnapshotBy(this.db, 'users', 'userId', userId);
    if (snapshot) {
      if (snapshot.exists()) {
        return Promise.resolve(snapshot.data() as User);
      }
    }
    return Promise.reject(null);
  }

  async createUser({
    authUserId,
    payload,
  }: {
    authUserId: string;
    payload: CreateUserProfilePayload;
  }): Promise<User | null> {
    const colRef = collection(this.db, 'users');
    const newDocRef = await addDoc(colRef, {
      userId: authUserId,
      ...payload,
    });
    const snapshot = await getDoc(newDocRef);
    if (snapshot.exists()) {
      return Promise.resolve(snapshot.data() as User);
    }
    return Promise.reject(null);
  }

  async updateUser({
    userId,
    payload,
  }: {
    userId: string;
    payload: Partial<CreateUserProfilePayload>;
  }): Promise<User | null> {
    const docRef = await findOneDocRefBy(this.db, 'users', 'userId', userId);

    if (!docRef) {
      return Promise.reject(null);
    }

    let currentData: User | null = null;
    const snapshot = await getDoc(docRef);
    if (snapshot.exists()) {
      currentData = snapshot.data() as User;
    }
    const newProfil = {
      ...currentData,
      ...payload,
    };
    await updateDoc(docRef, newProfil);

    const verifySnapshot = await getDoc(docRef);
    if (verifySnapshot.exists()) {
      return Promise.resolve(verifySnapshot.data() as User);
    }
    return Promise.reject(null);
  }

  async deleteUser(userId: string): Promise<boolean> {
    const docRef = await findOneDocRefBy(this.db, 'users', 'userId', userId);
    if (!docRef) {
      return Promise.reject(false);
    }
    await deleteDoc(docRef);
    const snapshot = await getDoc(docRef);
    if (snapshot.exists()) {
      return Promise.reject(false);
    }
    return Promise.resolve(true);
  }
}
