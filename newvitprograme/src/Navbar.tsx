import React from "react";

export default function GenericHeader() {
  return (
    <header className="bg-gray-100 shadow sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-14">
        {/* 左侧 Logo 和 搜索 */}
        <div className="flex items-center space-x-4">
          {/* 通用 Logo */}
          <div className="flex-shrink-0 text-xl font-bold text-gray-700">
            MyApp
          </div>

          {/* 搜索框 */}
          <div className="relative">
            <input
              type="search"
              placeholder="搜索内容"
              className="border border-gray-300 rounded-md pl-8 pr-3 py-1 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            />
            <svg
              className="w-4 h-4 text-gray-400 absolute left-2 top-1/2 transform -translate-y-1/2"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <circle cx="11" cy="11" r="7" />
              <line x1="16.65" y1="16.65" x2="21" y2="21" />
            </svg>
          </div>
        </div>

        {/* 中间导航菜单 */}
        <nav className="hidden md:flex space-x-6">
          {["首页", "人脉", "职位", "消息", "通知", "我"].map((item, index) => (
            <a
              key={index}
              href="#"
              className="text-gray-600 hover:text-indigo-600 text-sm font-medium"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* 右侧操作按钮 */}
        <div className="hidden md:flex items-center space-x-4">
          <button className="text-sm text-gray-600 hover:text-indigo-600">
            商务
          </button>
          <button className="border border-gray-300 rounded px-3 py-1 text-sm hover:border-indigo-600 hover:text-indigo-600">
            免费试用
          </button>
        </div>
      </div>
    </header>
  );
}
