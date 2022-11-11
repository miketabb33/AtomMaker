import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";

export const requiresLoggedIn = (element: JSX.Element) => {
  return <AuthenticatedWrapper>{element}</AuthenticatedWrapper>;
};

export const requiresLoggedOut = (element: JSX.Element) => {
  return <UnauthenticatedWrapper>{element}</UnauthenticatedWrapper>;
};

const AuthenticatedWrapper = ({ children }: { children: JSX.Element }) => {
  const user = useContext(UserContext);
  return !!user ? children : <Navigate to="/login" />;
};

const UnauthenticatedWrapper = ({ children }: { children: JSX.Element }) => {
  const user = useContext(UserContext);
  return !user ? children : <Navigate to="/" />;
};
