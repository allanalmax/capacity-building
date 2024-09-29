import { useState } from "react";
import "../App.css";
import { useToggle } from "../useToggle";

export const Toggle = () => {
  const [isVisible, setVisible] = useToggle();
  return (
    <div className="App">
      <button onClick={setVisible}>{isVisible ? "Show" : "Hide"}</button>
      {!isVisible && <h2>Hidden text</h2>}
    </div>
  );
};
