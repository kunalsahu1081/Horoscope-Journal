import axios from 'axios';

// Create an axios instance
const api = axios.create({
    baseURL: 'https://api.api-ninjas.com/v1',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
        'X-Api-Key': '6e40l31eTvqVZ/xGe/Gayg==OrZsw3WH4jZO3ex6',
    },
});

export const getHoroscope = async (endpoint: string, params = {}) => {
    return api.get(endpoint, { params });
};
