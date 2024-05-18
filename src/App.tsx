import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";
import './App.css';


function App() {
  const [message, setMessage] = useState("");
  const [count, setCount] = useState(1);

  let items = ["New York", "San Francisco", "Tokyo", "London"];

  const handleSelectItem = (item: string): void =>
    console.log(`Selected item is now ${item}`);

  return (
    <>
      {message && <Alert onClose={() => setMessage("")}>{message}</Alert>}
      <Button
        color="primary"
        onClick={() => {
          console.warn("Clicked!!!!!!");
          setMessage(`Message ${count}`);
          setCount(count + 1);
        }}
      >
        My Button
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
