import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:9999',
    withCredentials: true,
});

const setAccessToken = (accessToken) => {
    instance.defaults.headers.common['Authorization'] = accessToken ? `Bearer ${accessToken}` : null;
};

instance.interceptors.response.use(
    response => response,
    async error => {
        const originalRequest = error.config;
        if (error.response.status === 400 && error.response.data.message === 'Access token expired') {
            console.log('Access token expired, refreshing...');
            try {
                const refreshResponse = await instance.post('refresh');
                console.log('Access token refreshed:', refreshResponse.data.accessToken);
                setAccessToken(refreshResponse.data.accessToken);
                localStorage.setItem('accessToken', refreshResponse.data.accessToken); // Lưu access token mới vào local storage
                originalRequest.headers['Authorization'] = `Bearer ${refreshResponse.data.accessToken}`; // Cập nhật access token mới cho request gốc
                return axios(originalRequest); // Gửi lại request gốc với access token mới
            } catch (refreshError) {
                console.error('Không thể refresh token:', refreshError);
                return Promise.reject(refreshError);
            }
        }
        return Promise.reject(error);
    }
);

// Set access token from local storage if available
const accessToken = localStorage.getItem('accessToken');
setAccessToken(accessToken);

export default instance;






