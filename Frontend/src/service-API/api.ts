import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'http://localhost:7001/api', // 后端的基础 URL
    timeout: 10000, // 请求超时时间
});

export default apiClient;  // 添加这一行

// 注册 API
export const registerUser = (userData: { username: string, email: string, password: string, avatar?: string, hobbies?: string[] }) => {
    return apiClient.post('/user/register', userData);
};

// 登录 API
export const loginUser = (credentials: { email: string, password: string }) => {
    return apiClient.post('/user/login', credentials);
};

// 获取用户信息 API
export const getUser = (uid: string) => {
    return apiClient.get(`/user/get_user`, {
        params: { uid }
    });
};
