import "./ChatListItem.css";
const ChatListItem = () => {
    return (
        <div className="listItem d-flex flex-row w-auto">
            <div>
                <img
                    className="rounded-circle"
                    src="https://www.w3schools.com/w3images/mountains.jpg"
                    alt="John Doe"
                    width="50px"
                    height="50px"
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
    );
};
export default ChatListItem;
