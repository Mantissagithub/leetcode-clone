import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { doc, getDoc, setDoc } from 'firebase/firestore';

const FIREBASE_APP = initializeApp({
  // Your Firebase Project Configurations Go Here
  apiKey: "AIzaSyDcBPDiscL2jctHi-3alj3irB9sd2cpOOI",
  authDomain: "leetcode-clone-db6e6.firebaseapp.com",
  projectId: "leetcode-clone-db6e6",
  storageBucket: "leetcode-clone-db6e6.appspot.com",
  messagingSenderId: "288879628107",
  appId: "1:288879628107:web:2da8ed83fa6257b224a2ce",
  measurementId: "G-B5ZQLH7JBL"
});

export const db = getFirestore(FIREBASE_APP);

export const getDocumentById = async (collection: string, documentId: string) => {
  const querySnapshot = await getDoc(doc(db, collection, documentId));
  return querySnapshot.exists() ? querySnapshot.data() : null;
};

export const saveDocument = async (collection: string, documentId: string, data: Object) => {
  await setDoc(doc(db, collection, documentId), data);
};