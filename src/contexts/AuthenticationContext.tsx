import { createContext, useEffect, useState } from "react";
import { subscribeToAuthentication } from "../firebase/authentication/authenticationState";
import { Authentication } from "../types/User";

type AuthenticationContextProviderProps = {
  children?: React.ReactNode;
};

const initialAuth: Authentication = {
  user: null,
  hasFetchedInitialAuthState: false,
};

export const AuthenticationContext = createContext<Authentication>(initialAuth);

const AuthenticationContextProvider = ({
  children,
}: AuthenticationContextProviderProps) => {
  const [authentication, setAuthentication] =
    useState<Authentication>(initialAuth);

  useEffect(() => {
    const unsub = subscribeToAuthentication({
      onStateChange: (authenication) => {
        setAuthentication(authenication);
      },
    });

    return unsub;
  }, []);

  return (
    <AuthenticationContext.Provider value={authentication}>
      {children}
    </AuthenticationContext.Provider>
  );
};

export default AuthenticationContextProvider;
