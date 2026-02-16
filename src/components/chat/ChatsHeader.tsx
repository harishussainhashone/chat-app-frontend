"use client";

import { useState } from "react";
import { HiMagnifyingGlass, HiXMark } from "react-icons/hi2";

export default function ChatsHeader() {
  const [viewMode, setViewMode] = useState("List");
  const [groupBy, setGroupBy] = useState("Group by Activity");
  const [showBanner, setShowBanner] = useState(true);

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-4">
          <div className="flex bg-gray-100 rounded">
            <button
              onClick={() => setViewMode("List")}
              className={`px-4 py-2 text-sm font-medium rounded transition-colors ${
                viewMode === "List"
                  ? "bg-surface text-gray-900 shadow-sm"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              List
            </button>
            <button
              onClick={() => setViewMode("Visual")}
              className={`px-4 py-2 text-sm font-medium rounded transition-colors ${
                viewMode === "Visual"
                  ? "bg-surface text-gray-900 shadow-sm"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Visual
            </button>
          </div>

          <div className="relative">
            <select
              value={groupBy}
              onChange={(e) => setGroupBy(e.target.value)}
              className="appearance-none bg-surface border border-gray-300 rounded px-4 py-2 pr-10 text-sm text-gray-700 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent cursor-pointer"
            >
              <option>Group by Activity</option>
              <option>Group by Location</option>
              <option>Group by Department</option>
              <option>Group by Source</option>
            </select>
            <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <span className="text-sm text-gray-600">Total:</span>

          <div className="relative">
            <HiMagnifyingGlass className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search"
              className="pl-10 pr-4 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-64"
            />
          </div>
        </div>
      </div>

      {showBanner && (
        <div className="bg-green-100 border border-green-200 rounded px-4 py-3 flex items-center justify-between mb-4">
          <p className="text-sm text-green-800">
            Your account is on the Agent Workspace. You can see incoming and
            currently served chats on this page.
          </p>
          <button
            onClick={() => setShowBanner(false)}
            className="text-green-600 hover:text-green-800 transition-colors"
          >
            <HiXMark className="w-5 h-5" />
          </button>
        </div>
      )}
    </div>
  );
}
