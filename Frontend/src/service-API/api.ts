import axios from 'axios';

const apiClient = axios.create({
    baseURL: '/api',
    headers: {
        'Content-Type': 'application/json',
    },
});

export const getInterest = (id: string) => {
    return apiClient.get(`/interest/${id}`);
};

export const createInterest = (interestData: any) => {
    return apiClient.post('/interest', interestData);
};
