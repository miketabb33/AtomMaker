type TextFieldProps = {
  value: string;
  onChange?: (value: string) => void;
  placeholder?: string;
};

const TextField = ({ value, onChange, placeholder }: TextFieldProps) => {
  const valueChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) onChange(e.target.value);
  };

  return (
    <input
      type="text"
      value={value}
      onChange={valueChanged}
      placeholder={placeholder}
    />
  );
};

export default TextField;
