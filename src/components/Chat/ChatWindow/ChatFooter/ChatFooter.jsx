const ChatFooter = () => {
    return (
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
    );
};
export default ChatFooter;
