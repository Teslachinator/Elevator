import React, { useState } from "react";
import "./lvlBtnStyle.css";

const LvlBtn = () => {
  const [level, setLevel] = useState("");

  const levels = [
    { lvl: 0, id: 0 },
    { lvl: 1, id: 1 },
    { lvl: 2, id: 2 },
    { lvl: 3, id: 3 },
  ];

  return (
    <div className="lvls">
      {levels.map((levels) => (
        <div className="lvl">
          <button key={levels.id} onClick={() => setLevel(levels.id)}>
            {levels.lvl}
          </button>
        </div>
      ))}
    </div>
  );
};

export default LvlBtn;
//
