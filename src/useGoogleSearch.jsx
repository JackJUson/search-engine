import { useState, useEffect } from "react";

const CONTEXT_KEY = process.env.REACT_APP_CONTEXT_KEY;
const API_KEY = process.env.REACT_APP_API_KEY;

// Custom hook to use Google Search
function useGoogleSearch(term) {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      fetch(
        `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
      )
        .then((response) => response.json())
        .then((result) => {
          setData(result);
        });
    }

    fetchData();
  }, [term]);

  return { data };
}

export default useGoogleSearch;
