'use client';

import { HiDocument } from 'react-icons/hi2';

export default function RightSidebar() {
  const updates = [
    { date: 'Apr 28', title: 'Changes to Chat Widget...' },
    { date: 'Apr 28', title: 'New: Current day data la...' },
    { date: 'Feb 19', title: 'Support for Chat apps i...' },
    { date: 'Apr 28', title: 'Integrate custom bots, ...' },
    { date: 'Apr 03', title: 'New: Current day data la...' },
  ];

  return (
    <aside className="w-full md:w-72 bg-surface md:border-l border-t md:border-t-0 border-gray-200 p-4 md:p-6">
      {/* Latest Updates */}
      <div className="mb-8">
        <h3 className="text-sm font-semibold text-gray-900 mb-4">Latest  Chat updates</h3>
        <div className="space-y-3">
          {updates.map((update, index) => (
            <div key={index} className="flex items-start gap-3 text-xs">
              <HiDocument className="text-gray-400 mt-0.5 flex-shrink-0" />
              <div>
                <span className="font-semibold text-gray-900">{update.date}</span>
                <span className="text-gray-600"> - {update.title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Organize Section */}
      <div className="mb-8 border border-gray-200 rounded-lg p-4">
        <div className="flex items-center justify-center mb-4">
          <div className="w-20 h-20 bg-gray-100 rounded-lg flex items-center justify-center">
            <svg className="w-12 h-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
            </svg>
          </div>
        </div>
        <h4 className="text-sm font-semibold text-gray-900 text-center mb-2">
          Organize your conversations with tags
        </h4>
        <p className="text-xs text-gray-600 text-center mb-4">
          Understand the types of problems that your customers are facing
        </p>
        <button className="w-full py-2 px-4 border border-gray-300 rounded text-xs font-medium text-gray-700 hover:bg-gray-50 transition-colors">
          Learn more
        </button>
      </div>

      {/* Recent Activity */}
      <div>
        <h3 className="text-sm font-semibold text-gray-900 mb-3">Recent website activity</h3>
        <div className="flex items-center gap-2 text-sm">
          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          <span className="text-gray-700">You are now <span className="font-semibold">Online</span></span>
        </div>
      </div>
    </aside>
  );
}
