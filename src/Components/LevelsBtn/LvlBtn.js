import React from "react";
import "./lvlBtnStyle.css";

const LvlBtn = (props) => {
  const levels = [
    { lvl: 0, id: 0 },
    { lvl: 1, id: 1 },
    { lvl: 2, id: 2 },
    { lvl: 3, id: 3 },
  ];

  return (
    <div className="lvlBtn">
      {levels.map((levels) => (
        <div className="lvl">
          <button
            key={levels.id}
            value={levels.lvl}
            onClick={() => props.update(levels.lvl)}
          >
            {levels.lvl}
          </button>
        </div>
      ))}
    </div>
  );
};

export default LvlBtn;
//
