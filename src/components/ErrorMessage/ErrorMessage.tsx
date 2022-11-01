import styles from "./ErrorMessage.module.scss";

type ErrorMessageProps = {
  children?: React.ReactNode;
};

const ErrorMessage = ({ children }: ErrorMessageProps) => {
  return <p className={styles.errorMessage}>{children}</p>;
};

export default ErrorMessage;
