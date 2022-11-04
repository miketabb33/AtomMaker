import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { authentication } from "../configuration";

export const signup = (email: string, password: string) => {
  return new Promise((resolve, reject) => {
    createUserWithEmailAndPassword(authentication, email, password)
      .then((userCredential) => {
        resolve("success");
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const login = (email: string, password: string) => {
  return new Promise((resolve, reject) => {
    signInWithEmailAndPassword(authentication, email, password)
      .then((userCredential) => {
        resolve("success");
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const logout = () => {
  return signOut(authentication);
};
