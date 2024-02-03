import { Bar, Doughnut, Pie } from 'react-chartjs-2';
import Charts from "chart.js/auto"

function Chart({ children }) {
  return (
    <div>
      {children}
    </div>
  )
}

function BarChart({ chartsData, chartsOptions }) {
  return <Bar data={chartsData} options={chartsOptions} />
}

function PieChart({ chartsData, chartsOptions }) {
  return <Pie data={chartsData} options={chartsOptions} />
}

function DoughnutChart({ chartsData, chartsOptions }) {
  return <Doughnut data={chartsData} options={chartsOptions} />
}

Chart.BarChart = BarChart
Chart.PieChart = PieChart
Chart.DoughnutChart = DoughnutChart
export default Chart
