import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss"
import Dashboard from "./sections/dashboard";
import Events from "./pages/Events";
import Creators from "./pages/Creators";
import Buyers from "./pages/Buyers";
import Home from "./pages/Home";
import ConnectWallet from "./sections/ConnectWallet";
import BuyTickets from "./sections/BuyTickets";
import Footer from './sections/LandingPage/Footer'


function App() {
  return (

    <div className="App">
      
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="events" element={<Events />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="creators" element={<Creators />} />
          <Route path="buyers" element={<Buyers />} />
          <Route path="connect-wallet" element={<ConnectWallet />} />
          <Route path="buy-tickets" element={<BuyTickets />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
