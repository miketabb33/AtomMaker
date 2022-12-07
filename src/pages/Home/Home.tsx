import MoleculeMakerForm from '../../components/MoleculeMakerForm/MoleculeMakerForm'
import Table from '../../components/Table/Table'
import { PeriodicTableDto } from '../../types/PeriodicTableDto'
import periodicTableJson from '../../periodicTable.json'
import { parseElements } from '../../logic/parseElements'

const Home = () => {
  const periodicTableDto: PeriodicTableDto[] = periodicTableJson

  return (
    <>
      <h1>Elements</h1>
      <Table items={parseElements(periodicTableDto)} />
      <h1>Make Molecule</h1>
      <MoleculeMakerForm />
    </>
  )
}

export default Home
