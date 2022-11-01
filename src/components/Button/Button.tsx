import styles from "./Button.module.scss";

type ButtonProps = {
  children?: React.ReactNode;
  type?: "button" | "submit" | "reset";
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

const Button = ({ children, type = "button", onClick }: ButtonProps) => {
  const buttonClicked = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    if (onClick) onClick(e);
  };

  return (
    <button
      className={styles.button}
      type={type}
      onClick={(e) => {
        buttonClicked(e);
      }}
    >
      {children}
    </button>
  );
};

export default Button;
