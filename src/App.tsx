import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/layouts/Layout";
import Home from "./pages/Home/Home";
import Login from "./pages/Auth/Login";
import SignUp from "./pages/Auth/Signup";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
