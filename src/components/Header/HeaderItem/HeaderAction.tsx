import styles from "./HeaderItem.module.scss";

type HeaderActionProps = {
  label: string;
  onClick: () => void;
};

const HeaderAction = ({ label, onClick }: HeaderActionProps) => {
  return (
    <li className={styles.item}>
      <button type="button" className={styles.action} onClick={onClick}>
        {label}
      </button>
    </li>
  );
};

export default HeaderAction;
