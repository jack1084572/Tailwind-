import React from "react";
import Navbar from "./Navbar";
import JobsPage from "./pages/JobsPage"; // ✅ 保留

export default function App() {
  return (
    <>
      <Navbar />
      {/* 其他页面内容 */}
      <div className="p-6">
        <h1 className="text-3xl font-bold">欢迎来到 DaisySite</h1>
        <p>这里是主页内容</p>
            <div data-theme="light">
      <JobsPage /> {/* ✅ 使用了 */}
    </div>
      </div>
    </>
  );
}
