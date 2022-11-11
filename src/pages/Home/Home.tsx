import { useEffect } from "react";
import ElementList from "../../components/ElementList/ElementList";
import Loader from "../../components/Loader/Loader";
import useStandardElement from "../../hooks/useStandardElement";
import styles from "./Home.module.scss";

const Home = () => {
  const {
    elements,
    isLoadingElements,
    errorFetchingElements,
    isElementsEmpty,
    fetchElements,
  } = useStandardElement();

  useEffect(() => {
    fetchElements();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <div className={styles.tableWell}>
        <div className={styles.loaderWell}>
          {isLoadingElements && <Loader />}
        </div>
        {errorFetchingElements && <p>{errorFetchingElements.message}</p>}
        {!isElementsEmpty && <ElementList elements={elements} />}
      </div>
    </>
  );
};

export default Home;
