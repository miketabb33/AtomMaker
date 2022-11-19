import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthenticationContext } from "../contexts/AuthenticationContext";

export const requiresLoggedIn = (element: JSX.Element) => {
  return <AuthenticatedWrapper>{element}</AuthenticatedWrapper>;
};

export const requiresLoggedOut = (element: JSX.Element) => {
  return <UnauthenticatedWrapper>{element}</UnauthenticatedWrapper>;
};

const AuthenticatedWrapper = ({ children }: { children: JSX.Element }) => {
  const authentication = useContext(AuthenticationContext);
  return !!authentication?.user ? children : <Navigate to="/login" />;
};

const UnauthenticatedWrapper = ({ children }: { children: JSX.Element }) => {
  const authentication = useContext(AuthenticationContext);
  return !authentication?.user ? children : <Navigate to="/" />;
};
