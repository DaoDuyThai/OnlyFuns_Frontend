import './ChatListItem.css';
import { socket } from '../../../service/SocketIO';
import { useState } from 'react';

const ChatListItem = ({ user, chatRoomID, userSelection }) => {
    const [joined, setJoined] = useState(false);
    const [activeChatId, setActiveChatId] = useState(null);

    const handleClick = () => {
        socket.emit('joinRoom', chatRoomID);
        setJoined(true);
        setActiveChatId(chatRoomID);
        userSelection(user, chatRoomID);
    };

    return (
        <div
            className={`listItem d-flex flex-row w-auto ${joined && activeChatId === chatRoomID ? 'joined' : ''}`}
            onClick={handleClick}
        >
            <div>
                <img
                    className="rounded-circle"
                    src="https://www.w3schools.com/w3images/mountains.jpg"
                    alt={user.username}
                    width="50px"
                    height="50px"
                />
            </div>
            <div className="ps-2">
                <div>
                    <span>{user.username}</span>
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
