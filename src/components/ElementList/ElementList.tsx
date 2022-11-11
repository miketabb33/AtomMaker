import { Element } from "../../types/Element";
import ElementListItem from "./ElementListItem";
import styles from "./ElementList.module.scss";

type ElementListProps = {
  elements: Element[];
};

const ElementList = ({ elements }: ElementListProps) => {
  return (
    <div className={styles.fixTableHead}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Atomic Number</th>
            <th>symbol</th>
            <th>Name</th>
            <th>Atomic Mass</th>
            <th>Electronic Configuration</th>
            <th>Electronegativity</th>
            <th>Atomic Radius</th>
            <th>Ion Radius</th>
            <th>Van Der Waals Radius</th>
            <th>Ionization Energy</th>
            <th>Electron Affinity</th>
            <th>Oxidation States</th>
            <th>Standard State</th>
            <th>Bonding Type</th>
            <th>Melting Point</th>
            <th>Boiling Point</th>
            <th>Density</th>
            <th>Group Block</th>
            <th>Year Discovered</th>
            <th>Block</th>
            <th>Cpk Hex Color</th>
            <th>Period</th>
            <th>Group</th>
          </tr>
        </thead>
        <tbody>
          {elements.map((element) => (
            <tr key={element.atomicNumber}>
              <ElementListItem element={element} />
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ElementList;
