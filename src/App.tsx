import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";
import './App.css';

import {BsCalendarFill} from 'react-icons/bs';
import Like from "./components/Like/Like";


function App() {
  const [message, setMessage] = useState("");
  const [count, setCount] = useState(1);

  let items = ["New York", "San Francisco", "Tokyo", "London"];

  const handleSelectItem = (item: string): void =>
    console.log(`Selected item is now ${item}`);

  return (
    <>
      {message && <Alert onClose={() => setMessage("")}>{message}</Alert>}
      
      <p><Like onClick={() => console.log('Clicked!!')}/></p>
      
      <Button
        color="primary"
        onClick={() => {
          console.warn("Clicked!!!!!!");
          setMessage(`Message ${count}`);
          setCount(count + 1);
        }}
      >
        
        My Button
        {/* <BsCalendarFill color="red" size={40}/> */}
      </Button>

      <ListGroup
        items={items}
        heading="Ratata"
        onSelectItem={handleSelectItem}
      />
    </>
  );
}

export default App;
