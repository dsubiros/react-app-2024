import { useState } from "react";

export interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const handleClick = (x: number) => {
    setSelectedIndex(x);
    onSelectItem && onSelectItem(items[selectedIndex]);
  };

  return (
    <>
      <h1>{heading}</h1>
      {!items.length && <p>No items were found</p>}
      <ul className="list-group">
        {items.map((x, idx) => (
          <li
            key={idx.toString()}
            className={
              "list-group-item " + (selectedIndex === idx ? "active" : "")
            }
            onClick={() => handleClick(idx)}
          >
            {x}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
