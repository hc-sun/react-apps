import { useState } from "react";

async function sendHttpRequest(url, config) {
  const response = await etch(url, config);

  const responseData = await response.json();

  if (!response.ok) {
    throw new Error(responseData.message || "Request failed!");
  }

  return responseData;
}

export default function useHttp() {
  const [error, setError] = useState(null);

  async function sendRequest() {
    try {
      const responseData = await sendHttpRequest();
    } catch (error) {
      setError(error.message || "Something went wrong!");
    }
  }
}
