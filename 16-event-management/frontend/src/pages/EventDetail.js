import { useRouteLoaderData, json, redirect } from "react-router-dom";

import EventItem from "../components/EventItem";

function EventDetailPage() {
  const data = useRouteLoaderData("event-detail");

  return <EventItem event={data.event} />;
}

export default EventDetailPage;

export async function loader({ request, params }) {
  const response = await fetch(
    `http://localhost:8080/events/${params.eventId}`
  );

  if (!response.ok) {
    throw json({ message: "Failed to fetch event" }, { status: 500 });
  } else {
    return response;
  }
}

export async function action({ params, request }) {
  const response = await fetch(
    `http://localhost:8080/events/${params.eventId}`,
    { method: request.method }
  );

  if (!response.ok) {
    throw json({ message: "Failed to delete event" }, { status: 500 });
  }
  return redirect("/events");
}
