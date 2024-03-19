import { useEffect, useState } from 'react';
import ChatListItem from './ChatList/ChatListItem';
import { getAllMessageLists } from '../../service/ChatService';

const ChatList = () => {
    const [messageList, setMessageList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        getAllMessageLists()
            .then((response) => {
                // Assuming response.data is an array of message objects
                setMessageList(response);
                setIsLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching message lists:', error);
                setIsLoading(false); // Set isLoading to false on error
            });
    }, []); // Empty dependency array to ensure the effect runs only once on component mount

    // Logging messageList outside useEffect
    useEffect(() => {
        console.log(messageList);
    }, [messageList]);

    return (
        <div className="col-md-3 chatListContainer">
            {isLoading ? (
                <div>Loading...</div>
            ) : messageList.length > 0 ? (
                messageList.map((room) => (
                    <ChatListItem
                        key={room._id}
                        chatRoomID={room._id}
                        user={
                            room.participants[0]._id ===
                            localStorage.getItem('UserId')
                                ? room.participants[1]
                                : room.participants[0]
                        }
                    />
                ))
            ) : (
                <div className='text-center'>No messages? Go make some friends</div>
            )}
        </div>
    );
};

export default ChatList;
