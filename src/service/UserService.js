import axios from '../setup/axios.js';

/**
 * Fetches user activity data for the last 7 days from a specified path.
 *
 * @async
 * @author PhuocDT
 * @param {string} path - The path where the user activity data is located.
 * @returns {Promise<Object>} The user activity data.
 * @throws {Error} When unable to fetch the data.
 */
async function getUserLast7Days(path) {
    try {
        const data = await axios.get(path);
        return data.data;
    } catch (e) {
        throw new Error(e);
    }
}

/**
 * Fetches user data from a specified path.
 *
 * @async
 * @author PhuocDT
 * @param {string} path - The path where the user data is located.
 * @returns {Promise<Object>} The user data.
 * @throws {Error} When unable to fetch the data.
 */
async function getUsers(path) {
    try {
        const response = await axios.get(path);
        return response.data;
    } catch (e) {
        throw new Error(e);
    }
}

/**
 * Fetches data for a specific user by their ID.
 *
 * @async
 * @author PhuocDT
 * @param {string} id - The ID of the user.
 * @returns {Promise<Object>} The user data.
 * @throws {Error} When unable to fetch the data.
 */
async function getUser(id) {
    try {
        const response = await axios.get(`/user/${id}`);
        return response.data
    } catch (e) {
        throw new Error(e);
    }
}

export { getUserLast7Days, getUsers,getUser };
