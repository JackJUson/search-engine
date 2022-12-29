import React, { useState, useEffect } from "react";
import API_KEY from "./Key.jsx";

const CONTEXT_KEY = "663178f46916240f2";

function useGoogleSearch(term) {
  // Custom hook
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      fetch(
        `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
      )
    }
  }, [term]);
}

export default useGoogleSearch;
