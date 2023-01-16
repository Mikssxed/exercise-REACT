import React from "react";

export default function MyModal({ modalData, onClick }) {
  return (
    <div className="modal">
      <h1>Id: {modalData.id}</h1>
      <h1>Name: {modalData.name}</h1>
      <h1>Year: {modalData.year}</h1>
      <h1>Color: {modalData.color}</h1>
      <h1>Pantone value: {modalData.pantone_value}</h1>
      <button onClick={onClick}>Close</button>
    </div>
  );
}
