import React from "react";

function TestComponent(props) {
  return (
    <select value={props.value} onChange={props.onChange}>
      {props.items.map((val) => (
        <option value={val}>{val}</option>
      ))}
    </select>
  );
}

export default TestComponent;
