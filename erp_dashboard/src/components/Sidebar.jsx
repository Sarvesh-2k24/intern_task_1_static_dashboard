import React from 'react';

const Sidebar = ({ onNavigate }) => (
  <aside className="bg-gray-800 text-white w-64 min-h-screen p-6">
    <h2 className="text-2xl font-bold mb-8">ERP Dashboard</h2>
    <nav>
      <ul className="space-y-4">
        <li><button className="hover:text-blue-400 w-full text-left" onClick={() => onNavigate('dashboard')}>Dashboard</button></li>
        <li><button className="hover:text-blue-400 w-full text-left" onClick={() => onNavigate('sales')}>Sales</button></li>
        <li><button className="hover:text-blue-400 w-full text-left" onClick={() => onNavigate('inventory')}>Inventory</button></li>
        <li><button className="hover:text-blue-400 w-full text-left" onClick={() => onNavigate('orders')}>Orders</button></li>
        <li><button className="hover:text-blue-400 w-full text-left" onClick={() => onNavigate('reports')}>Reports</button></li>
      </ul>
    </nav>
  </aside>
);

export default Sidebar;
