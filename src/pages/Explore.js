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
    labels: ['Agriculture', 'Food Processing', 'Handicraft', 'Textile', 'Mining'],
    datasets: [
      {
        label: 'Number of Companies',
        data: [35, 20, 15, 25, 5], // Numerical data for each industry
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
      <h1>Explore Page</h1>
      <p>Welcome to the Explore page! Here you can find more details about the focus sectors.</p>

      {/* Pie Chart */}
      <div style={{ marginTop: '40px' }}>
        <Pie data={data} options={options} />
      </div>
    </div>
  );
};

export default Explore;