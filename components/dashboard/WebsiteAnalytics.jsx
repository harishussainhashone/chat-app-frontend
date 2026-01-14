'use client';

import { useState } from 'react';

export default function WebsiteAnalytics() {
  const [activeTab, setActiveTab] = useState('Hourly');
  const tabs = ['Hourly', 'Daily', 'Weekly', 'Monthly'];

  const metrics = [
    { label: 'Page views', color: 'bg-purple-500', checked: true },
    { label: 'Total visits', color: 'bg-blue-500', checked: true },
    { label: 'Unique visitors', color: 'bg-cyan-400', checked: true },
    { label: 'Chats', color: 'bg-yellow-400', checked: true }
  ];

  return (
    <div className="mb-6 md:mb-8 bg-white border border-gray-200 rounded-lg p-4 md:p-6">
      {/* Header with Tabs */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <h2 className="text-base md:text-lg font-semibold text-gray-900">Website analytics</h2>
        <div className="flex gap-1 md:gap-2 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-3 md:px-4 py-1.5 md:py-2 text-xs md:text-sm font-medium rounded transition-colors whitespace-nowrap ${
                activeTab === tab
                  ? 'bg-gray-200 text-gray-900'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Chart Area */}
      <div className="relative h-48 md:h-64 mb-6">
        {/* Y-axis placeholder */}
        <div className="absolute left-0 top-0 bottom-0 w-8 md:w-12 flex flex-col justify-between text-xs text-gray-500">
          <span>100</span>
          <span>75</span>
          <span>50</span>
          <span>25</span>
          <span>0</span>
        </div>

        {/* Chart container */}
        <div className="ml-8 md:ml-12 h-full relative border-l border-b border-gray-200">
          {/* Grid lines */}
          <div className="absolute inset-0 flex flex-col justify-between">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="border-t border-gray-100"></div>
            ))}
          </div>

          {/* Line chart simulation */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 800 250" preserveAspectRatio="none">
            {/* Green line (example data) */}
            <polyline
              points="0,150 50,145 100,148 150,142 200,140 250,138 300,135 350,133 400,130 450,128 500,125 550,123 600,120 650,118 700,115 750,113 800,110"
              fill="none"
              stroke="#22c55e"
              strokeWidth="2"
            />
          </svg>

          {/* X-axis labels */}
          <div className="absolute -bottom-6 left-0 right-0 flex justify-between text-xs text-gray-500">
            <span className="hidden sm:inline">9:00 PM</span>
            <span className="sm:hidden">9PM</span>
            <span className="hidden md:inline">1:00 AM</span>
            <span className="hidden sm:inline md:hidden">1AM</span>
            <span className="hidden md:inline">5:00 AM</span>
            <span className="sm:hidden">5AM</span>
            <span className="hidden md:inline">9:00 AM</span>
            <span className="hidden sm:inline md:hidden">9AM</span>
            <span className="hidden md:inline">1:00 PM</span>
            <span className="sm:hidden">1PM</span>
            <span className="hidden md:inline">5:00 PM</span>
            <span className="hidden sm:inline md:hidden">5PM</span>
          </div>
        </div>
      </div>

      {/* Legend */}
      <div className="flex flex-wrap items-center justify-center gap-3 md:gap-6 pt-4">
        {metrics.map((metric, index) => (
          <label key={index} className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              defaultChecked={metric.checked}
              className="w-3 h-3 md:w-4 md:h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
            />
            <div className={`w-2 h-2 rounded-full ${metric.color}`}></div>
            <span className="text-xs md:text-sm text-gray-700">{metric.label}</span>
          </label>
        ))}
      </div>
    </div>
  );
}
