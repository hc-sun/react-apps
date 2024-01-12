import { useState, useEffect } from "react";

import Places from "./Places.jsx";
import Error from "./Error.jsx";

export default function AvailablePlaces({
  onSelectPlace,
  isLoading,
  loadingText,
}) {
  const [isFetching, setIsFetching] = useState(false); // loading state
  const [availablePlaces, setAvailablePlaces] = useState([]); // data state
  const [error, setError] = useState(); // error state

  useEffect(() => {
    async function fetchPlaces() {
      setIsFetching(true);

      try {
        const response = await fetch("http://localhost:3000/places");
        const data = await response.json();

        if (!response.ok) {
          throw new Error("Could not fetch places.");
        }

        setAvailablePlaces(data.places);
      } catch (error) {
        setError({ message: error.message || "Could not fetch places." });
      }

      setIsFetching(false);
    }

    fetchPlaces();
  }, []);

  if (error) {
    return <Error title="Something went wrong" message={error.message} />;
  }

  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      isLoading={isFetching}
      loadingText="Loading places..."
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
