import React, { useState } from "react";
import produce from "immer";

const App8 = () => {
  const [game, setGame] = useState({
    id: 1,
    player: {
      name: "John",
    },
  });

  const handleClick = () => {

    produce();
    setState({
      ...game, player: {...game.player, na}
    })

  }

  return <div>App8</div>;
};

export default App8;
