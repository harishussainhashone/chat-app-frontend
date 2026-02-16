import ActivityItem from './ActivityItem';

export default function RecentActivity() {
  const activities = [
    { name: 'John Doe', initials: 'JD', message: 'Hey, how are you doing?', time: '2 minutes ago' },
    { name: 'Alice Smith', initials: 'AS', message: 'Can we schedule a meeting?', time: '1 hour ago' },
    { name: 'Mike Johnson', initials: 'MJ', message: 'Thanks for your help!', time: '3 hours ago' },
  ];

  return (
    <div className="bg-surface rounded-xl p-6 shadow-sm">
      <h2 className="text-xl font-bold text-gray-900 mb-5">Recent Activity</h2>
      <div className="space-y-4">
        {activities.map((activity, index) => (
          <ActivityItem key={index} {...activity} />
        ))}
      </div>
    </div>
  );
}
