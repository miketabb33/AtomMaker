import { Element } from "../../types/Element";

type ElementListItemProps = {
  element: Element;
};

const ElementListItem = ({ element }: ElementListItemProps) => {
  return (
    <>
      <td>{element.atomicNumber}</td>
      <td>{element.symbol}</td>
      <td>{element.name}</td>
      <td>{element.atomicMass}</td>
      <td>{element.electronicConfiguration}</td>
      <td>{element.electronegativity}</td>
      <td>{element.atomicRadius}</td>
      <td>{element.ionRadius}</td>
      <td>{element.vanDerWaalsRadius}</td>
      <td>{element.ionizationEnergy}</td>
      <td>{element.electronAffinity}</td>
      <td>{element.oxidationStates}</td>
      <td>{element.standardState}</td>
      <td>{element.bondingType}</td>
      <td>{element.meltingPoint}</td>
      <td>{element.boilingPoint}</td>
      <td>{element.density}</td>
      <td>{element.groupBlock}</td>
      <td>{element.yearDiscovered}</td>
      <td>{element.block}</td>
      <td style={{ backgroundColor: `#${element.cpkHexColor}` }}>
        {element.cpkHexColor}
      </td>
      <td>{element.period}</td>
      <td>{element.group}</td>
    </>
  );
};

export default ElementListItem;
