import React from "react";
//import '../css/Notes.css';

export const Notes = (props) => {
  console.log(props)
  return (
    <div key={props.id} className="note">
      <h1 style={{fontWeight:"bold"}}>{props.title}</h1>
      <p>{props.content}</p>
    </div>
  );
};
