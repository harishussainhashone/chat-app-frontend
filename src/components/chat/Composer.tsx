export default function Composer() {
  return (
    <div className="flex items-center gap-2 border-t border-gray-200 bg-surface px-4 py-3">
      <input
        type="text"
        placeholder="Type a message..."
        className="flex-1 border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button className="bg-blue-600 text-white text-sm font-medium px-4 py-2 rounded-md hover:bg-blue-700">
        Send
      </button>
    </div>
  );
}
