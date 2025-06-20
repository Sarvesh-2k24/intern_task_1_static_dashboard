import React from 'react';
import { Bar, Line, Pie, Doughnut, Radar, PolarArea, Bubble, Scatter } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  RadarController,
  RadialLinearScale,
  PolarAreaController,
  BubbleController,
  ScatterController,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  RadarController,
  RadialLinearScale,
  PolarAreaController,
  BubbleController,
  ScatterController,
  Title,
  Tooltip,
  Legend
);

// Synthetic data for charts
const barData = {
  labels: ['North', 'South', 'East', 'West'],
  datasets: [
    {
      label: 'Sales by Region',
      data: [5000, 7000, 4000, 6000],
      backgroundColor: 'rgba(59, 130, 246, 0.7)',
    },
  ],
};

const lineData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      label: 'Monthly Sales',
      data: [12000, 15000, 14000, 17000, 16000, 18000],
      borderColor: 'rgba(59, 130, 246, 1)',
      backgroundColor: 'rgba(59, 130, 246, 0.2)',
      fill: true,
      tension: 0.4,
    },
    {
      label: 'Revenue Growth',
      data: [10000, 12000, 13000, 15000, 17000, 20000],
      borderColor: 'rgba(251, 191, 36, 1)',
      backgroundColor: 'rgba(251, 191, 36, 0.2)',
      fill: true,
      tension: 0.4,
    },
  ],
};

const pieData = {
  labels: ['Electronics', 'Clothing', 'Home', 'Books'],
  datasets: [
    {
      label: 'Sales by Department',
      data: [3000, 5000, 2000, 1500],
      backgroundColor: [
        'rgba(59, 130, 246, 0.7)',
        'rgba(16, 185, 129, 0.7)',
        'rgba(251, 191, 36, 0.7)',
        'rgba(239, 68, 68, 0.7)'
      ],
    },
  ],
};

const doughnutData = {
  labels: ['Electronics', 'Clothing', 'Home', 'Books'],
  datasets: [
    {
      label: 'Product Category Distribution',
      data: [25, 35, 20, 20],
      backgroundColor: [
        'rgba(59, 130, 246, 0.7)',
        'rgba(16, 185, 129, 0.7)',
        'rgba(251, 191, 36, 0.7)',
        'rgba(239, 68, 68, 0.7)'
      ],
    },
  ],
};

const radarData = {
  labels: ['Communication', 'Technical', 'Leadership', 'Creativity', 'Teamwork'],
  datasets: [
    {
      label: 'Employee Skill Analysis',
      data: [80, 90, 70, 85, 75],
      backgroundColor: 'rgba(59, 130, 246, 0.2)',
      borderColor: 'rgba(59, 130, 246, 1)',
      pointBackgroundColor: 'rgba(59, 130, 246, 1)',
    },
  ],
};

const polarData = {
  labels: ['Product A', 'Product B', 'Product C', 'Product D'],
  datasets: [
    {
      label: 'Product Popularity',
      data: [11, 16, 7, 14],
      backgroundColor: [
        'rgba(59, 130, 246, 0.7)',
        'rgba(16, 185, 129, 0.7)',
        'rgba(251, 191, 36, 0.7)',
        'rgba(239, 68, 68, 0.7)'
      ],
    },
  ],
};

const bubbleData = {
  datasets: [
    {
      label: 'Product Impact vs Demand',
      data: [
        { x: 10, y: 20, r: 15 },
        { x: 15, y: 10, r: 10 },
        { x: 25, y: 30, r: 20 },
        { x: 30, y: 15, r: 12 },
      ],
      backgroundColor: 'rgba(59, 130, 246, 0.7)'
    },
  ],
};

const scatterData = {
  datasets: [
    {
      label: 'Sales vs Profit',
      data: [
        { x: 10000, y: 2000 },
        { x: 15000, y: 3000 },
        { x: 20000, y: 4000 },
        { x: 25000, y: 5000 },
      ],
      backgroundColor: 'rgba(251, 191, 36, 0.7)'
    },
  ],
};

export const MonthlySalesLineChart = () => <Line data={lineData} />;
export const SalesByRegionBarChart = () => <Bar data={barData} />;
export const SalesByDepartmentPieChart = () => <Pie data={pieData} />;
export const ProductCategoryDoughnutChart = () => <Doughnut data={doughnutData} />;
export const EmployeeSkillRadarChart = () => <Radar data={radarData} />;
export const ProductPopularityPolarAreaChart = () => <PolarArea data={polarData} />;
export const ProductImpactBubbleChart = () => <Bubble data={bubbleData} />;
export const SalesVsProfitScatterChart = () => <Scatter data={scatterData} />;
