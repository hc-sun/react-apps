import { Outlet } from "react-router-dom";

function RootLayout() {
  return (
    <>
      <h1>Root Layout</h1>
      <Outlet />
    </>
  );
}

export default RootLayout;
