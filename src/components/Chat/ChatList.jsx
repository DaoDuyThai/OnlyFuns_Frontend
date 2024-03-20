// ChatList.js
import { useEffect, useState } from 'react';
import { getAllMessageLists } from '../../service/ChatService';
import ChatListItem from './ChatList/ChatListItem';

const ChatList = ({ userSelection }) => {
    const [messageList, setMessageList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        getAllMessageLists()
            .then((response) => {
                setMessageList(response);
                setIsLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching message lists:', error);
                setIsLoading(false);
            });
    }, []);

    return (
        <div className="col-md-3 chatListContainer">
            {isLoading ? (
                <div>Loading...</div>
            ) : (
                <>
                    {messageList.length > 0 ? (
                        messageList.map((room) => (
                            <ChatListItem
                                key={room._id}
                                chatRoomID={room._id}
                                user={room.participants.find(
                                    (participant) =>
                                        participant._id !==
                                        localStorage.getItem('UserId'),
                                )}
                                userSelection={userSelection}
                            />
                        ))
                    ) : (
                        <div className="text-center">
                            No messages? Go make some friends!
                        </div>
                    )}
                </>
            )}
        </div>
    );
};

export default ChatList;
