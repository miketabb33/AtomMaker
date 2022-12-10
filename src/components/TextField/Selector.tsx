import { TextFieldProps } from './textfieldProps'
import textFieldStyles from './TextField.module.scss'
import selectorStyles from './Selector.module.scss'
import Chip, { ChipIdentity } from '../Chip/Chip'

type SelectorProps = {
  textFieldProps: TextFieldProps
  onButtonClick: () => void
  chips: ChipIdentity[]
}

const Selector = ({ textFieldProps, onButtonClick, chips }: SelectorProps) => {
  const { type, value, onChange, placeholder, name } = textFieldProps

  const valueChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) onChange(e.target.value)
  }

  return (
    <div
      className={`${textFieldStyles.textFieldShared} ${selectorStyles.selector}`}
    >
      <div className={selectorStyles.chipWell}>
        {chips.map((chip) => (
          <Chip
            identity={chip}
            onClickClose={(id) => {
              console.log(id)
            }}
          />
        ))}
      </div>

      <input
        type={type}
        value={value}
        onChange={valueChanged}
        placeholder={placeholder}
        required={true}
        name={name}
        className={selectorStyles.textField}
      />
      <button
        className={selectorStyles.button}
        onClick={() => {
          onButtonClick()
        }}
      >
        Add
      </button>
    </div>
  )
}

export default Selector
