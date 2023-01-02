import { useState } from "react";
import "./App.css";
import Elevator from "./Components/elevator/Elevator";
import LvlBtn from "./Components/LevelsBtn/LvlBtn";

function App() {
  const [changeLvl, setChangeLvl] = useState(0);

  const update = (value) => {
    setChangeLvl(value);
  };
  return (
    <div className="App">
      <div className="main">
        <Elevator changeLvl={changeLvl} />
        <LvlBtn update={update} />
      </div>
    </div>
  );
}

export default App;
