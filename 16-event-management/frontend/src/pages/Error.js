import { useRouteError } from "react-router-dom";

import PageContent from "../components/PageContent";
import MainNavigation from "../components/MainNavigation";

function ErrorPage() {
  const error = useRouteError();

  let title = "An Error Occurred";
  let message = "An unknown error occurred. Please try again later.";

  if (error.status === 500) {
    message = JSON.parse(error.data).message;
  }

  if (error.status === 404) {
    title = "404 Error";
    message = "Page Not Found";
  }

  return (
    <>
      <MainNavigation />
      <PageContent title={title}>
        <p>{message}</p>
      </PageContent>
    </>
  );
}

export default ErrorPage;
