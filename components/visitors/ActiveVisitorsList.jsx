'use client';

import { useState } from 'react';
import { HiChevronUp, HiChevronDown, HiComputerDesktop, HiDevicePhoneMobile } from 'react-icons/hi2';

export default function ActiveVisitorsList() {
  const [isExpanded, setIsExpanded] = useState(true);

  // Sample active visitor data
  const visitors = [
    {
      id: 1,
      name: 'Ricardo Pinto',
      tags: ['Z3nrpinto'],
      online: '4 mins',
      icons: [
        { component: HiComputerDesktop, color: 'text-gray-400' },
        { component: HiDevicePhoneMobile, color: 'text-gray-400' }
      ],
      viewing: 'Z3nrpinto',
      viewingNumber: 1,
      avatar: 'bg-cyan-400'
    },
    {
      id: 2,
      name: '#68981916',
      tags: ['Z3nrpinto'],
      online: '3 mins',
      icons: [
        { component: HiComputerDesktop, color: 'text-gray-400' },
        { component: HiDevicePhoneMobile, color: 'text-gray-400' }
      ],
      viewing: 'Z3nrpinto',
      viewingNumber: 2,
      avatar: 'bg-cyan-400'
    },
    {
      id: 3,
      name: 'Cindy',
      tags: ['Z3nrpinto', 'Mondocam'],
      online: '2 mins',
      icons: [
        { component: HiComputerDesktop, color: 'text-gray-400' },
        { component: HiDevicePhoneMobile, color: 'text-gray-400' }
      ],
      viewing: 'Mondocam',
      viewingNumber: 2,
      avatar: 'bg-cyan-400'
    }
  ];

  return (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden mt-4">
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
          Active website visitors
        </button>
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
                  Viewing
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {visitors.map((visitor) => (
                <tr key={visitor.id} className="hover:bg-gray-50 transition-colors">
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
                        <span className="text-lg">🇬🇧</span>
                        {visitor.icons.map((icon, idx) => {
                          const IconComponent = icon.component;
                          return <IconComponent key={idx} className={`w-4 h-4 ${icon.color}`} />;
                        })}
                      </div>
                      <span className="text-sm text-gray-600">{visitor.online}</span>
                    </div>
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
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
