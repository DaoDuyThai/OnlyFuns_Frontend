import './Notifications.css';
import NotificationItem from '../../components/Notifications/NotificationItem';
import Header from '../../components/Header/Header';
const Notifications = () => {
    return (
        <>
            <Header />
            <div className="container">
                <div className="row d-flex justify-content-center notiRow">
                    <div className="col-md-12 d-flex justify-content-center">
                        <div className="col-md-8 d-flex flex-column justify-content-center align-items-center">
                            <h1>Notifications</h1>
                            <div className="col-md-8 card notiList">
                                <div className="card-body">
                                    <NotificationItem />
                                    <NotificationItem />
                                    <NotificationItem />
                                    <NotificationItem />
                                    <NotificationItem />
                                    <NotificationItem />
                                    <NotificationItem />
                                    <NotificationItem />
                                    <NotificationItem />
                                    <NotificationItem />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Notifications;
