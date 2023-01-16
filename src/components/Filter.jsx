import React, { useState } from "react";

export default function Filter(props) {

  return (
    <form>
      <input
        onChange={props.handleChange}
        value={props.value}
        name="filter"
        placeholder="Please input number..."
        type="text"
        className="filter"
      />
      <label>filter by id</label>
    </form>
  );
}
