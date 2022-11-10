import { useEffect } from "react";
import ElementList from "../../components/ElementList/ElementList";
import useStandardElement from "../../hooks/useStandardElement";

const Home = () => {
  const { elements, isLoadingElements, errorFetchingElements, fetchElements } =
    useStandardElement();

  useEffect(() => {
    fetchElements();
  }, []);

  return (
    <>
      {isLoadingElements && <p>Loading...</p>}
      {errorFetchingElements && <p>{errorFetchingElements.message}</p>}
      <ElementList elements={elements} />
    </>
  );
};

export default Home;
