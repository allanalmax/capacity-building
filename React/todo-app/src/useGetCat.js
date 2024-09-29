import { useEffect, useState } from "react";
import Axios from "axios";

export const useGetCat = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchCatFact = async () => {
    try {
      const response = await Axios.get("https://catfact.ninja/fact");
      setData(response.data);
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchCatFact();
  }, []);

  const refetchData = async () => {
    //alert("DATA REFETCHED");
    await fetchCatFact();
  };

  return { data, isLoading, error, refetchData };
};
