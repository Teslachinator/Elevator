import React from "react";
import "./elevatorStyle.css";
const Elevator = ({ changeLvl }) => {
  let zero = "lift zero",
    one = "lift one",
    two = "lift two",
    three = "lift three";

  let lvl = 0;
  switch (changeLvl) {
    case 1:
      lvl = one;
      break;
    case 2:
      lvl = two;
      break;
    case 3:
      lvl = three;
      break;

    default:
      lvl = zero;
      break;
  }

  return (
    <div className="shaft">
      <div className={lvl}>
        <p className="lift_display"></p>
      </div>
    </div>
  );
};

export default Elevator;
