import styles from "./TextField.module.scss";

type TextFieldProps = {
  value: string;
  type?: "email" | "number" | "password" | "text";
  name?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
};

const TextField = ({
  value,
  type = "text",
  name,
  onChange,
  placeholder,
}: TextFieldProps) => {
  const valueChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) onChange(e.target.value);
  };

  return (
    <input
      type={type}
      value={value}
      onChange={valueChanged}
      placeholder={placeholder}
      required={true}
      name={name}
      className={styles.textField}
    />
  );
};

export default TextField;
