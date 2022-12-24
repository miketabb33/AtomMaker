import { useEffect, useState } from 'react'
import { watchMolecules } from '../../firebase/firestore/molecule'
import { Molecule } from '../../types/Molecule'
import styles from '../Table/Table.module.scss'
import ElementShorthand from './ElementShorthand'

let unsub

type MyMoleculesProps = {
  userId?: string
}

const MyMolecules = ({ userId }: MyMoleculesProps) => {
  const [molecules, setMolecules] = useState<Molecule[]>([])

  const onEmission = (molecules: Molecule[]) => {
    setMolecules(molecules)
  }

  const onError = (err: Error) => {
    alert(err)
  }

  useEffect(() => {
    if (!userId) return
    unsub = watchMolecules({ userId, onEmission, onError })
    return unsub
  }, [userId])

  return (
    <div className={styles.fixTableHead}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Symbol</th>
          </tr>
        </thead>
        <tbody>
          {molecules.map((molecule) => (
            <tr key={molecule.name}>
              <td>{molecule.name}</td>
              <td>{molecule.description}</td>
              <td>
                <ElementShorthand
                  elementAtomicIds={molecule.elementAtomicIds}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default MyMolecules
