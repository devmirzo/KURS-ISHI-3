// react router dom imports
import { Outlet } from "react-router";

// component
import Navbar from "../components/Navbar";

function MainLayout() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </>
  );
}

export default MainLayout;
