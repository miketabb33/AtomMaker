import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  UserCredential,
} from "firebase/auth";
import { User } from "../types/User";
import { auth } from "./configuration";

export const signup = (email: string, password: string) => {
  return new Promise((resolve, reject) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = assembleUser(userCredential);
        resolve(user);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const login = (email: string, password: string) => {
  return new Promise((resolve, reject) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = assembleUser(userCredential);
        resolve(user);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const logout = () => {
  return signOut(auth);
};

const assembleUser = (userCredential: UserCredential) => {
  const firebaseUser = userCredential.user;
  const user: User = {
    uid: firebaseUser.uid,
    email: firebaseUser.email || "",
  };
  return user;
};
