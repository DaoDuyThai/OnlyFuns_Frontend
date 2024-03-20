import React, { useEffect, useState } from 'react';
import './ChatContent.css';
import { socket } from '../../../../service/SocketIO';

const ChatContent = ({ initialMessages }) => {
    const [messages, setMessages] = useState(initialMessages);
    console.log('ChatContent initialMessages:', initialMessages);
    useEffect(() => {
        setMessages(initialMessages);

        const handleSendMessage = (data) => {
            console.log('Received sendMessage event:', data.message);
            setMessages((prevMessages) => [
                ...prevMessages,
                { sender: data.sender, content: data.message },
            ]);
        };

        const handleReceiveMessage = (data) => {
            console.log('Received receiveMessage event:', data);
            setMessages((prevMessages) => [
                ...prevMessages,
                { sender: data.sender, content: data.content },
            ]);
        };

        // Ensure the socket connection is established before setting up event listeners
        if (socket) {
            socket.on('sendMessage', handleSendMessage);
            socket.on('receiveMessage', handleReceiveMessage);
        }

        // Clean up event listeners when component unmounts
        return () => {
            if (socket) {
                socket.off('sendMessage', handleSendMessage);
                socket.off('receiveMessage', handleReceiveMessage);
            }
        };
    }, [initialMessages]); // Update effect when initialMessages change

    return (
        <div className="card-body chatContent">
            {/* Render out initialMessages */}
            {messages.map((msg, index) => (
                <div
                    key={index}
                    className={
                        msg.sender === localStorage.getItem('UserId')
                            ? 'senderBubble'
                            : 'receiverBubble'
                    }
                >
                    <p>{msg.content}</p>
                </div>
            ))}
        </div>
    );
};

export default ChatContent;
