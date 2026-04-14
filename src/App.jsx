import { BrowserRouter, Routes, Route } from "react-router-dom"

import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import WhatsAppFloat from "./components/WhatsAppFloat"
import ScrollTop from "./components/ScrollTop"

import Home from "./pages/Home"
import Protein from "./pages/Protein"
import Fat from "./pages/Fat"
import Exercise from "./pages/Exercise"
import Tips from "./pages/Tips"
import References from "./pages/References"

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/protein" element={<Protein />} />
        <Route path="/fat" element={<Fat />} />
        <Route path="/exercise" element={<Exercise />} />
        <Route path="/tips" element={<Tips />} />
        <Route path="/references" element={<References />} />
      </Routes>

      <WhatsAppFloat />

      <ScrollTop />

      <Footer />

    </BrowserRouter>
  )
}

export default App