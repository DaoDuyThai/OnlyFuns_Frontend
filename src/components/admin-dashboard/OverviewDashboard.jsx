import EngagementChart from '../charts/EngagementChart.jsx';
import TotalMemberChart from '../charts/TotalMemberChart.jsx';
import '../../style/admin-dashboard/OverviewDashboard.css'
function OverviewDashboard() {
    return (
        <div className="overview-dashboard">
            <div className="overview-header d-flex justify-content-center">
                <h3>Overview</h3>
            </div>
            <div className="d-flex justify-content-center mt-4">
                <div style={{width:'60%'}}>
                    <EngagementChart />
                    <TotalMemberChart />
                </div>
            </div>
        </div>
    );
}

export default OverviewDashboard;