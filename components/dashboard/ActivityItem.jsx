export default function ActivityItem({ initials, name, message, time }) {
  return (
    <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors">
      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center text-white font-bold flex-shrink-0">
        {initials}
      </div>
      <div className="flex-1">
        <h4 className="text-base font-semibold text-gray-800">{name}</h4>
        <p className="text-sm text-gray-700 mt-1">{message}</p>
        <span className="text-xs text-gray-500 mt-1 inline-block">{time}</span>
      </div>
    </div>
  );
}
