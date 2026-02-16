"use client";

import { useState } from "react";
import { HiChevronUp, HiChevronDown, HiComputerDesktop, HiDevicePhoneMobile } from "react-icons/hi2";

export default function ActiveChatsList() {
  const [isExpanded, setIsExpanded] = useState(true);

  const chats = [
    {
      id: 1,
      name: "Ricardo Pinto",
      tags: ["Z3nrpinto"],
      online: "4 mins",
      icons: [
        { component: HiComputerDesktop, color: "text-gray-400" },
        { component: HiDevicePhoneMobile, color: "text-gray-400" },
      ],
      viewing: "Z3nrpinto",
      viewingNumber: 1,
      avatar: "bg-cyan-400",
    },
    {
      id: 2,
      name: "#68981916",
      tags: ["Z3nrpinto"],
      online: "3 mins",
      icons: [
        { component: HiComputerDesktop, color: "text-gray-400" },
        { component: HiDevicePhoneMobile, color: "text-gray-400" },
      ],
      viewing: "Z3nrpinto",
      viewingNumber: 2,
      avatar: "bg-cyan-400",
    },
    {
      id: 3,
      name: "Cindy",
      tags: ["Z3nrpinto", "Mondocam"],
      online: "2 mins",
      icons: [
        { component: HiComputerDesktop, color: "text-gray-400" },
        { component: HiDevicePhoneMobile, color: "text-gray-400" },
      ],
      viewing: "Mondocam",
      viewingNumber: 2,
      avatar: "bg-cyan-400",
    },
  ];

  return (
    <div className="bg-surface border border-gray-200 rounded-lg overflow-hidden mt-4">
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
          Active chats
        </button>
      </div>

      {isExpanded && (
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                  Customer
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
              {chats.map((chat) => (
                <tr key={chat.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-4 py-4">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-8 h-8 ${chat.avatar} rounded flex items-center justify-center text-white font-medium text-sm`}
                      >
                        {chat.name[0]}
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">
                          {chat.name}
                        </div>
                        <div className="flex gap-2 mt-1">
                          {chat.tags.map((tag) => (
                            <span
                              key={tag}
                              className="inline-block px-2 py-0.5 bg-gray-200 text-gray-700 text-xs rounded"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </td>

                  <td className="px-4 py-4">
                    <div className="flex items-center gap-2">
                      <div className="flex gap-1">
                        {chat.icons.map((icon, idx) => {
                          const IconComponent = icon.component;
                          return (
                            <IconComponent
                              key={`${chat.id}-${idx}`}
                              className={`w-4 h-4 ${icon.color}`}
                            />
                          );
                        })}
                      </div>
                      <span className="text-sm text-gray-600">
                        {chat.online}
                      </span>
                    </div>
                  </td>

                  <td className="px-4 py-4">
                    <div className="flex items-center gap-2">
                      <span className="inline-flex items-center justify-center w-6 h-6 bg-gray-200 text-gray-700 text-xs rounded">
                        {chat.viewingNumber}
                      </span>
                      <span className="text-sm text-gray-900">
                        {chat.viewing}
                      </span>
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
