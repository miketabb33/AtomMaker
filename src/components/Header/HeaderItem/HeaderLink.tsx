import { Link } from "react-router-dom";
import styles from "./HeaderItem.module.scss";

type HeaderItemProps = {
  link: string;
  label: string;
  currentPath: string;
};

const HeaderLink = ({ link, label, currentPath }: HeaderItemProps) => {
  const itemStyles = () =>
    currentPath === link ? `${styles.item} ${styles.active}` : styles.item;

  return (
    <li className={itemStyles()}>
      <Link className={styles.link} to={link}>
        <p className={styles.text}>{label}</p>
      </Link>
    </li>
  );
};

export default HeaderLink;
