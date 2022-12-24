import { useState } from 'react'
import { addMoleculeToFirestore } from '../../firebase/firestore/molecule'
import { makeId } from '../../logic/makeId'
import { Molecule } from '../../types/Molecule'
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
  userId?: string
}

const MoleculeMakerForm = ({ elements, userId }: MoleculeMakerFormProps) => {
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
        id: `${element.atomicNumber}`,
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

  const getAtomicNumberForChips = () => {
    return chipsData.map((data) => {
      for (const element of elements) {
        if (data.name === element.name) {
          return element.atomicNumber
        }
      }
      return -1
    })
  }

  const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!userId) return

    const elementAtomicNumbers = getAtomicNumberForChips()

    const molecule: Molecule = {
      name,
      description,
      elementAtomicIds: elementAtomicNumbers,
    }
    addMoleculeToFirestore(molecule, userId)
      .then((_) => {
        clearForm()
      })
      .catch((err) => {
        alert(err)
      })
  }

  const clearForm = () => {
    setName('')
    setDescription('')
    setChipsData([])
    setSelectorText('')
  }

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={onFormSubmit}>
        <TextField value={name} onChange={setName} placeholder="Name" />
        <div className={styles.spacer} />
        <TextField
          value={description}
          onChange={setDescription}
          placeholder="Description"
        />
        <div className={styles.spacer} />
        <Selector
          textFieldProps={selectorTextFieldProps}
          chipsData={chipsData}
          onChipXClick={onChipXClick}
        />
        {dropDownResults.length > 0 && (
          <DropDown items={dropDownResults} onClick={onDropDownItemClick} />
        )}
        <div className={styles.spacer} />
        <Button type="submit">Create Molecule</Button>
      </form>
    </div>
  )
}

export default MoleculeMakerForm
