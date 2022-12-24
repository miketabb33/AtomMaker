import MoleculeMakerForm from '../../components/MoleculeMakerForm/MoleculeMakerForm'
import Table from '../../components/Table/Table'
import styles from './Home.module.scss'
import MyMolecules from '../../components/MyMolecules/MyMolecules'
import { getAllElements } from '../../DataStore/PeriodicTable'
import { parseMoleculeMakerElements } from '../../logic/parseMoleculeMakerElements'
import { useContext } from 'react'
import { AuthenticationContext } from '../../contexts/AuthenticationContext'

const Home = () => {
  const periodicTable = getAllElements()
  const moleculeMakerElements = parseMoleculeMakerElements(periodicTable)
  const authentication = useContext(AuthenticationContext)

  return (
    <>
      <div className={styles.column}>
        <div>
          <h1>Make Molecule</h1>
          <MoleculeMakerForm
            elements={moleculeMakerElements}
            userId={authentication.user?.uid}
          />
        </div>
        <div>
          <h1>My Molecules</h1>
          <MyMolecules userId={authentication.user?.uid} />
        </div>
      </div>
      <h1>Elements</h1>
      <Table items={periodicTable} />
    </>
  )
}

export default Home
