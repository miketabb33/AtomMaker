import MoleculeMakerForm from '../../components/MoleculeMakerForm/MoleculeMakerForm'
import Table from '../../components/Table/Table'
import { Molecule } from '../../types/Molecule'
import styles from './Home.module.scss'
import MyMolecules from '../../components/MyMolecules/MyMolecules'
import { getAllElements } from '../../DataStore/PeriodicTable'
import { parseMoleculeMakerElements } from '../../logic/parseMoleculeMakerElements'

const Home = () => {
  const periodicTable = getAllElements()
  const moleculeMakerElements = parseMoleculeMakerElements(periodicTable)

  const onFormSubmit = (molecule: Molecule) => {
    console.log(molecule)
  }

  return (
    <>
      <div className={styles.column}>
        <div>
          <h1>Make Molecule</h1>
          <MoleculeMakerForm
            elements={moleculeMakerElements}
            onSubmit={onFormSubmit}
          />
        </div>
        <div>
          <h1>My Molecules</h1>
          <MyMolecules />
        </div>
      </div>
      <h1>Elements</h1>
      <Table items={periodicTable} />
    </>
  )
}

export default Home
