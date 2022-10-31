import { useLocation } from "react-router-dom";
import styles from "./Header.module.scss";
import HeaderItem from "./HeaderItem/HeaderItem";
import HeaderLogo from "./HeaderLogo/HeaderLogo";

const Header = () => {
  const currentPath = useLocation().pathname;

  return (
    <nav className={styles.header}>
      <div className={styles.content}>
        <HeaderLogo />
        <ul className={styles.items}>
          <HeaderItem link="/" label="Home" currentPath={currentPath} />
          <HeaderItem link="/login" label="Login" currentPath={currentPath} />
        </ul>
      </div>
    </nav>
  );
};

export default Header;
