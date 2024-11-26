import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Flights from "./Pages/Flights";
import Explore from "./Pages/Explore";
import FlightsDetails from "./Pages/FlightsDetails";
import Hotels from "./Pages/Hotels";
import HotelDetails from "./Pages/HotelDetails";
import Footer from "./Components/Footer/Footer";
import Travel from "./Pages/Travel";
function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Flights />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/hotels" element={<Hotels />} />
          <Route path="/travel" element={<Travel />} />
          <Route path="/explore/:flightId" element={<FlightsDetails />} />
          <Route path="/hotels/:hotelId" element={<HotelDetails />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
