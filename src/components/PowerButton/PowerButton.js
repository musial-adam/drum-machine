import React from "react";
import "./PowerButton.scss";

const PowerButton = props => {
  return props.power ? (
    <button className="PowerButton Active" onClick={props.togglePower}>
      ON
    </button>
  ) : (
    <button className="PowerButton Inactive" onClick={props.togglePower}>
      OFF
    </button>
  );
};

export default PowerButton;
