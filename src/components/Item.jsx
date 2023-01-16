import React from "react";

export default function Item(props) {
  return (
    <div
      id={props.id}
      onClick={props.onClick}
      style={{ backgroundColor: props.style }}
      className="item"
    >
      <h1>Id: {props.id}</h1>
      <h2>Name: {props.name}</h2>
      <h3>Year: {props.year}</h3>
    </div>
  );
}
