import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminAgenda from "./components/pages/Admin/AdminAgenda/AdminAgenda";
import AdminBarber from "./components/pages/Admin/AdminBarber.jsx/AdminBarber";
import AdminRegister from "./components/pages/Admin/AdminAuth/AdminRegister";
import Login from "./components/pages/Auth/Login";
import Register from "./components/pages/Auth/UserRegister/Register";
import Agenda from "./components/pages/User/Agenda";
import { UserProvider } from "./context/UserContext";
import { AdminProvider } from "./context/AdminContext";
import AdminLogin from "./components/pages/Admin/AdminAuth/AdminLogin";

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
        <AdminProvider>
          <Routes>
            <Route path="/login-admin" element={<AdminLogin />} />
            <Route path="/agenda-admin" element={<AdminAgenda />} />
            <Route path="/barbeiros-admin" element={<AdminBarber />} />
            <Route path="/register-admin" element={<AdminRegister />} />
          </Routes>
        </AdminProvider>
      </Router>
    </div>
  );
}
