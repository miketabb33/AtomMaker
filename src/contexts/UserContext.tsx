import { createContext, useEffect, useState } from "react";
import { subscribeToAuthentication } from "../firebase/authentication/authenticationState";
import { User } from "../types/User";

type UserContextProviderProps = {
  children?: React.ReactNode;
};

export const UserContext = createContext<User | null>(null);

const UserContextProvider = ({ children }: UserContextProviderProps) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    subscribeToAuthentication({
      initialUserState: (user) => {
        setUser(user);
      },
      onStateChange: (user) => {
        setUser(user);
      },
    });
  }, []);

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};

export default UserContextProvider;
