// src/layout/Sidebar.tsx
import React from 'react';

type SidebarProps = {};

const Sidebar: React.FC<SidebarProps> = () => {
  return (
    <aside className="border-r border-gray-300 sticky top-16 bottom-0 overflow-y-scroll hidden md:block">
      <ul className="p-4">
        {Array.from({ length: 10 }, (_, idx) => (
          <li key={idx} className="mb-3 last:mb-0">
            Placeholder Menu Item {idx + 1}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar