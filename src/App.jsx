import { Route, Routes } from "react-router-dom"
import Contact from "./components/Contact"
import Navbar from "./components/Navbar"
import HomeRoute from "./Routes/HomeRoute"
import ContactRoute from "./Routes/ContactRoute"
import Footer from "./components/Footer"
import About from "./components/About"
import Work from "./components/Work"

function App() {

  return (
    <>
      <Navbar/>

      <Routes>
        <Route path="/" element={<HomeRoute/>}/>
        <Route path="/contact" element={<ContactRoute/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/work" element={<Work/>}/>
      </Routes>

      <Footer/>
    </>
  )
}

export default App
