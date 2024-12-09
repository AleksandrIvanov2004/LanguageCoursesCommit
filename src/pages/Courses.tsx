import React, { useState, useEffect } from 'react';
import { CourseType } from '../types/courseType';
import { getAllCourses } from '../service/courseService';
import { ErrorType } from '../types/errType'; 
import '../App.css';

const Orders = () => {
    const [courses, setCourses] = useState<CourseType[]>([]); 
    const [loading, setLoading] = useState<boolean>(true); 
    const [error, setError] = useState<ErrorType>({ isError: false }); 

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const response = await getAllCourses();
                setCourses(response.data); 
            } catch (err) {
                setError({
                    isError: true,
                    message: 'Не удалось получить все курсы. Повторите попытку позже',
                    code: '500', 
                    openModal: true, 
                });
            } finally {
                setLoading(false); 
            }
        };

        fetchCourses(); 
    }, []); 

    if (loading) {
        return (
            <div className="spinner-container">
                <div className="spinner"></div>
            </div>
        );
    }

    if (error.isError) {
        return (
            <div style={{ color: 'red' }}>
                <p>{error.message}</p>
                {error.code && <p>Код ошибки: {error.code}</p>} 
            </div>
        ); 
    }

    return (
        <div>
            <h1>Ваши курсы</h1>
            {courses.length === 0 ? (
                <p>У вас нет курсов.</p> 
            ) : (
                <ul>
                    {courses.map((course) => (
                        <li key={course.id}>
                            Курс #{course.id}: Язык: ${course.language}  Уровень: {course.level}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Orders;