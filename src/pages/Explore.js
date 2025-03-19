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
    labels: ['Ayush and Wellness', 'Water', 'Renewable', 'Pharma', 'Smart Tech', 'ODOP', 'Mid Tech', 'Smart Cold chain', 'Waste Management', 'LED','Logistic & Warehouse','Leather','Incubation','FPO','MicroIrrigation','Solar Industry','Textile Industry','Start Up','Food Industry','Construction Industry','Corrugated Industry', 'Compact Industry','Cable & Wire','Chemical Industry','Automobility','Build Tech','Automation', 'Agriculture'],
    datasets: [
      {
        label: 'Number of Companies',
        data: [102, 474, 934, 669, 695, 4500, 308, 1000, 620,1950,1640,130,1810,400,522,3171,947,4277,2100, 2190,443,143,957,338,3201,535,1788,50], // Numerical data for each industry
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

  // Calculate total count of the data
  const totalCount = data.datasets[0].data.reduce((acc, curr) => acc + curr, 0);

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
    <div style={{ textAlign: 'center', padding: '40px 20px', maxWidth: '1200px', margin: 'auto', display: 'flex', flexDirection: 'row', gap: '40px', alignItems: 'flex-start' }}>
      {/* Pie Chart */}
      <div style={{ flex: 1 }}>
        <Pie data={data} options={options} />
      </div>

      {/* Labels and Data Column */}
      <div style={{ flex: 1, textAlign: 'left', padding: '20px', backgroundColor: '#F4F1EE', borderRadius: '10px', boxShadow: '0 4px 10px rgba(0,0,0,0.08)' }}>
        <h3 style={{ fontSize: '1.5rem', color: '#4B830D', marginBottom: '20px' }}>Industry Data</h3>
        <ul style={{ listStyle: 'none', padding: '0', margin: '0' }}>
          {data.labels.map((label, index) => (
            <li key={index} style={{ fontSize: '1rem', color: '#444', marginBottom: '10px', display: 'flex', justifyContent: 'space-between', gap: '20px' }}>
              <span>{label}</span>
              <span style={{ fontWeight: 'bold', color: '#4B830D' }}>{data.datasets[0].data[index]}</span>
            </li>
          ))}
        </ul>
        <div style={{ marginTop: '20px', fontSize: '1.2rem', fontWeight: 'bold', color: '#4B830D' }}>
          Total Companies: <span style={{ color: '#D98E04' }}>{totalCount}</span>
        </div>
      </div>
    </div>
  );
};

export default Explore;