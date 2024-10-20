import Home from "./assets/pages/Home"
import About from "./assets/pages/About"
import Vans from "./assets/pages/vans/Vans"
import VanDetail from "./assets/pages/vans/VanDetail"
import Dashboard from "./assets/host/Dashboard"
import Income from "./assets/host/Income"
import Reviews from "./assets/host/Reviews"
import HostVans from "./assets/host/HostVans"
import HostVanDetail from "./assets/host/HostVanDetail"
import HostVanInfo from "./assets/host/HostVanInfo"
import HostVanPhotos from "./assets/host/HostVanPhotos"
import HostVanPricing from "./assets/host/HostVanPricing"
import NotFound from "./assets/pages/NotFound"
import Login from "./assets/pages/Login"
import AuthRequired from "./assets/components/AuthRequired"

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

          <Route
            path="login"
            element={<Login />}
          />

          <Route element={<AuthRequired />}>
            <Route path="host" element={<HostLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="income" element={<Income />} />
              <Route path="reviews" element={<Reviews />} />
              <Route path="vans" element={<HostVans />} />
              <Route path="vans/:id" element={<HostVanDetail />}>
                <Route index element={<HostVanInfo />} />
                <Route path="pricing" element={<HostVanPricing />} />
                <Route path="photos" element={<HostVanPhotos />} />
              </Route>
            </Route>
          </Route>
          <Route path="*" element={<NotFound />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}