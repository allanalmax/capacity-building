import React from "react";
import { useEffect, useState } from "react";
import Axios from "axios";

export const CatFacts = (props) => {
  const [catFact, setCatFact] = useState("");

  const fetchCatFact = () => {
    Axios.get("https://catfact.ninja/fact").then((res) => {
      setCatFact(res.data.fact);
    });
  };

  useEffect(() => {
    fetchCatFact();
  }, []);
  return (
    <div>
      <button onClick={fetchCatFact}>Generate Fact</button>
      <p>{catFact}</p>
    </div>
  );
};
