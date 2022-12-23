import MoleculeMakerForm from '../../components/MoleculeMakerForm/MoleculeMakerForm'
import Table from '../../components/Table/Table'
import { PeriodicTableDto } from '../../types/PeriodicTableDto'
import periodicTableJson from '../../periodicTable.json'
import { parseElements } from '../../logic/parseElements'
import { MoleculeMakerElement } from '../../types/MoleculeMakerElement'
import { Molecule } from '../../types/Molecule'
import styles from './Home.module.scss'
import MyMolecules from '../../components/MyMolecules/MyMolecules'

const Home = () => {
  const periodicTableDto: PeriodicTableDto[] = periodicTableJson

  const moleculeMakerElements: MoleculeMakerElement[] = periodicTableDto.map(
    (item) => {
      return {
        atomicNumber: item.number || -1,
        name: item.name || 'Invalid',
      }
    }
  )

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
      <Table items={parseElements(periodicTableDto)} />
    </>
  )
}

export default Home
