import { Outlet } from "react-router-dom";

import Navigation from "./components/navgation/navigation";

export default function App() {
  return (
    <>
      <div
        style={{
          display: "flex",
          width: "100vw",
          height: "100vh",
        }}
      >
        <Navigation />
        <Outlet />
      </div>
    </>
  );
}
