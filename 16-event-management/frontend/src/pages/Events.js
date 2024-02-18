import { useLoaderData, json } from "react-router-dom";

import EventsList from "../components/EventsList";

function EventsPage() {
  const eventsData = useLoaderData();

  // if (eventsData.isError) {
  //   return <p>{eventsData.message}</p>;
  // }

  const events = eventsData.events;

  return <EventsList events={events} />;
}

export default EventsPage;

export async function loader() {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    // return { isError: true, message: "Failed to fetch events" };
    throw json({ message: "Failed to fetch events" }, { status: 500 });
  } else {
    return response;
  }
}
