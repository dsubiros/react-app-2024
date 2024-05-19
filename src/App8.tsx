import React, { useState } from "react";

const App8 = () => {
  const [game, setGame] = useState({
    id: 1,
    player: {
      name: "John",
    },
  });

  const handleClick = () => {
    setState({
      ...game, player: {...game.player, na}
    })

  }

  return <div>App8</div>;
};

export default App8;
