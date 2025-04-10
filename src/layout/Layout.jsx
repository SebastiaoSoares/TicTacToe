import { Outlet } from "react-router-dom";
import { Background } from "../components";
import { Loader } from "../components";

export default function Layout() {
  return (
    <>
      <Loader>
        <Background />
        <Loader>
          <Outlet />
        </Loader>
      </Loader>
    </>
  );
}
