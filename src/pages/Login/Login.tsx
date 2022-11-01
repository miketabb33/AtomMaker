import { useState } from "react";
import Auth from "../../components/Auth/Auth";
import { login } from "../../firebase/authentication";
import styles from "./Login.module.scss";

const Login = () => {
  const [error, setError] = useState("");

  const loginAction = (email: string, password: string) => {
    login(email, password)
      .then((res) => {
        console.log(res);
      })
      .catch((err: Error) => {
        setError(err.message);
      });
  };

  return (
    <div className={styles.auth}>
      <Auth title="Login" onSubmit={loginAction} error={error} />
    </div>
  );
};

export default Login;
