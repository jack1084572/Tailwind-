import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import JobsPage from "./pages/JobsPage";
import LoginPage from "./pages/login/LoginPage";
import Dashboar from "./pages/login/Dashboar"; // ✅ 正确路径

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="p-6">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <h1 className="text-3xl font-bold">欢迎来到 DaisySite</h1>
                <JobsPage />
              </>
            }
          />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/login/Dashboar" element={<Dashboar />} /> {/* 对应路径 */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}
