import "./ChatContent.css";
const ChatContent = () => {
    return (
        <div className="card-body chatContent">
                <div className="senderBubble">
                    <p>Hey, how are you?</p>
                </div>
                <div className="receiverBubble">
                    <p>Hey, I'm good. How are you?</p>
                </div>
            </div>
    );
}
export default ChatContent;