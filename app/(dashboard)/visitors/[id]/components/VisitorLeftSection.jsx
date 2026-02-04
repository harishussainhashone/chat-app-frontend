// components/VisitorLeftSection.tsx
'use client';

import React from 'react';
import { UserCircle, Users, Tag, ChevronDown } from 'lucide-react'; // ← install: npm install lucide-react

export default function VisitorLeftSection() {
  return (
    <aside className="p-4 text-sm">
      {/* Also on this ticket */}
      <div className="mb-6">
        <h3 className="font-medium text-gray-800 mb-2 flex items-center gap-2">
          Also on this ticket
          <UserCircle size={18} className="text-gray-500" />
        </h3>

        {/* Brand */}
        <div className="mb-4">
          <label className="block text-gray-600 text-xs mb-1">Brand</label>
          <div className="flex items-center gap-2 bg-gray-50 border border-gray-300 rounded px-3 py-1.5">
            <span className="text-gray-800">Zendesk Support</span>
            <ChevronDown size={16} className="text-gray-500 ml-auto" />
          </div>
        </div>

        {/* Requester */}
        <div className="mb-4">
          <label className="block text-gray-600 text-xs mb-1">Requester</label>
          <div className="flex items-center gap-2 bg-gray-50 border border-gray-300 rounded px-3 py-1.5">
            <UserCircle size={18} className="text-gray-600" />
            <span className="text-gray-800">James</span>
          </div>
        </div>

        {/* Assignee */}
        <div className="mb-4">
          <label className="block text-gray-600 text-xs mb-1">
            Assignee <span className="text-red-500">*</span>
          </label>
          <div className="flex items-center gap-2 bg-gray-50 border border-gray-300 rounded px-3 py-1.5">
            <span className="text-gray-800">Support/Cindy</span>
            <ChevronDown size={16} className="text-gray-500 ml-auto" />
          </div>
        </div>

        {/* Followers */}
        <div className="mb-4">
          <label className="block text-gray-600 text-xs mb-1 flex items-center gap-1">
            Followers
            <span className="text-gray-400 cursor-help">ⓘ</span>
          </label>
          <div className="bg-gray-50 border border-gray-300 rounded px-3 py-1.5 min-h-[34px] flex items-center">
            <button className="text-blue-600 hover:underline text-xs">follow</button>
          </div>
        </div>

        {/* Sharing */}
        <div className="mb-5">
          <label className="block text-gray-600 text-xs mb-1">Sharing</label>
          <div className="bg-gray-50 border border-gray-300 rounded px-3 py-1.5 min-h-[34px]">
            <span className="text-gray-500 text-xs">-</span>
          </div>
        </div>
      </div>

      {/* Form & Tags section */}
      <div className="space-y-4">
        {/* Form */}
        <div>
          <label className="block text-gray-600 text-xs mb-1">Form</label>
          <div className="flex items-center gap-2 bg-gray-50 border border-gray-300 rounded px-3 py-1.5">
            <span className="text-gray-800">General question</span>
            <ChevronDown size={16} className="text-gray-500 ml-auto" />
          </div>
        </div>

        {/* Tags */}
        <div>
          <label className="block text-gray-600 text-xs mb-1">Tags</label>
          <div className="flex flex-wrap gap-2 bg-gray-50 border border-gray-300 rounded p-2 min-h-[34px]">
            <span className="bg-blue-100 text-blue-800 text-xs px-2 py-0.5 rounded-full">
              z3nrpinto ×
            </span>
            <span className="bg-blue-100 text-blue-800 text-xs px-2 py-0.5 rounded-full">
              zopim_chat ×
            </span>
          </div>
        </div>

        {/* Issue type */}
        <div>
          <label className="block text-gray-600 text-xs mb-1">Issue type</label>
          <div className="bg-gray-50 border border-gray-300 rounded px-3 py-1.5 min-h-[34px] flex items-center">
            <span className="text-gray-500 text-xs">-</span>
            <ChevronDown size={16} className="text-gray-500 ml-auto" />
          </div>
        </div>

        {/* Type */}
        <div>
          <label className="block text-gray-600 text-xs mb-1">Type</label>
          <div className="bg-gray-50 border border-gray-300 rounded px-3 py-1.5 min-h-[34px] flex items-center">
            <span className="text-gray-500 text-xs">-</span>
            <ChevronDown size={16} className="text-gray-500 ml-auto" />
          </div>
        </div>
      </div>
    </aside>
  );
}