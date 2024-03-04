import axios from '../setup/axios.js';

async function getReportsPost(path) {
    try {
        const response = await axios.get(path);
        return response.data
    }catch (e) {
       throw new Error(e)
    }
}

export {getReportsPost}