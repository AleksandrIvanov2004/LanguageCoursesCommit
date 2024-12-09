import axios from 'axios';
import { CourseType } from '../types/courseType';

export const getAllCourses = async (): Promise<{ data: CourseType[] }> => {
    try {
        const response = await axios.get('/all_courses'); 
        return { data: response.data };
    } catch (error) {
        throw new Error('Error fetching users');
    }
};