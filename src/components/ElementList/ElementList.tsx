import { Element } from "../../types/Element";
import ElementListItem from "../ElementListItem/ElementListItem";

type ElementListProps = {
  elements: Element[];
};

const ElementList = ({ elements }: ElementListProps) => {
  return (
    <>
      {elements.map((element) => (
        <ElementListItem key={element.atomicNumber} element={element} />
      ))}
    </>
  );
};

export default ElementList;
