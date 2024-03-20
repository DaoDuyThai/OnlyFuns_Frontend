import './ChatWindow.css';
import ChatHeader from './ChatHeader/ChatHeader';
import ChatFooter from './ChatFooter/ChatFooter';
import ChatContent from './ChatContent/ChatContent';
import { useState, useEffect } from 'react';
import { getMessages } from '../../../service/ChatService';

const ChatWindow = ({ selectedUser, chatRoomID }) => {
    const [messages, setMessages] = useState([]);
    useEffect(() => {
        getMessages(chatRoomID).then((response) => {
            setMessages(response);
        });
    }, [chatRoomID]); // Only trigger effect when chatRoomID changes

    return (
        <div className="card chatWindow">
            <ChatHeader selectedUser={selectedUser} />
            <ChatContent initialMessages={messages} />
            <ChatFooter chatRoomID={chatRoomID} />
            {/* Pass chatRoomID to ChatFooter */}
        </div>
    );
};

export default ChatWindow;
