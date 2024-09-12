import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import '../styles/chart.scss'

// Register necessary Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Chart = ({ users }) => {
  const chartData = {
    labels: users.map(user => user.login),
    datasets: [
      {
        label: 'Seguidores',
        data: users.map(user => user.followers || 0),
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
    ],
  };

  return (
    <div className='chart' style={{ width: '600px', height: '400px' }}>
      {users.length > 0 && <Bar data={chartData} />}
    </div>
  );
};

export default Chart;
