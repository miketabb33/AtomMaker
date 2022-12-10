import { useState } from 'react'
import Button from '../Button/Button'
import { ChipIdentity } from '../Chip/Chip'
import Selector from '../TextField/Selector'
import TextField from '../TextField/TextField'
import { TextFieldProps } from '../TextField/textfieldProps'

const MoleculeMakerForm = () => {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [selectorText, setSelectorText] = useState('')

  const selectorTextFieldProps: TextFieldProps = {
    value: selectorText,
    onChange: setSelectorText,
    placeholder: 'Element',
  }

  const chips: ChipIdentity[] = [
    { id: '1', name: 'Bob' },
    { id: '2', name: 'Rob' },
  ]

  return (
    <div>
      <TextField value={name} onChange={setName} placeholder="Name" />
      <TextField
        value={description}
        onChange={setDescription}
        placeholder="Description"
      />
      <Selector
        textFieldProps={selectorTextFieldProps}
        chips={chips}
        onButtonClick={() => {
          console.log('button clicked')
        }}
      />
      <Button>Create Molecule</Button>
    </div>
  )
}

export default MoleculeMakerForm
