// import { useContext } from "react";
// import { AppContext } from "../App";
// import { useQuery } from "@tanstack/react-query"; // used to make requests that get data from an API
// import Axios from "axios";
//
// export const Home = () => {
//   const { data, isLoading, error } = useQuery(["cat"], () => {
//     return Axios.get("https://catfact.ninja/fact").then((res) => res.data);
//   });
//   const { userName } = useContext(AppContext);
//
//   if (isLoading) return <p>Loading...</p>;
//   if (error) return <p>Error loading data</p>;
//
//   return (
//     <div>
//       <h1>Home Page</h1>
//       <p>User is: {userName}</p>
//       <p>{data?.fact}</p>
//     </div>
//   );
// };

import { useContext, useEffect, useState } from "react";
import { AppContext } from "../App";
import { useGetCat } from "../useGetCat";

export const Home = () => {
  const { userName } = useContext(AppContext);
  const { data, isLoading, error, refetchData } = useGetCat();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading data</p>;

  return (
    <div>
      <h1>Home Page</h1>
      <p>User is: {userName}</p>
      <p>{data.fact}</p>
      <button onClick={refetchData}>Refetch</button>
    </div>
  );
};
