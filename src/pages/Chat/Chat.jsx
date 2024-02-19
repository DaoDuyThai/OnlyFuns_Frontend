import './Chat.css';
import Header from '../../components/Header/Header';
import ChatListItem from '../../components/Chat/ChatList/ChatListItem';
import ChatWindow from '../../components/Chat/ChatWindow/ChatWindow';
const Chat = () => {
    return (
        <>
            <Header />
            <div className="container">
                <div className="row pt-4">
                    <div className="col-md-3 chatListContainer">
                        <ChatListItem 
                        />
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
