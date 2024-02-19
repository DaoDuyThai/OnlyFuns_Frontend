import "./ChatWindow.css";
const ChatWindow = () => {
    return (
        <div className="chatWindow">
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
            <div className="card-body chatContent">
                <div className="senderBubble">
                    <p>Hey, how are you?</p>
                </div>
                <div className="receiverBubble">
                    <p>Hey, I'm good. How are you?</p>
                </div>
            </div>
            <div className="card-footer chatFooter">
                <div className="input-group">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Type a message"
                    />
                    <button className="btn btn-primary">Send</button>
                </div>
            </div>
        </div>
    );
};
export default ChatWindow;
