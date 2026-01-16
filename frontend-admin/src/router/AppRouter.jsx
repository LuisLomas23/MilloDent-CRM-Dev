import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import ClinicList from "../pages/Clinics/ClinicList";
import CreateClinic from "../pages/Clinics/CreateClinic";
import CreateDoctor from "../pages/Doctors/CreateDoctor";
import AdminLayout from "../layouts/AdminLayout";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route element={<AdminLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/clinics" element={<ClinicList />} />
          <Route path="/clinics/new" element={<CreateClinic />} />
          <Route path="/doctors/new" element={<CreateDoctor />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
