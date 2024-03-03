import LineChart from './LineChart.jsx';
import '../../style/admin-dashboard/TotalMember.css';
import { useEffect, useState } from 'react';
import DateTimer from '../../utilities/DateCount.js';
import { getUserLast7Days, getUsers } from '../../service/UserService.js';

// eslint-disable-next-line react/prop-types
function TotalMemberChart() {
    const [userLast7Days, setUserLast7Days] = useState(null);
    const [userData, setUserData] = useState(null);
    const [totalMember, setTotalMember] = useState(null);
    const option = {
        responsive: true,
    };

    useEffect(() => {
        getUserLast7Days('/dash-board/user-last-7-days')
            .then((res) => setUserLast7Days(res.data))
            .catch((e) => console.error(e.message));
        getUsers('/user')
            .then((res) => setTotalMember(res.length))
            .catch((e) => console.error(e));
    }, []);

    useEffect(() => {
        const last7days = Array.from({ length: 7 }, (_, index) => {
            const date = new Date();
            date.setDate(date.getDate() - 6 + index);
            return date;
        });
        if (userLast7Days) {
            const userGain = last7days.map(
                (date) =>
                    userLast7Days.filter(
                        (user) =>
                            new Date(user.joinDate).toDateString() ===
                            date.toDateString(),
                    ).length,
            );
            setUserData({
                labels: DateTimer.map((item) => item),
                datasets: [
                    {
                        label: 'User Gain',
                        data: userGain.map((item) => item),
                    },
                ],
            });
        }
    }, [userLast7Days]);

    return (
        <div className="total-member mb-2">
            <h5>Total Member : {totalMember ? totalMember : null}</h5>
            <hr />
            {userData && totalMember ? (
                <LineChart
                    totalMember={totalMember}
                    data={userData}
                    option={option}
                />
            ) : (
                <></>
            )}
        </div>
    );
}

export default TotalMemberChart;
