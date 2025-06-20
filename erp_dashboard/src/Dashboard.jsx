import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Sales from './components/Sales';
import Inventory from './components/Inventory';
import Orders from './components/Orders';
import Reports from './components/Reports';
import { SalesByRegionBarChart, MonthlySalesLineChart } from './components/Charts';

const Dashboard = () => {
  const [page, setPage] = useState('dashboard');

  // Sidebar will call this to change page
  const handleNav = (nav) => setPage(nav);

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar onNavigate={handleNav} />
      <main className="flex-1 p-8">
        {/* Top Navbar */}
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold capitalize">{page === 'dashboard' ? 'Dashboard' : page}</h1>
          <div className="flex items-center space-x-4">
            <span className="text-gray-600">Welcome, User</span>
            <img src="https://i.pravatar.cc/40" alt="User" className="rounded-full w-10 h-10" />
          </div>
        </header>
        {page === 'dashboard' && (
          <>
            {/* KPI Cards */}
            <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white p-6 rounded-lg shadow">
                <h2 className="text-lg font-semibold mb-2">Sales</h2>
                <p className="text-2xl font-bold">$12,000</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h2 className="text-lg font-semibold mb-2">Inventory</h2>
                <p className="text-2xl font-bold">1,200</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h2 className="text-lg font-semibold mb-2">Orders</h2>
                <p className="text-2xl font-bold">320</p>
              </div>
            </section>
            {/* Charts */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white p-6 rounded-lg shadow">
                <h2 className="text-lg font-semibold mb-4">Revenue</h2>
                <div className="h-48 flex items-center justify-center"><SalesByRegionBarChart /></div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h2 className="text-lg font-semibold mb-4">Inventory Trends</h2>
                <div className="h-48 flex items-center justify-center"><MonthlySalesLineChart /></div>
              </div>
            </section>
            {/* Tables */}
            <section className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-lg font-semibold mb-4">Recent Orders</h2>
              <table className="min-w-full">
                <thead>
                  <tr>
                    <th className="text-left py-2">Order ID</th>
                    <th className="text-left py-2">Customer</th>
                    <th className="text-left py-2">Amount</th>
                    <th className="text-left py-2">Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-2">#1001</td>
                    <td className="py-2">John Doe</td>
                    <td className="py-2">$250</td>
                    <td className="py-2">Completed</td>
                  </tr>
                  <tr>
                    <td className="py-2">#1002</td>
                    <td className="py-2">Jane Smith</td>
                    <td className="py-2">$180</td>
                    <td className="py-2">Pending</td>
                  </tr>
                </tbody>
              </table>
            </section>
          </>
        )}
        {page === 'sales' && <Sales />}
        {page === 'inventory' && <Inventory />}
        {page === 'orders' && <Orders />}
        {page === 'reports' && <Reports />}
      </main>
    </div>
  );
};

export default Dashboard;
