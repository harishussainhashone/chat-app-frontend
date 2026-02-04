// app/visitors/[id]/components/VisitorRightSection.jsx
'use client';

import React, { useState } from 'react';
import { 
  HiPencil, 
  HiMail, 
  HiGlobe, 
  HiOfficeBuilding, 
  HiChevronDown, 
  HiChevronUp, 
  HiEye, 
  HiChatAlt2, 
  HiExclamation 
} from 'react-icons/hi'; // or use lucide-react equivalents if preferred

export default function VisitorRightSection() {
  const [pagesExpanded, setPagesExpanded] = useState(true);
  const [interactionsExpanded, setInteractionsExpanded] = useState(true);

  return (
    <aside className="p-4 text-sm space-y-5 overflow-y-auto">
      {/* User Profile Header */}
      <div className="space-y-3">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 font-medium">
              J
            </div>
            <div>
              <div className="font-medium text-gray-900 flex items-center gap-1.5">
                James
                <button className="text-gray-400 hover:text-gray-600">
                  <HiPencil size={14} />
                </button>
              </div>
              <div className="text-xs text-gray-500">davi***@gmail.com</div>
            </div>
          </div>
          <button className="text-blue-600 hover:text-blue-700 text-xs font-medium">
            Edit
          </button>
        </div>

        {/* Details */}
        <div className="space-y-2 pl-2 border-l-2 border-gray-200 ml-5">
          <div className="flex items-center gap-2 text-gray-700">
            <HiMail size={14} className="text-gray-500" />
            <span>david1881pinto@gmail.com</span>
          </div>
          <div className="flex items-center gap-2 text-gray-700">
            <HiOfficeBuilding size={14} className="text-gray-500" />
            <span>My desk</span>
          </div>
          <div className="flex items-center gap-2 text-gray-700">
            <HiGlobe size={14} className="text-gray-500" />
            <span>Dublin (United Kingdom)</span>
          </div>
          <div className="flex items-center gap-2 text-gray-700">
            <HiGlobe size={14} className="text-gray-500" />
            <span>English (English)</span>
          </div>
        </div>

        {/* Notes */}
        <div className="mt-3">
          <label className="block text-xs text-gray-600 mb-1">Add user notes</label>
          <textarea
            placeholder="Add user notes"
            className="w-full h-20 border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 resize-none"
          />
        </div>
      </div>

      {/* Warning Banner */}
      <div className="bg-yellow-50 border border-yellow-200 rounded-md p-3 text-xs">
        <div className="flex items-start gap-2">
          <HiExclamation className="text-yellow-600 mt-0.5" size={16} />
          <div>
            <strong className="text-yellow-800">Some contact details provided in this conversation don't match user profile</strong>
            <div className="text-yellow-700 mt-0.5">
              Name Mike
            </div>
          </div>
        </div>
      </div>

      {/* Pages viewed */}
      <div className="border border-gray-200 rounded-md overflow-hidden">
        <button
          onClick={() => setPagesExpanded(!pagesExpanded)}
          className="w-full flex items-center justify-between px-4 py-2.5 bg-gray-50 text-left font-medium text-gray-800"
        >
          <div className="flex items-center gap-2">
            <HiEye size={16} className="text-gray-600" />
            Pages viewed
          </div>
          {pagesExpanded ? <HiChevronUp size={16} /> : <HiChevronDown size={16} />}
        </button>

        {pagesExpanded && (
          <div className="px-4 py-3 space-y-3 text-xs border-t">
            <div className="flex items-start gap-2">
              <HiEye size={14} className="text-gray-400 mt-0.5" />
              <div>
                <div className="text-blue-600 hover:underline cursor-pointer">Z3nrpinto</div>
                <div className="text-gray-500">4 minutes ago</div>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <HiEye size={14} className="text-gray-400 mt-0.5" />
              <div>
                <div className="text-blue-600 hover:underline cursor-pointer">Z3nrpinto</div>
                <div className="text-gray-500">6 minutes ago</div>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <HiEye size={14} className="text-gray-400 mt-0.5" />
              <div>
                <div className="text-blue-600 hover:underline cursor-pointer">Página do Ricardo</div>
                <div className="text-gray-500">6 minutes ago</div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Interactions */}
      <div className="border border-gray-200 rounded-md overflow-hidden">
        <button
          onClick={() => setInteractionsExpanded(!interactionsExpanded)}
          className="w-full flex items-center justify-between px-4 py-2.5 bg-gray-50 text-left font-medium text-gray-800"
        >
          <div className="flex items-center gap-2">
            <HiChatAlt2 size={16} className="text-gray-600" />
            Interactions
          </div>
          {interactionsExpanded ? <HiChevronUp size={16} /> : <HiChevronDown size={16} />}
        </button>

        {interactionsExpanded && (
          <div className="px-4 py-3 space-y-3 text-xs border-t">
            <div className="flex items-start gap-2">
              <div className="w-2 h-2 mt-1.5 rounded-full bg-gray-400" />
              <div>
                <div className="text-gray-800">Name changed</div>
                <div className="text-gray-500">2 minutes ago · Zendesk</div>
              </div>
            </div>

            <div className="flex items-start gap-2 bg-blue-50 -mx-4 px-4 py-2 border-l-4 border-blue-500">
              <div className="w-2 h-2 mt-1.5 rounded-full bg-blue-600" />
              <div>
                <div className="font-medium text-blue-800">Conversation with David Pinto</div>
                <div className="text-gray-600">3 minutes ago</div>
              </div>
            </div>

            {/* You can add more timeline items here */}
          </div>
        )}
      </div>
    </aside>
  );
}