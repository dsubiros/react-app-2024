import React, { useState } from "react";

const App2 = () => {
  const [drink, setDrink] = useState({
    name: "Americano",
    price: 4,
  });

  const handleClick = () => {
    setDrink({...drink, price: 6});
  }

  return <div>{drink.price}
  <button onClick={handleClick}>Click me</button></div>;
};

export default App2;
