import React, { useState } from 'react';
import { socket } from '../../../../service/SocketIO';
import axios from 'axios';

const ChatFooter = ({ chatRoomID }) => {
    const [message, setMessage] = useState('');
    const sendMessage = async (e) => {
        e.preventDefault();
        if (message.trim() !== '') {
            const messageData = {
                messageListId: chatRoomID,
                content: message,
                sender: localStorage.getItem('UserId'),
            };
            socket.emit('sendMessage', messageData);
            setMessage('');
            await axios
                .post('http://localhost:9999/chat/' + chatRoomID, messageData)
                .then((response) => {
                    console.log('Message sent:', response.data);
                })
                .catch((error) => {
                    console.error('Error sending message:', error);
                });
        }
    };

    return (
        <div className="card-footer chatFooter">
            <form onSubmit={sendMessage}>
                <div className="input-group">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Type a message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                sendMessage(e);
                            }
                        }}
                    />
                    <button type="submit" className="btn btn-primary">
                        Send
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ChatFooter;
