import axios from 'axios';

const getAllMessageLists = async () => {
    try {
        const res = await axios.get('http://localhost:9999/chat');
        console.log('List:', res.data);
        return res.data;
    } catch (error) {
        console.error('Error fetching messages:', error);
    }
};
const getMessages = async (chatRoomID) => {
    try {
        const res = await axios.get(`http://localhost:9999/chat/${chatRoomID}`);
        return res.data;
    } catch (error) {
        console.error('Error fetching messages:', error);
    }
};

export { getAllMessageLists, getMessages };
