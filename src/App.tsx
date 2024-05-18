import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";

function App() {
  let items = ["New York", "San Francisco", "Tokyo", "London"];

  const handleSelectItem = (item: string): void =>
    console.log(`Selected item is now ${item}`);

  return (
    <>
      <Alert>Hello <strong>World</strong></Alert>
      <Button color="primary" onClick={() => console.warn('Clicked!!!!!!')}>The Button 2</Button>
      <ListGroup
        items={items}
        heading="Ratata"
        onSelectItem={handleSelectItem}
      />
    </>
  );
}

export default App;
