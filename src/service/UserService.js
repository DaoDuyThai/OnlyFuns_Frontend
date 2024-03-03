import axios from '../setup/axios.js';

async function getUserLast7Days(path) {
    try {
        const data = await axios.get(path);
        return data.data;
    } catch (e) {
        throw new Error(e);
    }
}

async function getUsers(path) {
    try {
        const response = await axios.get(path);
        return response.data;
    } catch (e) {
        throw new Error(e);
    }
}

async function getUser(id) {
    try {
        const response = await axios.get(`/user/${id}`);
        return response.data
    } catch (e) {
        throw new Error(e);
    }
}

export { getUserLast7Days, getUsers,getUser };
