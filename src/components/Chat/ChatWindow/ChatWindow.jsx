import './ChatWindow.css';
import ChatHeader from './ChatHeader/ChatHeader';
import ChatFooter from './ChatFooter/ChatFooter';
import ChatContent from './ChatContent/ChatContent';
const ChatWindow = () => {
    return (
        <div className="card chatWindow">
            <ChatHeader />
            <ChatContent />
            <ChatFooter />
        </div>
    );
};
export default ChatWindow;
