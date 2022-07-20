import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./kiosk/routes/Home";
import Reading from "./kiosk/routes/Reading";
import Login from "./kiosk/routes/Login";
import Join from "./kiosk/routes/Join";
import Success from "./kiosk/routes/Success";
import THome from "./tablet/routes/THome";
import Clock from "./kiosk/components/Clock";
import Admin from "./kiosk/routes/Admin";


function App() {
  return (  <BrowserRouter>
    <Clock />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/reading" element={<Reading />} />
      <Route path="/login" element={<Login />} />
      <Route path="/join" element={<Join />} />
      <Route path="/success" element={<Success />} />
      <Route path="/thome/:seatNo" element={<THome />} />
      <Route path="/admin" element={<Admin/>} />
    </Routes>
  </BrowserRouter>);
}

export default App;
