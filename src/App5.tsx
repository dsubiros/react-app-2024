import React, { useState } from "react";

const App5 = () => {
  const [bugs, setBugs] = useState([
    { id: 1, title: "Bug 1", fixed: false },
    { id: 2, title: "Bug 2", fixed: false },
    { id: 3, title: "Bug 3", fixed: false },
    { id: 4, title: "Bug 4", fixed: false },
  ]);

  const handleClick = () => {
    // Update 1
    // const idx = bugs.findIndex((b) => b.id === 3);
    // const temp = bugs[idx];
    // const newBug = {...temp, fixed: true};
    // setBugs([...bugs.map(bug => bug.id === newBug.id ? newBug : bug)]);
    
    // Update 2
    setBugs([...bugs.map(bug => bug.id === 4 ? {...bug, fixed: true} : bug)]);

    // Remove
    // setBugs([...bugs].filter(tag => tag !== 'cheerful'));

    // Update
    // setBugs([...bugs].map(tag => tag === 'cheerful' ? 'cheerful2' : tag));
  };

  return (
    <div>
      <div>
        {bugs.map((b) => (
          <div key={b.id}>
            <span>Title: {b.title}, Fixed: {b.fixed ? 'true' : 'false'}</span>,
          </div>
        ))}
      </div>

      <button onClick={handleClick}>Click me</button>
    </div>
  );
};

export default App5;
