import { Routes, Route } from "react-router-dom"
import { Home, Play } from "../pages"
import Layout from "../layout/Layout";

export default function AppRoutes() {
    return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/play" element={<Play />} />
          <Route path="/mode" element={<Home />} />
        </Route>
      </Routes>
    );
}