import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { config as firebaseConfig } from './firebase.config';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const authenticator = getAuth(app);
const storage = getStorage(app);

export { app, db, authenticator, storage };
