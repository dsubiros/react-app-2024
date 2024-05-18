import React, { useState } from "react";

import produce from "immer";

const App6 = () => {
  const [bugs, setBugs] = useState([
    { id: 1, title: "Bug 1", fixed: false },
    { id: 2, title: "Bug 2", fixed: false },
    { id: 3, title: "Bug 3", fixed: false },
    { id: 4, title: "Bug 4", fixed: false },
  ]);

  const handleClick = () => {
    setBugs(
      produce((draft) => {
        const bug = draft.find((bug) => bug.id === 3);
        if (bug) bug.fixed = true;
      })
    );
  };

  return (
    <div>
      {bugs.map(b => <p key={b.id}>{b.title} {b.fixed ? 'Fixed' : 'New'}</p>)}
      <button onClick={handleClick}>Click me</button>
    </div>
  );
};

export default App6;
