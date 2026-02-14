import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Booking from "./pages/Booking";
import Navbar from "./components/Navbar";

import Payment from "./pages/Payment";

function App() {
  return (
    <BrowserRouter>
     <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/booking/:id" element={<Booking />} />
        <Route path="/payment" element={<Payment />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
