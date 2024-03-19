import './Chat.css';
import Header from '../../components/Header/Header';
import ChatListItem from '../../components/Chat/ChatList/ChatListItem';
import ChatWindow from '../../components/Chat/ChatWindow/ChatWindow';
import { socket } from '../../service/SocketIO';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { getAllMessageLists } from '../../service/ChatService';

const Chat = () => {
    const [messageList, setMessageList] = useState([]);

    useEffect(() => {
        getAllMessageLists(() => {
            setMessageList(messageList);
        });
        // Retrieve the user ID from localStorage
        const userId = localStorage.getItem('UserId');
        // Ensure that the user ID is not null or undefined
        if (userId) {
            // Connect to the server with the user ID as a query parameter
            socket.io.opts.query = { userId: userId };
            socket.connect();

            // Cleanup function to disconnect the socket when the component unmounts
            return () => {
                socket.disconnect();
            };
        } else {
            console.error('User ID not found in localStorage');
        }
    }, []);

    const chatRoomID = 123; // Update this value as needed

    const connectChat = (chatRoomID) => {
        socket.emit('joinRoom', chatRoomID.toString());
    };

    const sendMessage = (message) => {
        const userId = localStorage.getItem('UserId');
        socket.emit('chatMessage', { chatRoomID, userId, message });
    };

    return (
        <>
            <Header />
            <div className="container">
                <div className="row pt-4">
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
                    <div className="col-md-9">
                        <ChatWindow />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Chat;
