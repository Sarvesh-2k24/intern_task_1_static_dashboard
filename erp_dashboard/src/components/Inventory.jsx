import React from 'react';
import { MonthlySalesLineChart } from './Charts';

const Inventory = () => (
  <div>
    <h2 className="text-2xl font-bold mb-4">Inventory Overview</h2>
    <p className="mb-4">Monitor inventory trends and low stock alerts.</p>
    <div className="bg-white p-6 rounded-lg shadow mb-8 max-w-lg">
      <h3 className="text-lg font-semibold mb-2">Inventory Trends</h3>
      <MonthlySalesLineChart />
    </div>
    <div className="bg-white p-6 rounded-lg shadow max-w-lg">
      <h3 className="text-lg font-semibold mb-2">Low Stock Items</h3>
      <ul className="list-disc pl-6">
        <li>Wireless Mouse - 5 left</li>
        <li>Notebook - 8 left</li>
        <li>Headphones - 3 left</li>
      </ul>
    </div>
  </div>
);

export default Inventory;
