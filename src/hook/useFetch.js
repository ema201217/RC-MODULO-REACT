import axios from "axios";
import { useEffect, useState } from "react";

export const useFetch = ({ url, options, formatter }) => {
  if (!url) throw new Error("Este hook necesita la url para hacer la petición");
  
  const [data, setData] = useState({ data: [], loading: true });
  useEffect(() => {
    axios(url, 
      options,
    ).then(({ data }) => {
      const d = formatter ? formatter(data):data
      setData({ data:d, loading: false });
    });

  }, [formatter, options, url]);

  return data ;
};
