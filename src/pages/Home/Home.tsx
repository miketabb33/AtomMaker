import MoleculeMakerForm from '../../components/MoleculeMakerForm/MoleculeMakerForm'
import Table from '../../components/Table/Table'
import { PeriodicTable } from '../../types/PeriodicTable'
import periodicTableJson from '../../periodicTable.json'

const Home = () => {
  const elements: PeriodicTable[] = periodicTableJson

  return (
    <>
      <h1>Elements</h1>
      <Table items={elements} />
      <h1>Make Molecule</h1>
      <MoleculeMakerForm />
    </>
  )
}

export default Home
