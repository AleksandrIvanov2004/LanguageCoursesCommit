import api from '../api'

interface RegisterPayload {
    age: number;
    email: string;
    password: string;
    first_name: string;
    second_name: string;
    role: string;
}

export const registerUser = async (payload: RegisterPayload) => {
    try {
        const response = await api.post('/register', payload);
        return response.data
    } catch (error) {
        throw error
    }
};