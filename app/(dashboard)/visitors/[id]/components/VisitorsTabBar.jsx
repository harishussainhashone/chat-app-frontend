import {
  X,
  Plus,
  MessageSquare,
  Search,
  Phone,
  Bell,
  LayoutGrid,
  HelpCircle,
} from "lucide-react";

const tabs = [
  { label: "Organization (create)" },
  { label: "Claire" },
  { label: "Open", badge: true },
  { label: "Ticket #50" },
];

export default function VisitorsTabBar({
  activeTab = 2,
  onTabChange,
  onTabClose,
  onAddTab,
  onCloseHeader,
}) {
  return (
    <div className="w-full bg-gray-100">
      <div className="flex">
        <div className="flex-1">
          <div className="flex items-center h-10 px-0 bg-gray-50 border-gray-200">
            {/* active tab section */}
            <div className="flex items-center gap-24 h-10 px-3 bg-gray-100">
              <div className="leading-tight">
                <div className="flex items-center gap-6">
                  <MessageSquare size={16} className="text-gray-600" />
                  <div className="flex flex-col">
                    <div className="text-sm font-medium text-gray-900">
                      Claire
                    </div>
                    <div className="text-xs text-gray-500">response 2</div>
                  </div>
                </div>
              </div>
              <button
                onClick={onCloseHeader}
                className="ml-2 text-gray-500 hover:text-gray-800"
              >
                <X size={14} />
              </button>
            </div>

            <div className="flex justify-between flex-1">
              {/* new tab + button section */}
              <div className="flex items-center flex-row py-2 px-3 gap-2  justify-between">
                {/* Add button after tabs */}
                <Plus size={14} />
                <button onClick={onAddTab} className="   text-sm text-gray-700">
                  Add
                </button>
              </div>
              {/* right side section */}
              <div className="flex items-center justify-between  px-4 py-1 border-b border-gray-200">
                {/* Left side */}
                <div className="flex items-center gap-3">
                  <button className="p-2 rounded hover:bg-gray-200">
                    <Search size={16} className="text-gray-600" />
                  </button>

                  {/* Conversations pill */}
                  <div className="flex items-center gap-2 bg-gray-200 text-gray-700 text-sm px-3 py-1.5 rounded-md font-medium">
                    Conversations
                    <span className="bg-gray-300 text-xs px-2 py-0.5 rounded-full">
                      0
                    </span>
                  </div>
                </div>

                {/* Right side */}
                <div className="flex items-center gap-2">
                  <button className="p-2 rounded hover:bg-gray-200">
                    <MessageSquare size={16} className="text-gray-600" />
                  </button>

                  <button className="p-2 rounded hover:bg-gray-200">
                    <Phone size={16} className="text-gray-600" />
                  </button>

                  <button className="p-2 rounded hover:bg-gray-200">
                    <Bell size={16} className="text-gray-600" />
                  </button>

                  <button className="p-2 rounded hover:bg-gray-200">
                    <LayoutGrid size={16} className="text-gray-600" />
                  </button>

                  <button className="p-2 rounded hover:bg-gray-200">
                    <HelpCircle size={16} className="text-gray-600" />
                  </button>

                  {/* Avatar */}
                  <img
                    src="https://i.pravatar.cc/32"
                    alt="User"
                    className="h-8 w-8 rounded-full object-cover ml-1"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex bg-[#f3f4f6] my-2 mx-5 border-gray-200 items-end">
            {tabs.map((tab, idx) => {
              const isActive = activeTab === idx;
              const isFirst = idx === 0;
              const isLast = idx === tabs.length - 1;
              return (
                <button
                  key={tab.label}
                  onClick={() => onTabChange?.(idx)}
                  className={`flex items-center h-8 px-4 text-sm font-medium
          ${
            isActive
              ? "bg-white text-gray-900 border border-gray-300 border-b-white relative -mb-px"
              : "bg-[#e5e7eb] text-gray-600 hover:text-gray-900 hover:bg-gray-200 border border-transparent"
          }
          ${!isLast ? "border-r-0" : ""}
        `}
                  style={{
                    zIndex: isActive ? 10 : 1,
                  }}
                >
                  {tab.label}
                  {tab.badge && (
                    <span className="ml-2 px-2 py-0.5 text-xs rounded bg-[#ef4444] text-white font-semibold">
                      Open
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
