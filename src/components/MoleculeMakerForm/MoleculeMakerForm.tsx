import { useState } from 'react'
import { makeId } from '../../logic/makeId'
import { MoleculeMakerElement } from '../../types/MoleculeMakerElement'
import Button from '../Button/Button'
import { ChipData } from '../Chip/Chip'
import DropDown, { DropDownItem } from '../DropDown/DropDown'
import Selector from '../TextField/Selector'
import TextField from '../TextField/TextField'
import { TextFieldProps } from '../TextField/textfieldProps'
import styles from './MoleculeMakerForm.module.scss'

type MoleculeMakerFormProps = {
  elements: MoleculeMakerElement[]
}

const MoleculeMakerForm = ({ elements }: MoleculeMakerFormProps) => {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [selectorText, setSelectorText] = useState('')
  const [chipsData, setChipsData] = useState<ChipData[]>([])

  const selectorTextFieldProps: TextFieldProps = {
    value: selectorText,
    onChange: setSelectorText,
    placeholder: 'Element',
  }

  const getDropDownResults = (): DropDownItem[] => {
    if (!selectorText) return []
    const filteredElements = elements.filter((element) =>
      element.name.toLowerCase().includes(selectorText.toLowerCase())
    )
    return filteredElements.map((element) => {
      return {
        id: `${element.atomicMass}`,
        name: element.name,
      }
    })
  }

  const dropDownResults = getDropDownResults()

  const onChipXClick = (id: string) => {
    const updatedChips = chipsData.filter((chip) => chip.id !== id)
    setChipsData(updatedChips)
  }

  const onDropDownItemClick = (item: DropDownItem) => {
    const chipData: ChipData = {
      id: makeId(10),
      name: item.name,
    }
    setChipsData([...chipsData, chipData])
    setSelectorText('')
  }

  return (
    <div className={styles.container}>
      <TextField value={name} onChange={setName} placeholder="Name" />
      <TextField
        value={description}
        onChange={setDescription}
        placeholder="Description"
      />
      <Selector
        textFieldProps={selectorTextFieldProps}
        chipsData={chipsData}
        onChipXClick={onChipXClick}
      />
      {dropDownResults.length > 0 && (
        <DropDown items={dropDownResults} onClick={onDropDownItemClick} />
      )}
      <Button>Create Molecule</Button>
    </div>
  )
}

export default MoleculeMakerForm
