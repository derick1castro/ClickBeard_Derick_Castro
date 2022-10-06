import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminAgenda from "./components/pages/admin/admin_agenda/AdminAgenda";
import AdminBarber from "./components/pages/admin/admin_barber.jsx/administrar_barbeiros/AdminBarber";
import AdminRegister from "./components/pages/admin/admin_auth/AdminRegister";
import Register from "./components/pages/user/user_auth/Register";
import Agenda from "./components/pages/user/user_agenda/administrar_agenda/Agenda";
import { UserProvider } from "./context/UserContext";
import { AdminProvider } from "./context/AdminContext";
import AdminLogin from "./components/pages/admin/admin_auth/AdminLogin";
import Login from "./components/pages/user/user_auth/Login";

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
