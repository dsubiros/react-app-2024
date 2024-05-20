import React, { useState } from "react";
import produce from "immer";

const App8 = () => {
  // Excercise #1
  // const [game, setGame] = useState({
  //   id: 1,
  //   player: {
  //     name: "John",
  //   },
  // });

  // Excercise #2
  // const [pizza, setPizza] = useState({
  //   name: 'Spicy Pepperoni',
  //   toppings: ['Mushroom']
  // });

  // Excercise #3
  const [cart, setCart] = useState({
    discount: 0.1,
    items: [
      { id: 1, name: "Product 1", quantity: 1 },
      { id: 2, name: "Product 2", quantity: 1 },
    ],
  });

  const handleClick = () => {
    // Excercise #1
    // setGame({...game, player: {...game.player, name: 'Bob'}});
    // setGame(produce((draft) => {
    //   draft.player.name = "Tareko"
    // }));
    // Excercise #2
    // setPizza({...pizza, toppings: [...pizza.toppings, 'Cheese', 'Shrimp']});
    // setPizza(produce(d => {
    //   d.toppings.push('Cheese', 'Shrimp');
    // }));
    // Excercise #3
    // setCart({
    //   ...cart,
    //   items: cart.items.map((item) =>
    //     item.id === 2 ? { ...item, quantity: 2 } : item
    //   ),
    // });
    setCart(
      produce((draft) => {
        const item = draft.items.find((p) => p.id == 1);
        if (item) item.quantity = 3;
      })
    );
  };

  // Excercise #1
  // return <div>
  //   Name: {game.player.name}
  //   <button onClick={handleClick}>Change Name</button>
  // </div>;

  // // Excercise #2
  // return <div>
  //   Name: {pizza.toppings}

  //   <button onClick={handleClick}>Add Toppings</button>
  // </div>;

  // Excercise #3
  return (
    <div>
      <div>Cart</div>
      <ul>
        {cart.items.map(({ id, name, quantity }) => (
          <li key={id}>
            {name}, ({quantity})
          </li>
        ))}
      </ul>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
};

export default App8;
