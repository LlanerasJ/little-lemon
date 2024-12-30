import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/NavBar/Nav";
import Homepage from "./pages/Homepage";
import Footer from "./components/Footer/Footer";
import Booking from "./pages/BookingPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/booking" element={<Booking />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
