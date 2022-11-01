import { useState } from "react";
import Card from "../../components/Card/Card";
import Label from "../../components/Label/Label";
import TextField from "../../components/TextField/TextField";
import Button from "../Button/Button";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import styles from "./Auth.module.scss";

type AuthProps = {
  title: string;
  onSubmit: (email: string, password: string) => void;
  error?: string;
};

const Auth = ({ title, onSubmit, error }: AuthProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <Card>
        <h2>{title}</h2>
        {error && (
          <div className={styles.errorContainer}>
            <ErrorMessage>{error}</ErrorMessage>
          </div>
        )}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onSubmit(email, password);
          }}
        >
          <div className={styles.group}>
            <div className={styles.labelContainer}>
              <Label>Email:</Label>
            </div>
            <TextField
              value={email}
              type={"email"}
              onChange={(v) => setEmail(v)}
              placeholder="Email"
            />
          </div>
          <div className={styles.group}>
            <div className={styles.labelContainer}>
              <Label>Password:</Label>
            </div>
            <TextField
              value={password}
              type={"password"}
              onChange={(v) => setPassword(v)}
              placeholder="Password"
            />
          </div>
          <Button type="submit">{title}</Button>
        </form>
      </Card>
    </div>
  );
};

export default Auth;
