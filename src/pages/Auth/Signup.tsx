import { useState } from "react";
import { Link } from "react-router-dom";
import Auth from "../../components/Auth/Auth";
import { signup } from "../../firebase/authentication/authentication";
import useAppNavigate from "../../hooks/useNavigate";
import styles from "./Auth.module.scss";

const SignUp = () => {
  const [error, setError] = useState("");
  const { redirectOnLogin } = useAppNavigate();

  const signupAction = (email: string, password: string) => {
    signup(email, password)
      .then((res) => {
        redirectOnLogin();
        console.log("Signed Up: ", res);
      })
      .catch((err: Error) => {
        setError(err.message);
        console.log("Sign up error: ", err);
      });
  };

  return (
    <>
      <div className={styles.auth}>
        <Auth title="Sign Up" onSubmit={signupAction} error={error} />
      </div>
      <div className={styles.options}>
        <span>Already have an account? </span>
        <Link to="/login">Login</Link>
      </div>
    </>
  );
};

export default SignUp;
