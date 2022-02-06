import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBB2r5HaOJNu4_j3e_l7cSETRP_KBNSwp8",
  authDomain: "singhal-consultancy.firebaseapp.com",
  projectId: "singhal-consultancy",
  storageBucket: "singhal-consultancy.appspot.com",
  messagingSenderId: "465225658457",
  appId: "1:465225658457:web:d91d44255ec48792228148",
};

export const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);
