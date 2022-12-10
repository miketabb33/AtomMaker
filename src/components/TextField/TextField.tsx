import { TextFieldProps } from './textfieldProps'
import style from './TextField.module.scss'

const TextField = ({
  value,
  type = 'text',
  name,
  onChange,
  placeholder,
}: TextFieldProps) => {
  const valueChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) onChange(e.target.value)
  }

  return (
    <input
      type={type}
      value={value}
      onChange={valueChanged}
      placeholder={placeholder}
      required={true}
      name={name}
      className={`${style.textFieldShared} ${style.textField}`}
    />
  )
}

export default TextField
