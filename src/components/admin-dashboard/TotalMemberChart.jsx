import LineChart from '../charts/LineChart.jsx';
import '../../style/admin-dashboard/TotalMember.css'
// eslint-disable-next-line react/prop-types
function TotalMemberChart({ data, option }) {
    return (
        <div className="total-member container">
            <h5>Total Member : 200</h5>
            <hr />
            <LineChart data={data} option={option} />
        </div>
    );
}

export default TotalMemberChart;
