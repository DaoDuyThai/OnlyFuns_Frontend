const NotificationItem = () => {
    return (
        <div className="notiItem card d-flex flex-row justify-content-between align-items-center">
            <div className="d-flex flex-row align-items-center">
                <div>
                    <img
                        className="rounded-circle"
                        src="https://via.placeholder.com/150"
                        alt="John Doe"
                        width="50"
                    />
                </div>
                <div className="ps-2">
                    <div>
                        <span>John Doe</span> <span>liked your post</span>
                    </div>
                    <span
                        style={{
                            fontSize: '10px',
                        }}
                    >
                        2 hours ago
                    </span>
                </div>
            </div>
            <div>
                <span>
                    <i className="fas fa-times"></i>
                </span>
            </div>
        </div>
    );
};
export default NotificationItem;
