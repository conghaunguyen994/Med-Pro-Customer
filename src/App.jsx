import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import AppLayout from "./layouts/AppLayout";
import HomePage from "./pages/HomePage";
import DepartmentPage from "./pages/DepartmentPage";
import DoctorPage from "./pages/DoctorPage";

export default function App() {
  return (
    <Router>
      <div>
        <AppLayout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/chuyen-khoa/:name" element={<DepartmentPage />} />
            <Route path="/bac-si/:name" element={<DoctorPage />} />
          </Routes>
        </AppLayout>
      </div>
    </Router>
  );
}
