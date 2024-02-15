import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import Events from "./pages/Events";
import EventDetail from "./pages/EventDetail";
import NewEvent from "./pages/NewEvent";
import EditEvent from "./pages/EditEvent";
import RootLayout from "./pages/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "events", element: <Events /> },
      { path: "events/:eventId", element: <EventDetail /> },
      { path: "events/new", element: <NewEvent /> },
      { path: "events/:eventId/edit", element: <EditEvent /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
