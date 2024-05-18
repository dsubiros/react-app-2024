import { useState } from "react";
import styles from "./ListGroup.css";
import styled from "styled-components";

const List = styled.ul`
   list-style: none;
   padding: 10px;
`;

interface ListItemProps {
  active: boolean;
}

const ListItem = styled.li<ListItemProps>`
   padding: 5px 0;
   background: ${props => props.active ? 'blue': 'none'}
`;

export interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const handleClick = (x: number) => {
    setSelectedIndex(x);
    onSelectItem && onSelectItem(items[selectedIndex]);
  };

  return (
    <>
      <h1>{heading}</h1>
      {!items.length && <p>No items were found</p>}
      {/* <ul className={[styles.listGroup, styles.container].join(" ")}> */}
      <List 
      // className={[styles.listGroup, styles.container].join(" ")}
      >
        {items.map((x, idx) => (
          <ListItem
            active={selectedIndex === idx}
            key={idx.toString()}
            // className={
            //   "list-group-item " + (selectedIndex === idx ? "active" : "")
            // }
            onClick={() => handleClick(idx)}
          >
            {x}
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default ListGroup;
