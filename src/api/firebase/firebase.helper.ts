import { FirebaseApp, initializeApp } from 'firebase/app';
import { collection, doc, Firestore, getDoc, getDocs, query, where } from 'firebase/firestore';
import { config as firebaseConfig } from './firebase.config';

let app: FirebaseApp | null = null;
const getFirebaseApp = () => {
  if (app) {
    return app;
  }
  app = initializeApp(firebaseConfig);
  return app;
};

/*const db = getFirestore(app);
const authenticator = getAuth(app);
const storage = getStorage(app);*/

const findOneDocRefBy = async (db: Firestore, collectionName: string, field: string, value: string) => {
  const querySnapshot = query(collection(db, collectionName), where(field, '==', value));
  const queryResult = await getDocs(querySnapshot);
  if (queryResult.empty) {
    return null;
  }
  const docRef = queryResult.docs[0];
  if (!docRef.ref) {
    return null;
  }
  return docRef.ref;
};

const findAllSnapshotBy = async (db: Firestore, collectionName: string, field: string, value: string) => {
  const querySnapshot = query(collection(db, collectionName), where(field, '==', value));
  const queryResult = await getDocs(querySnapshot);
  if (queryResult.empty) {
    return null;
  }
  return queryResult.docs;
};

const findOneSnapshotBy = async (db: Firestore, collectionName: string, field: string, value: string) => {
  const ref = await findOneDocRefBy(db, collectionName, field, value);
  if (!ref) {
    return null;
  }
  return getDoc(ref);
};

const getSnapshotByDocId = async (db: Firestore, collectionName: string, id: string) => {
  const ref = doc(db, collectionName, id);
  return getDoc(ref);
};
// app, db, authenticator, storage,
export { getFirebaseApp, findOneDocRefBy, findOneSnapshotBy, findAllSnapshotBy, getSnapshotByDocId };
