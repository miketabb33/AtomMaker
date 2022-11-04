import { User as FirebaseUser } from "firebase/auth";
import { User } from "../../types/User";
import { authentication } from "../configuration";

type SubscribeToAuthentication = {
  initialUserState: (user: User | null) => void;
  onStateChange: (user: User | null) => void;
};

export const subscribeToAuthentication = ({
  initialUserState,
  onStateChange,
}: SubscribeToAuthentication) => {
  const initialUser = assembleUserUnlessNull(authentication.currentUser);
  initialUserState(initialUser);
  authentication.onAuthStateChanged((newUserState) => {
    const user = assembleUserUnlessNull(newUserState);
    onStateChange(user);
  });
};

const assembleUserUnlessNull = (firebaseUser: FirebaseUser | null) =>
  !!firebaseUser ? assembleUser(firebaseUser) : null;

const assembleUser = (firebaseUser: FirebaseUser) => {
  const user: User = {
    uid: firebaseUser.uid,
    email: firebaseUser.email || "",
  };
  return user;
};
