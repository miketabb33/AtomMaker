import { useState } from 'react'
import { getAllElements } from '../networking/getAllElements'

const useStandardElement = () => {
  const [elements, setElements] = useState<[]>([])
  const [isLoadingElements, setIsLoadingElements] = useState(false)
  const [errorFetchingElements, setErrorFetchingElements] =
    useState<Error | null>(null)

  const isElementsEmpty = elements.length === 0

  const fetchElements = () => {
    setIsLoadingElements(true)
    setElements([])
    getAllElements()
      .then((response) => setElements([]))
      .catch((err) => setErrorFetchingElements(err))
      .finally(() => setIsLoadingElements(false))
  }

  return {
    elements,
    isLoadingElements,
    errorFetchingElements,
    isElementsEmpty,
    fetchElements,
  }
}

export default useStandardElement
