import ChatListItem from './ChatList/ChatListItem';
const ChatList = ({ userId, chatRoomID }) => {
    const connectChat = (chatRoomID) => {
        // socket.emit('joinRoom', chatRoomID.toString());
    };

    const sendMessage = (message) => {
        // const userId = localStorage.getItem('UserId');
        // socket.emit('chatMessage', { chatRoomID, userId, message });
    };
    return (
        <div className="col-md-3 chatListContainer">
            <button
                onClick={() => connectChat(chatRoomID)}
                className="btn btn-primary"
            >
                Test connect room
            </button>
            <button
                onClick={() => sendMessage('Hello')}
                className="btn btn-success"
            >
                Test sending message
            </button>
            <ChatListItem />
            <ChatListItem />
        </div>
    );
};

export default ChatList;