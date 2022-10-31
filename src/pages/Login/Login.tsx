import { useState } from "react";
import Card from "../../components/Header/Card/Card";
import TextField from "../../components/TextField/TextField";
import { login } from "../../firebase/authentication";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <Card>
        <p>EMAIL</p>
        <TextField
          value={email}
          onChange={(v) => setEmail(v)}
          placeholder="Email"
        />
        <p>PASSWORD</p>
        <TextField
          value={password}
          onChange={(v) => setPassword(v)}
          placeholder="Password"
        />
        <button onClick={() => login(email, password)}>Login</button>
      </Card>
    </div>
  );
};

export default Login;
