const ChatHeader = () => {
    return (
        <div className="card-header chatHeader">
            <div className="d-flex flex-row">
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
                        <span>John Doe</span>
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
        </div>
    );
};
export default ChatHeader;
