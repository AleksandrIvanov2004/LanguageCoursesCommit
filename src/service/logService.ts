import axios from 'axios';
import api from '../api';

export const loginUser = async (credentials: { email: string; password: string }) => {

    try {
        const response = await api.post('/login', credentials);
        return response.data; 
    } catch (err: any) {
        throw err; 
    }
};