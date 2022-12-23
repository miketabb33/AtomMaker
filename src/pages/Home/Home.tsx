import MoleculeMakerForm from '../../components/MoleculeMakerForm/MoleculeMakerForm'
import Table from '../../components/Table/Table'
import { PeriodicTableDto } from '../../types/PeriodicTableDto'
import periodicTableJson from '../../periodicTable.json'
import { parseElements } from '../../logic/parseElements'
import { MoleculeMakerElement } from '../../types/MoleculeMakerElement'

const Home = () => {
  const periodicTableDto: PeriodicTableDto[] = periodicTableJson

  const moleculeMakerElements: MoleculeMakerElement[] = periodicTableDto.map(
    (item) => {
      return {
        atomicMass: item.atomic_mass || -1,
        name: item.name || 'Invalid',
      }
    }
  )

  return (
    <>
      <h1>Elements</h1>
      <Table items={parseElements(periodicTableDto)} />
      <h1>Make Molecule</h1>
      <MoleculeMakerForm elements={moleculeMakerElements} />
    </>
  )
}

export default Home
