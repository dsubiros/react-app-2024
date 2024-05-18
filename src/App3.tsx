import React, { useState } from "react";

const App3 = () => {
  const [customer, setCustomer] = useState({
    name: "Ralph",
    address: {
      city: 'Lehigh Acres',
      zipCode: 33971
    }
  });

  const handleClick = () => {

    // const updated = Object.assign({}, {...customer});
    // updated.address.zipCode = 33936;
    // setCustomer(updated);

    setCustomer({...customer, address: {...customer.address, zipCode: 33905}});
  }

  return <div>{customer.address.zipCode}
  <button onClick={handleClick}>Click me</button></div>;
};

export default App3;
