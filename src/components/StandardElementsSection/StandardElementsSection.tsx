import { useEffect } from 'react'
import useStandardElement from '../../hooks/useStandardElement'
import ElementList from '../ElementList/ElementList'
import Loader from '../Loader/Loader'
import MoleculeMakerForm from '../MoleculeMakerForm/MoleculeMakerForm'

import styles from './StandardElementsSection.module.scss'

const StandardElementsSection = () => {
  const {
    elements,
    isLoadingElements,
    errorFetchingElements,
    isElementsEmpty,
    fetchElements,
  } = useStandardElement()

  useEffect(() => {
    fetchElements()
    // eslint-disable-next-line
  }, [])

  return (
    <section>
      <div className={styles.loaderWell}>{isLoadingElements && <Loader />}</div>
      {errorFetchingElements && <p>{errorFetchingElements.message}</p>}
      {!isElementsEmpty && (
        <>
          <h1>Elements</h1>
          <ElementList elements={elements} />
          <h1>Make Molecule</h1>
          <MoleculeMakerForm />
        </>
      )}
    </section>
  )
}

export default StandardElementsSection
