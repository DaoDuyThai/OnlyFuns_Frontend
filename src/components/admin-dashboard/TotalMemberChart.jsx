import LineChart from '../charts/LineChart.jsx';
import '../../style/admin-dashboard/TotalMember.css';
import { useState } from 'react';
import { UserData } from '../../../Data.js';

// eslint-disable-next-line react/prop-types
function TotalMemberChart() {
    const [userData, setUserDate] = useState({
        labels: UserData.map((item) => item.year),
        datasets: [
            {
                label: 'User Gain',
                data: UserData.map((item) => item.userGain),
            },
            {
                label: 'User Lost',
                data: UserData.map((item) => item.userLost),
            },
        ],
    });
    const option = {
        responsive: true,
    };
    return (
        <div className="total-member mb-2 container">
            <h5>Total Member : 200</h5>
            <hr />
            <LineChart data={userData} option={option} />
        </div>
    );
}

export default TotalMemberChart;
