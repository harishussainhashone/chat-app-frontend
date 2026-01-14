'use client';

import { useState } from 'react';
import { visitors } from '../../data/visitors';
import { useRouter } from 'next/navigation';
import { HiChevronUp, HiChevronDown, HiMagnifyingGlass, HiComputerDesktop, HiDevicePhoneMobile } from 'react-icons/hi2';

export default function VisitorsList() {
  const [isExpanded, setIsExpanded] = useState(true);
  const router = useRouter();


  return (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
      {/* Section Header */}
      <div className="bg-gray-50 border-b border-gray-200 px-4 py-3 flex items-center justify-between">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-gray-900"
        >
          {isExpanded ? (
            <HiChevronUp className="w-4 h-4" />
          ) : (
            <HiChevronDown className="w-4 h-4" />
          )}
          Currently served
        </button>
        <span className="text-sm text-gray-600">Visitors: {visitors.length}</span>
      </div>

      {/* Table */}
      {isExpanded && (
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                  Visitor
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                  Online
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                  Served by
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                  Viewing
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                  Referrer
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                  Visits
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                  Chats
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {visitors.map((visitor) => (
                <tr
                  key={visitor.id}
                  className="hover:bg-gray-100 cursor-pointer transition-colors"
                  onClick={() => router.push(`/visitors/${visitor.id}`)}
                >
                  {/* Visitor */}
                  <td className="px-4 py-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 ${visitor.avatar} rounded flex items-center justify-center text-white font-medium text-sm`}>
                        {visitor.name[0]}
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">{visitor.name}</div>
                        <div className="flex gap-2 mt-1">
                          {visitor.tags.map((tag, idx) => (
                            <span key={idx} className="inline-block px-2 py-0.5 bg-gray-200 text-gray-700 text-xs rounded">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </td>

                  {/* Online */}
                  <td className="px-4 py-4">
                    <div className="flex items-center gap-2">
                      <div className="flex gap-1">
                        {visitor.icons.map((icon, idx) => {
                          const IconComponent = icon.component;
                          return <IconComponent key={idx} className={`w-4 h-4 ${icon.color}`} />;
                        })}
                      </div>
                      <span className="text-sm text-gray-600">{visitor.online}</span>
                    </div>
                  </td>

                  {/* Served by */}
                  <td className="px-4 py-4">
                    <span className="text-sm text-gray-900">{visitor.servedBy}</span>
                  </td>

                  {/* Viewing */}
                  <td className="px-4 py-4">
                    <div className="flex items-center gap-2">
                      <span className="inline-flex items-center justify-center w-6 h-6 bg-gray-200 text-gray-700 text-xs rounded">
                        {visitor.viewingNumber}
                      </span>
                      <span className="text-sm text-gray-900">{visitor.viewing}</span>
                    </div>
                  </td>

                  {/* Referrer */}
                  <td className="px-4 py-4">
                    <div className="flex items-center gap-2">
                      <HiMagnifyingGlass className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-600">{visitor.referrer}</span>
                    </div>
                  </td>

                  {/* Visits */}
                  <td className="px-4 py-4">
                    <span className="text-sm text-gray-900">{visitor.visits}</span>
                  </td>

                  {/* Chats */}
                  <td className="px-4 py-4">
                    <span className="text-sm text-gray-900">{visitor.chats}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
