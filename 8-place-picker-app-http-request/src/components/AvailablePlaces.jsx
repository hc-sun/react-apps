import { useState, useEffect } from "react";

import Places from "./Places.jsx";
import Error from "./Error.jsx";
import { sortPlacesByDistance } from "../loc.js";
import { fetchAvailablePlaces } from "../http.js";
import { useFetch } from "../hooks/useFetch.js";

// navigator.geolocation.getCurrentPosition((position) => {
//   const sortedPlaces = sortPlacesByDistance(
//     places,
//     position.coords.latitude,
//     position.coords.longitude
//   );
//   setAvailablePlaces(sortedPlaces);
//   setIsFetching(false);
// });

export default function AvailablePlaces({ onSelectPlace }) {
  // const [isFetching, setIsFetching] = useState(false); // loading state
  // const [availablePlaces, setAvailablePlaces] = useState([]); // data state
  // const [error, setError] = useState(); // error state

  const {
    isFetching,
    error,
    fetchedData: availablePlaces,
    setFetchedData: setAvailablePlaces,
  } = useFetch(fetchAvailablePlaces, []);

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
