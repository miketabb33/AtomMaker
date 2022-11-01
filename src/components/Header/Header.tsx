import { useLocation } from "react-router-dom";
import { logout } from "../../firebase/authentication";
import styles from "./Header.module.scss";
import HeaderAction from "./HeaderItem/HeaderAction";
import HeaderLink from "./HeaderItem/HeaderLink";
import HeaderLogo from "./HeaderLogo/HeaderLogo";

const Header = () => {
  const currentPath = useLocation().pathname;

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
          <HeaderAction
            label="Logout"
            onClick={() => {
              logout()
                .then((res) => {
                  console.log(res);
                })
                .catch((err) => {
                  console.log(err);
                });
            }}
          />
        </ul>
      </div>
    </nav>
  );
};

export default Header;
