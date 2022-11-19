import { useContext } from "react";
import Loader from "./components/Loader/Loader";
import { AuthenticationContext } from "./contexts/AuthenticationContext";
import Router from "./router/Router";

const App = () => {
  const authentication = useContext(AuthenticationContext);
  return authentication.hasFetchedInitialAuthState ? <Router /> : <Loader />;
};

export default App;
