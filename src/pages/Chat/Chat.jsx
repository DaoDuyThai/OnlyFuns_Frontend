import './Chat.css';
import Header from '../../components/Header/Header';
import ChatListItem from '../../components/Chat/ChatList/ChatListItem';
import ChatWindow from '../../components/Chat/ChatWindow/ChatWindow';
import { socket } from '../../service/SocketIO';
import { useEffect, useState, Suspense } from 'react';
import axios from 'axios';
import ChatList from '../../components/Chat/ChatList';

const Chat = () => {
    useEffect(() => {
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

    return (
        <>
            <Header />
            <div className="container">
                <div className="row pt-4">
                    <Suspense>
                        <ChatList />
                    </Suspense>
                    <div className="col-md-9">
                        <ChatWindow />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Chat;
