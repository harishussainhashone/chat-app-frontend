import type { HistoryRecord } from "@/features/history/history.logic";

type HistoryTableProps = {
  records: HistoryRecord[];
  selectedRecordId: string | null;
  onSelectRecord: (id: string) => void;
  showMessagesColumn: boolean;
  isDetailsOpen: boolean;
};

export default function HistoryTable({
  records,
  selectedRecordId,
  onSelectRecord,
  showMessagesColumn,
  isDetailsOpen,
}: HistoryTableProps) {
  const defaultMessagePreview =
    "Hello there How are you? Are you looking Mobile Application Services?";

  return (
    <div
      className={`min-h-0 flex-1 ${
        isDetailsOpen ? "border-b border-gray-200 xl:w-[40%] xl:border-b-0 xl:border-r" : ""
      }`}
    >
      <div className="h-full overflow-auto">
        <table
          className={`w-full text-sm ${showMessagesColumn ? "min-w-[980px]" : "min-w-[620px]"}`}
        >
          <thead className="sticky top-0 z-10 bg-gray-50 text-gray-700">
            <tr>
              <th className="px-4 py-3 text-left font-semibold">Name</th>
              <th className="px-4 py-3 text-left font-semibold">Agent</th>
              <th className="px-4 py-3 text-left font-semibold">Time</th>
              <th className="px-4 py-3 text-left font-semibold">Rating</th>
              {showMessagesColumn && (
                <th className="px-4 py-3 text-left font-semibold">Messages</th>
              )}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-surface">
            {records.length === 0 && (
              <tr>
                <td
                  colSpan={showMessagesColumn ? 5 : 4}
                  className="px-4 py-8 text-center text-gray-500"
                >
                  No history records found.
                </td>
              </tr>
            )}
            {records.map((record) => {
              const isSelected = selectedRecordId === record.id;

              return (
                <tr
                  key={record.id}
                  onClick={() => onSelectRecord(record.id)}
                  className={`cursor-pointer transition-colors ${
                    isSelected ? "bg-gray-100" : "hover:bg-gray-50"
                  }`}
                >
                  <td className="px-4 py-3 text-gray-900">{record.name}</td>
                  <td className="px-4 py-3 text-gray-800">{record.agent}</td>
                  <td className="px-4 py-3 text-gray-700">{record.time}</td>
                  <td className="px-4 py-3 text-gray-700">{record.rating}</td>
                  {showMessagesColumn && (
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2 text-gray-700">
                        <span className="inline-flex min-w-5 items-center justify-center rounded bg-gray-100 px-1.5 py-0.5 text-xs font-semibold text-gray-600">
                          {record.messageCount ?? 3}
                        </span>
                        <span className="max-w-[620px] truncate text-sm text-gray-600">
                          {record.messagePreview ?? defaultMessagePreview}
                        </span>
                      </div>
                    </td>
                  )}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
