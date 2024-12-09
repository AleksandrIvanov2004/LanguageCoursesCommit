import React, { useState, useEffect } from 'react';
import { getAllUsers } from '../service/userService';
import { UserType } from '../types/userType';
import '../App.css';

const Dashboard = () => {
    const [users, setUsers] = useState<UserType[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const usersResponse = await getAllUsers();
                setUsers(usersResponse.data);
            } catch (error) {
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return (
            <div className="spinner-container">
                <div className="spinner"></div>
            </div>
        );
    }

    return (
        <div>
            <h1>Информационная панель</h1>

            <div>
                <h3>All Users:</h3>
                <p>Total Users: {users.length}</p>
                <ul>
                    {users.map(user => (
                        <li key={user.id}>
                            {user.first_name} {user.second_name} - {user.email}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;