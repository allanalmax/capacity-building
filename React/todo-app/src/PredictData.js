import React from "react";
import { useState } from "react";
import Axios from "axios";

export const PredictData = (props) => {
  const [name, setName] = useState("");

  const [predictatedData, setPredictatedData] = useState(null);

  const fetchData = () => {
    Axios.get(`https://api.agify.io/?name=${name}`).then((res) => {
      setPredictatedData(res.data);
    });
  };

  return (
    <div>
      <input
        placeholder={"Name"}
        onChange={(event) => {
          setName(event.target.value);
        }}
      />
      <button onClick={fetchData}>Predict data</button>

      <h2>Name: {predictatedData?.name}</h2>
      <h2>Predicate age: {predictatedData?.age}</h2>
      <h2>Count: {predictatedData?.count}</h2>
    </div>
  );
};
