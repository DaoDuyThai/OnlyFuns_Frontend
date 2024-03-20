import axios from '../setup/axios.js';

/**
 * Fetches reports for a post from a specified path.
 *
 * @async
 * @author PhuocDT
 * @param {string} path - The path where the post reports are located.
 * @returns {Promise<Object>} The post reports data.
 * @throws {Error} When unable to fetch the data.
 */
async function getReportsPost(path) {
    try {
        const response = await axios.get(path);
        return response.data;
    } catch (e) {
        throw new Error(e);
    }
}

async function getPosts(path) {
    try {
        const response = await axios.get(path);
        return response.data;
    } catch (e) {
        throw new Error(e);
    }
}

async function getPostByID(id) {
    try {
        const response = await axios.get(`/post/${id}`);
        return response.data;
    } catch (e) {
        throw new Error(e);
    }
}

async function createPost(path, data) {
    try {
        const response = await axios.post(path, data, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        return response.data;
    } catch (e) {
        throw new Error(e);
    }
}

async function createPostComment(path, data) {
    try {
        const response = await axios.post(path, data, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        return response.data;
    } catch (e) {
        throw new Error(e.toString());
    }
}

async function likePost(id, data) {
    try {
        const response = await axios.put(`/post/like/${id}`, data, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        return response.data;
    } catch (e) {
        throw new Error(e.toString());
    }
}

export { getReportsPost, createPost, getPosts, getPostByID, createPostComment, likePost };
