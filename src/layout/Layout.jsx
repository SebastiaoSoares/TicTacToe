import { Outlet } from "react-router-dom";
import { Background } from "../components";

export default function Layout() {
    return (
        <>
            <Background />
            <Outlet />
        </>
    )
}