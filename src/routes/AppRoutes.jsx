import { Routes, Route } from "react-router-dom"
import { Home, Play } from "../pages"

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/play" element={<Play />} />
            {/* <Route path="/mode" element={<Home />} /> */}
        </Routes>
    )
}