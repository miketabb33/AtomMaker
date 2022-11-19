import { User as FirebaseUser } from "firebase/auth";
import { Authentication, User } from "../../types/User";
import { authentication } from "../configuration";

type SubscribeToAuthentication = {
  onStateChange: (authentication: Authentication) => void;
};

export const subscribeToAuthentication = ({
  onStateChange,
}: SubscribeToAuthentication) => {
  return authentication.onAuthStateChanged((newUserState) => {
    const auth = assembleAuthentication(newUserState);
    onStateChange(auth);
  });
};

const assembleAuthentication = (firebaseUser: FirebaseUser | null) => {
  let user: User | null = null;

  if (firebaseUser) {
    user = {
      uid: firebaseUser.uid,
      email: firebaseUser.email || "",
    };
  }

  const auth: Authentication = {
    user,
    hasFetchedInitialAuthState: true,
  };
  return auth;
};
