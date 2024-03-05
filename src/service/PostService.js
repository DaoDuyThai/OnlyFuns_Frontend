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
        return response.data
    }catch (e) {
       throw new Error(e)
    }
}

export {getReportsPost}