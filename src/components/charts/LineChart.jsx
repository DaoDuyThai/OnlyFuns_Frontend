import { Line } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';

ChartJS.register();

// eslint-disable-next-line react/prop-types
function LineChart({ data, option }) {
    return (
        <div>
            <Line data={data} options={option}/>
        </div>
    );
}

export default LineChart;
