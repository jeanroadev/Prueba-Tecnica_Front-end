import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

const Chart = ({ data }) => {
  const chartData = data.map(user => ({
    name: user.login,
    followers: user.followers,
  }));

  return (
    <BarChart width={600} height={300} data={chartData}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Bar dataKey="followers" fill="#8884d8" />
    </BarChart>
  );
};

export default Chart;
