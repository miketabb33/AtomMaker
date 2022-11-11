import { useState } from "react";
import { getAllElements } from "../networking/getAllElements";
import { Element } from "../types/Element";

const useStandardElement = () => {
  const [elements, setElements] = useState<Element[]>([]);
  const [isLoadingElements, setIsLoadingElements] = useState(false);
  const [errorFetchingElements, setErrorFetchingElements] =
    useState<Error | null>(null);

  const isElementsEmpty = elements.length === 0;

  const fetchElements = () => {
    setIsLoadingElements(true);
    setElements([]);
    getAllElements()
      .then((atoms) => setElements(atoms))
      .catch((err) => setErrorFetchingElements(err))
      .finally(() => setIsLoadingElements(false));
  };

  return {
    elements,
    isLoadingElements,
    errorFetchingElements,
    isElementsEmpty,
    fetchElements,
  };
};

export default useStandardElement;
