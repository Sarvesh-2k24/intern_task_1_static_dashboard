import React from 'react';
import { ProductCategoryDoughnutChart } from './Charts';

const Orders = () => (
  <div>
    <h2 className="text-2xl font-bold mb-4">Orders Overview</h2>
    <p className="mb-4">Track order status and recent activity.</p>
    <div className="bg-white p-6 rounded-lg shadow mb-8 max-w-lg">
      <h3 className="text-lg font-semibold mb-2">Order Status Distribution</h3>
      <ProductCategoryDoughnutChart />
    </div>
    <div className="bg-white p-6 rounded-lg shadow max-w-lg">
      <h3 className="text-lg font-semibold mb-2">Recent Orders</h3>
      <ul className="list-disc pl-6">
        <li>#1003 - Completed</li>
        <li>#1004 - Pending</li>
        <li>#1005 - Cancelled</li>
      </ul>
    </div>
  </div>
);

export default Orders;
