import { FirebaseServices } from './firebase/firebaseServices.ts';
import { getFirebaseApp } from './firebase/firebase.helper.ts';

export const apiServices = new FirebaseServices(getFirebaseApp());
