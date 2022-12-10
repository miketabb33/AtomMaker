export type TextFieldProps = {
  value: string
  type?: 'email' | 'number' | 'password' | 'text'
  name?: string
  onChange?: (value: string) => void
  placeholder?: string
}
