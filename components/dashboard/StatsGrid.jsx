import StatsCard from './StatsCard';

export default function StatsGrid() {
  const stats = [
    { icon: '💬', value: '24', label: 'Active Chats' },
    { icon: '👥', value: '156', label: 'Contacts' },
    { icon: '📨', value: '12', label: 'Unread Messages' },
    { icon: '⭐', value: '8', label: 'Favorites' },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
      {stats.map((stat, index) => (
        <StatsCard key={index} {...stat} />
      ))}
    </div>
  );
}
