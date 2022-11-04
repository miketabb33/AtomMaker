import { useLocation } from "react-router-dom";
import { logout } from "../../firebase/authentication/authentication";
import styles from "./Header.module.scss";
import HeaderAction from "./HeaderItem/HeaderAction";
import HeaderLink from "./HeaderItem/HeaderLink";
import HeaderLogo from "./HeaderLogo/HeaderLogo";

const Header = () => {
  const currentPath = useLocation().pathname;

  const performLogout = () => {
    logout()
      .then((res) => {
        console.log("Logged out");
      })
      .catch((err) => {
        console.log("Log out error: ", err);
      });
  };

  return (
    <nav className={styles.header}>
      <div className={styles.content}>
        <HeaderLogo />
        <ul className={styles.items}>
          <HeaderLink link="/" label="Home" currentPath={currentPath} />
          <HeaderLink link="/login" label="Login" currentPath={currentPath} />
          <HeaderLink
            link="/signup"
            label="Sign Up"
            currentPath={currentPath}
          />
          <HeaderAction label="Logout" onClick={performLogout} />
        </ul>
      </div>
    </nav>
  );
};

export default Header;
