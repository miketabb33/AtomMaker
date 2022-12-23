import { addDoc, collection } from 'firebase/firestore'
import { Molecule } from '../../types/Molecule'
import { db } from '../configuration'

const moleculesCollection = collection(db, 'molecules')

export const addMoleculeToFirestore = (
  molecule: Molecule,
  authorId: string
) => {
  return addDoc(moleculesCollection, { ...molecule, authorId })
}
