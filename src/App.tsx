import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/layouts/Layout";
import Home from "./pages/Home/Home";
import Login from "./pages/Auth/Login";
import SignUp from "./pages/Auth/Signup";
import { subscribeToAuthentication } from "./firebase/authentication/authenticationState";
import { useEffect, useState } from "react";
import { User } from "./types/User";

const App = () => {
  const [userState, setUserState] = useState<User | null>(null);
  const [isUserLoaded, setIsUserLoaded] = useState(false); //Test to see if this is necessary

  useEffect(() => {
    subscribeToAuthentication({
      initialUserState: (user) => {
        setUserState(user);
        setIsUserLoaded(true);
      },
      onStateChange: (user) => {
        setUserState(user);
      },
    });
  }, []);

  return (
    <>
      {!isUserLoaded && <h1>Loading</h1>}
      {isUserLoaded && (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="login" element={<Login />} />
              <Route path="signup" element={<SignUp />} />
            </Route>
          </Routes>
        </BrowserRouter>
      )}
    </>
  );
};

export default App;
