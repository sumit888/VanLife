import Home from "./assets/pages/vans/Home"
import About from "./assets/pages/vans/About"
import Vans from "./assets/pages/vans/Vans"
import VanDetail from "./assets/pages/vans/VanDetail"
import Dashboard from "./assets/host/Dashboard"
import Income from "./assets/host/Income"
import Reviews from "./assets/host/Reviews"

import Layout from "./assets/components/Layout"
import HostLayout from "./assets/components/HostLayout"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import "./server"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/vans" element={<Vans />} />
          <Route path="/vans/:id" element={<VanDetail />} />

          <Route path="host" element={<HostLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="income" element={<Income />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}