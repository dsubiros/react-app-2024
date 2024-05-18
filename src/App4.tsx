import React, { useState } from "react";

const App4 = () => {
  const [tags, setTags] = useState(['happy', 'cheerful']);

  const handleClick = () => {
    // Add
    // setTags([...tags, 'joyful']);

    // Remove
    // setTags([...tags].filter(tag => tag !== 'cheerful'));

    // Update
    setTags([...tags].map(tag => tag === 'cheerful' ? 'cheerful2' : tag));
  }

  return <div>{tags.join(' ')}
  <button onClick={handleClick}>Click me</button></div>;
};

export default App4;
