import { Element } from "../../types/Element";

type ElementListItem = {
  element: Element;
};

const ElementListItem = ({ element }: ElementListItem) => {
  return (
    <div>
      <h1>{element.name}</h1>
      <h2>{element.atomicNumber}</h2>
    </div>
  );
};

export default ElementListItem;
