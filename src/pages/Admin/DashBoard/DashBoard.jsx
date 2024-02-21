import Header from '../../../components/Header/Header.jsx';
import '../../../style/Admin/Dashboard/DashBoard.css';
import { useMemo, useState } from 'react';
import ReportedContent from '../../../components/list-report/ReportedContent.jsx';
import ListMember from '../../../components/admin-listmember/ListMember.jsx';
import OverviewDashboard from '../../../components/admin-dashboard/OverviewDashboard.jsx';
import AdsManagement from '../../../components/AdminAdsManagement/AdsManagement.jsx';

function DashBoard() {
    const [selected, setSelected] = useState('overview');
    const renderComponent = useMemo(() => {
        switch (selected) {
            case 'overview':
                return <OverviewDashboard />;

            case 'reported':
                return <ReportedContent />;

            case 'community-home':
                return (
                    <iframe
                        width="1920"
                        height="778"
                        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                        title="Rick Astley - Never Gonna Give You Up (Official Music Video)"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    ></iframe>
                );

            case 'members':
                return <ListMember />;

            case "ads":
                return <AdsManagement/>
            default:
                return <></>;
        }
    }, [selected]);
    return (
        <>
            <Header />
            <div className="d-flex row">
                <div className="col-md-2 pe-0">
                    <div className="admin-sidebar p-1">
                        <div
                            className="d-flex mb-2"
                            onClick={() => setSelected('community-home')}
                            style={
                                selected === 'community-home'
                                    ? {
                                          backgroundColor: '#ebf5ff',
                                          color: '#0866ff',
                                      }
                                    : {}
                            }
                        >
                            <i
                                className="fa-solid fa-house fa-lg"
                                style={{
                                    marginTop: '10px',
                                    marginRight: '10px',
                                }}
                            ></i>
                            <p>Community Home</p>
                        </div>
                        <div
                            className="d-flex mb-2"
                            onClick={() => setSelected('overview')}
                            style={
                                selected === 'overview'
                                    ? {
                                          backgroundColor: '#ebf5ff',
                                          color: '#0866ff',
                                      }
                                    : {}
                            }
                        >
                            <i
                                className="fa-solid fa-layer-group fa-lg"
                                style={{
                                    marginTop: '10px',
                                    marginRight: '10px',
                                }}
                            ></i>
                            <p>Overview</p>
                        </div>
                        <div
                            className="d-flex mb-2"
                            onClick={() => setSelected('reported')}
                            style={
                                selected === 'reported'
                                    ? {
                                          backgroundColor: '#ebf5ff',
                                          color: '#0866ff',
                                      }
                                    : {}
                            }
                        >
                            <i
                                className="fa-solid fa-circle-exclamation fa-lg"
                                style={{
                                    marginTop: '13px',
                                    marginRight: '10px',
                                }}
                            ></i>
                            <p>Reported-Content</p>
                        </div>
                        <div
                            className="d-flex mb-2"
                            onClick={() => setSelected('members')}
                            style={
                                selected === 'members'
                                    ? {
                                          backgroundColor: '#ebf5ff',
                                          color: '#0866ff',
                                      }
                                    : {}
                            }
                        >
                            <i
                                className="fa-solid fa-user-group fa-lg"
                                style={{
                                    marginTop: '13px',
                                    marginRight: '10px',
                                }}
                            ></i>
                            <p>Members</p>
                        </div>
                        <div
                            className="d-flex"
                            onClick={() => setSelected('ads')}
                            style={
                                selected === 'ads'
                                    ? {
                                          backgroundColor: '#ebf5ff',
                                          color: '#0866ff',
                                      }
                                    : {}
                            }
                        >
                            <i
                                className="fa-solid fa-money-check-dollar fa-lg"
                                style={{
                                    marginTop: '13px',
                                    marginRight: '10px',
                                }}
                            ></i>
                            <p>ADS-Manager</p>
                        </div>
                    </div>
                </div>
                <div className="dashboard-content col-md-10 d-flex justify-content-center mt-2 p-0">
                    {renderComponent}
                </div>
            </div>
        </>
    );
}

export default DashBoard;
