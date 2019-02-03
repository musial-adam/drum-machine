import React from "react";
import "./NotesButton.scss";

const NotesButton = props => {
  return (
    <button className="NotesButton" onClick={props.changeNotesSet}>
      {props.set}
    </button>
  );
};

export default NotesButton;
