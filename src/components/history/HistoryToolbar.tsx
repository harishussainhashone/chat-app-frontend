import { HiChevronDown, HiChevronLeft, HiChevronRight } from "react-icons/hi2";

type HistoryToolbarProps = {
  searchTerm: string;
  onSearchTermChange: (value: string) => void;
  onClearSearch: () => void;
  unreadCount: number;
};

export default function HistoryToolbar({
  searchTerm,
  onSearchTermChange,
  onClearSearch,
  unreadCount,
}: HistoryToolbarProps) {
  return (
    <div className="border-b border-gray-200 bg-surface px-4 py-3 md:px-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-gray-300 bg-surface text-gray-600 transition-colors hover:bg-gray-50"
            aria-label="Filter options"
          >
            <HiChevronDown className="h-5 w-5" />
          </button>

          <input
            value={searchTerm}
            onChange={(event) => onSearchTermChange(event.target.value)}
            placeholder="Search"
            className="h-10 w-[220px] rounded-md border border-gray-300 bg-surface px-3 text-sm text-gray-800 outline-none transition focus:border-gray-400"
          />

          <button
            type="button"
            onClick={onClearSearch}
            className="h-10 rounded-md border border-gray-300 bg-surface px-4 text-sm font-semibold text-gray-900 transition-colors hover:bg-gray-50"
          >
            Clear search
          </button>
        </div>

        <div className="ml-auto flex items-center gap-3">
          <p className="text-sm text-gray-700">{unreadCount} unread</p>

          <div className="inline-flex items-center overflow-hidden rounded-md border border-gray-300">
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center text-gray-600 transition-colors hover:bg-gray-50"
              aria-label="Previous page"
            >
              <HiChevronLeft className="h-5 w-5" />
            </button>
            <span className="border-x border-gray-300 px-4 py-2 text-sm font-semibold text-gray-900">
              Page 1 of 1,890
            </span>
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center text-gray-600 transition-colors hover:bg-gray-50"
              aria-label="Next page"
            >
              <HiChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
