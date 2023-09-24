import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { config as firebaseConfig } from './firebase.config';
import { getAuth } from 'firebase/auth';

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const authenticator = getAuth();
