import React, { useState } from "react";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";

const App7 = () => {
  const [cartItems, setCartItems] = useState(["Product 1", "Product 2"]);

  return (
    <div>
      <NavBar cartItemsCount={cartItems.length} />
      <Cart cartItems={cartItems} onClear={() => setCartItems([])} />
    </div>
  );
};

export default App7;
