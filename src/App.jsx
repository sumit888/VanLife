import Home from "./assets/pages/Home"
import About from "./assets/pages/About"
import Vans from "./assets/pages/Vans"
import VanDetail from "./assets/pages/Vandetail"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import "./server"

export default function App() {
  return (
    <BrowserRouter>
      <header>
        <Link className="site-logo" to="/">#VanLife</Link>
        <nav>
          <Link to="/about">About</Link>
          <Link to="/vans">Vans</Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/vans" element={<Vans />} />
        <Route path="/vans/:id" element={<VanDetail />} />
      </Routes>
    </BrowserRouter>
  )
}