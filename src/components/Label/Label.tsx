import styles from "./Label.module.scss";

type LabelProps = {
  children?: React.ReactNode;
  htmlFor?: string;
};

const Label = ({ children, htmlFor }: LabelProps) => {
  return (
    <label className={styles.label} htmlFor={htmlFor}>
      {children}
    </label>
  );
};

export default Label;
