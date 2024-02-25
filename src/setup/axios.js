import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:9999',
});

const accessToken = localStorage.getItem('accessToken');
instance.defaults.headers.common['Authorization'] = accessToken ? `Bearer ${accessToken}` : null;
instance.defaults.headers.common['Content-Type'] = 'application/json';
instance.defaults.headers.common['Accept'] = 'application/json';

export default instance;
