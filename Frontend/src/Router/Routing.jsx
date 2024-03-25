import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import Home from "../pages/Home";

const Routing = () => {
  return (
    <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={'About'} />
        </Routes>
    </BrowserRouter>
  )
}

export default Routing