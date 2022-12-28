import React, { useState } from "react";
import "./elevatorStyle.css";

const Elevator = (props) => {
  const [changeLvl, setChangeLvl] = useState();

  let zero = "lift zero",
    one = "lift one",
    two = "lift two",
    three = "lift three";

  return (
    <div className={one}>
      <p className="lift_display"></p>
    </div>
  );
};

export default Elevator;
