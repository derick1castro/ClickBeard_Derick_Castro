import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Usuários
import { UserProvider } from "./context/UserContext";
import Login from "./components/pages/user/user_auth/Login";
import Register from "./components/pages/user/user_auth/Register";
import Agenda from "./components/pages/user/user_agenda/administrar_agenda/Agenda";

// Administradores
import { AdminProvider } from "./context/AdminContext";
import AdminLogin from "./components/pages/admin/admin_auth/AdminLogin";
import AdminRegister from "./components/pages/admin/admin_auth/AdminRegister";
import AdminAgenda from "./components/pages/admin/admin_agenda/AdminAgenda";
import AdminBarber from "./components/pages/admin/admin_barber.jsx/administrar_barbeiros/AdminBarber";

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
            <Route path="/register-admin" element={<AdminRegister />} />
            <Route path="/agenda-admin" element={<AdminAgenda />} />
            <Route path="/barbeiros-admin" element={<AdminBarber />} />
          </Routes>
        </AdminProvider>
      </Router>
    </div>
  );
}
