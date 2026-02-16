export default function StatsCard({ icon, value, label }) {
  return (
    <div className="bg-surface rounded-xl p-6 flex items-center gap-4 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all">
      <div className="w-14 h-14 flex items-center justify-center bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl text-2xl">
        {icon}
      </div>
      <div>
        <h3 className="text-3xl font-bold text-gray-900">{value}</h3>
        <p className="text-sm text-gray-600">{label}</p>
      </div>
    </div>
  );
}
