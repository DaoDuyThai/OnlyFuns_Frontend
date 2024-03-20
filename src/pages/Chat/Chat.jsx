import './Chat.css';
import Header from '../../components/Header/Header';
import ChatWindow from '../../components/Chat/ChatWindow/ChatWindow';
import { socket } from '../../service/SocketIO';
import { useEffect, useState, Suspense } from 'react';
import ChatList from '../../components/Chat/ChatList';
import StandbyWindow from '../../components/Chat/ChatWindow/StandbyWindow/StandbyWindow';

const Chat = () => {
    const [user, setSelectedUser] = useState(null);
    const [chatRoomID, setChatRoomID] = useState(null);
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
    const userSelection = (user, chatRoomID) => {
        setSelectedUser(user);
        setChatRoomID(chatRoomID);
        console.log('Selected user:', user);
    };

    return (
        <>
            <Header />
            <div className="container">
                <div className="row pt-4">
                    <ChatList userSelection={userSelection} />

                    <div className="col-md-9">
                        {user ? (
                            <ChatWindow
                                selectedUser={user}
                                chatRoomID={chatRoomID}
                            />
                        ) : (
                            <StandbyWindow />
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Chat;
