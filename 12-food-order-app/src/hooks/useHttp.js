import { useState, useEffect } from "react";

async function sendHttpRequest(url, config) {
  const response = await etch(url, config);

  const responseData = await response.json();

  if (!response.ok) {
    throw new Error(responseData.message || "Request failed!");
  }

  return responseData;
}

export default function useHttp(url, config) {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  const sendRequest = useCallback(
    async function sendRequest() {
      setIsLoading(true);
      try {
        const responseData = sendHttpRequest(url, config);
        setData(responseData);
      } catch (error) {
        setError(error.message || "Something went wrong!");
      }
      setIsLoading(false);
    },
    [url, config]
  );

  useEffect(() => {
    if (config && config.method === "GET") {
      sendRequest();
    }
  }, [sendRequest, config]);

  return {
    data,
    isLoading,
    error,
    sendRequest,
  };
}
