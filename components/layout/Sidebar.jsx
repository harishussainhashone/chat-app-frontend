export default function Sidebar() {
  const menuItems = [
    { icon: '💬', label: 'Chats' },
    { icon: '👥', label: 'Contacts' },
    { icon: '⚙️', label: 'Settings' },
    { icon: '👤', label: 'Profile' },
  ];

  return (
    <aside className="w-64 bg-white shadow-sm p-6">
      <div className="mb-5">
        <h3 className="text-lg font-bold text-gray-800">Menu</h3>
      </div>
      <ul className="space-y-2">
        {menuItems.map((item, index) => (
          <li 
            key={index}
            className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors text-gray-700 font-medium"
          >
            <span className="text-xl">{item.icon}</span>
            <span>{item.label}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
}
