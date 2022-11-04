import { useState } from "react";
import { Link } from "react-router-dom";
import Auth from "../../components/Auth/Auth";
import { login } from "../../firebase/authentication/authentication";
import styles from "./Auth.module.scss";

const Login = () => {
  const [error, setError] = useState("");

  const loginAction = (email: string, password: string) => {
    login(email, password)
      .then((res) => {
        console.log("Logged in: ", res);
      })
      .catch((err: Error) => {
        setError(err.message);
        console.log("Log in error: ", err);
      });
  };

  return (
    <>
      <div className={styles.auth}>
        <Auth title="Login" onSubmit={loginAction} error={error} />
      </div>
      <div className={styles.options}>
        <span>Dont have an account? </span>
        <Link to="/signup">Sign Up</Link>
      </div>
    </>
  );
};

export default Login;
