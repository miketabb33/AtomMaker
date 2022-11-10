import { useState } from "react";
import { getAllElements } from "../networking/getAllElements";
import { Element } from "../types/Element";

const useStandardElement = () => {
  const [elements, setElements] = useState<Element[]>([]);
  const [isLoadingElements, setIsLoadingElements] = useState(false);
  const [errorFetchingElements, setErrorFetchingElements] =
    useState<Error | null>(null);

  const fetchElements = () => {
    setIsLoadingElements(true);
    getAllElements()
      .then((atoms) => setElements(atoms))
      .catch((err) => setErrorFetchingElements(err))
      .finally(() => setIsLoadingElements(false));
  };

  return {
    elements,
    isLoadingElements,
    errorFetchingElements,
    fetchElements,
  };
};

export default useStandardElement;
