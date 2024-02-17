//Todo:Remove Action
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';

ChartJS.register();

// eslint-disable-next-line react/prop-types
function BarChartDemo({ chartData }) {
    return (
        <div className="container">
            <Bar data={chartData} />
        </div>
    );
}

export default BarChartDemo;
