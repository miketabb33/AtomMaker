import {
  addDoc,
  collection,
  onSnapshot,
  query,
  where,
} from 'firebase/firestore'
import { Molecule } from '../../types/Molecule'
import { db } from '../configuration'

const moleculesCollection = collection(db, 'molecules')

export const addMoleculeToFirestore = (
  molecule: Molecule,
  authorId: string
) => {
  return addDoc(moleculesCollection, { ...molecule, authorId })
}

type WatchMolecules = {
  userId: string
  onEmission: (molecules: Molecule[]) => void
  onError: (err: Error) => void
}

export const watchMolecules = ({
  userId,
  onEmission,
  onError,
}: WatchMolecules) => {
  const q = query(moleculesCollection, where('authorId', '==', `${userId}`))
  onSnapshot(
    q,
    (snapshot) => {
      const molecules: Molecule[] = snapshot.docs.map((doc) => {
        const data = doc.data()
        return {
          name: data.name,
          description: data.description,
          elementAtomicIds: data.elementAtomicIds,
        }
      })
      onEmission(molecules)
    },
    onError
  )
}
