import React from 'react';
import { SalesByDepartmentPieChart } from './Charts';

const Sales = () => (
  <div>
    <h2 className="text-2xl font-bold mb-4">Sales Overview</h2>
    <p className="mb-4">This page shows sales by product category and recent sales performance.</p>
    <div className="bg-white p-6 rounded-lg shadow mb-8 max-w-lg">
      <h3 className="text-lg font-semibold mb-2">Sales by Category</h3>
      <SalesByDepartmentPieChart />
    </div>
    <div className="bg-white p-6 rounded-lg shadow max-w-lg">
      <h3 className="text-lg font-semibold mb-2">Top Products</h3>
      <ul className="list-disc pl-6">
        <li>Laptop - $2,000</li>
        <li>T-Shirt - $1,500</li>
        <li>Cookware Set - $1,200</li>
        <li>Novel - $800</li>
      </ul>
    </div>
  </div>
);

export default Sales;
