import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./components/pages/Auth/Login";
import Register from "./components/pages/Auth/Register/Register";
import Agenda from "./components/pages/User/Agenda";

export function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Agenda />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </div>
  );
}
