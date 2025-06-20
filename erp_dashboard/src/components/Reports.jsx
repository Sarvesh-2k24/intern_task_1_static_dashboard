import React from 'react';
import {
  MonthlySalesLineChart,
  SalesByRegionBarChart,
  SalesByDepartmentPieChart,
  ProductCategoryDoughnutChart,
  EmployeeSkillRadarChart,
  ProductPopularityPolarAreaChart,
  ProductImpactBubbleChart,
  SalesVsProfitScatterChart
} from './Charts';

const Reports = () => (
  <div>
    <h2 className="text-2xl font-bold mb-4">Reports</h2>
    <p className="mb-4">Generate and view detailed business reports.</p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="bg-white p-6 rounded-lg shadow mb-8">
        <h3 className="text-lg font-semibold mb-2">Line Chart: Trends over time (Monthly Sales, Revenue Growth)</h3>
        <MonthlySalesLineChart />
      </div>
      <div className="bg-white p-6 rounded-lg shadow mb-8">
        <h3 className="text-lg font-semibold mb-2">Bar Chart: Comparing categories (Sales by Region/Product)</h3>
        <SalesByRegionBarChart />
      </div>
      <div className="bg-white p-6 rounded-lg shadow mb-8">
        <h3 className="text-lg font-semibold mb-2">Pie Chart: Proportions of a whole (Sales by Department)</h3>
        <SalesByDepartmentPieChart />
      </div>
      <div className="bg-white p-6 rounded-lg shadow mb-8">
        <h3 className="text-lg font-semibold mb-2">Doughnut Chart: Product Category Distribution</h3>
        <ProductCategoryDoughnutChart />
      </div>
      <div className="bg-white p-6 rounded-lg shadow mb-8">
        <h3 className="text-lg font-semibold mb-2">Radar Chart: Employee Skill Analysis</h3>
        <EmployeeSkillRadarChart />
      </div>
      <div className="bg-white p-6 rounded-lg shadow mb-8">
        <h3 className="text-lg font-semibold mb-2">Polar Area: Product Popularity</h3>
        <ProductPopularityPolarAreaChart />
      </div>
      <div className="bg-white p-6 rounded-lg shadow mb-8">
        <h3 className="text-lg font-semibold mb-2">Bubble Chart: Product Impact vs Demand</h3>
        <ProductImpactBubbleChart />
      </div>
      <div className="bg-white p-6 rounded-lg shadow mb-8">
        <h3 className="text-lg font-semibold mb-2">Scatter Chart: Sales vs Profit</h3>
        <SalesVsProfitScatterChart />
      </div>
    </div>
  </div>
);

export default Reports;
