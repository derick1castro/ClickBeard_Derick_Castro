import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./components/pages/Auth/Login";
import Register from "./components/pages/Auth/Register/Register";
import Agenda from "./components/pages/User/Agenda";
import Message from "./components/UI/Message/Message";
import Navbar from "./components/UI/Navbar";

import { UserProvider } from "./context/UserContext";

export function App() {
  return (
    <div>
      <Router>
        <UserProvider>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/agenda" element={<Agenda />} />
          </Routes>
        </UserProvider>
      </Router>
    </div>
  );
}
