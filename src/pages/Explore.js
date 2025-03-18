import React from 'react';
import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  Title,
} from 'chart.js';

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend, Title);

const Explore = () => {
  // Data for the pie chart
  const data = {
    labels: ['Ayush and Wellness', 'Water', 'Renewable', 'Pharma', 'Smart Tech', 'ODOP', 'Mid Tech', 'Smart Cold chain', 'Waste Management'],
    datasets: [
      {
        label: 'Number of Companies',
        data: [102, 474, 934, 669, 695, 4500, 308, 1000, 620], // Numerical data for each industry
        backgroundColor: [
          '#4B830D', // Agriculture
          '#D98E04', // Food Processing
          '#8B5E3C', // Handicraft
          '#4B2E1A', // Textile
          '#3D660F', // Mining
        ],
        borderColor: [
          '#4B830D',
          '#D98E04',
          '#8B5E3C',
          '#4B2E1A',
          '#3D660F',
        ],
        borderWidth: 1,
      },
    ],
  };

  // Options for the pie chart
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Number of Companies in Each Industry',
        font: {
          size: 18,
        },
      },
    },
  };

  return (
    <div style={{ textAlign: 'center', padding: '40px 20px', maxWidth: '600px', margin: 'auto' }}>
      

      {/* Pie Chart */}
      <div style={{ marginTop: '40px' }}>
        <Pie data={data} options={options} />
      </div>
    </div>
  );
};

export default Explore;