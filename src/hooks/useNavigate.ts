import { useNavigate } from "react-router-dom";

const useAppNavigate = () => {
  const nav = useNavigate();

  const redirectOnLogin = () => {
    nav("/");
  };

  return { redirectOnLogin };
};

export default useAppNavigate;
