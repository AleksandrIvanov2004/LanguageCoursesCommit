import React, { useState } from 'react';
import { registerUser } from '../service/regService';
import { ErrorType } from '../types/errType';
import { SuccessType } from '../types/successType';
import { useNavigate } from 'react-router-dom'; 

const Register = () => {
    const [age, setAge] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [first_name, setFirstName] = useState('');
    const [second_name, setSecondName] = useState('');
    const [role, setRole] = useState('user');
    const [error, setError] = useState<ErrorType>({ isError: false });
    const [success, setSuccess] = useState<SuccessType>({ isSuccess: false });

    const navigate = useNavigate(); 

    const handleRegister = async () => {
        setError({ isError: false });
        setSuccess({ isSuccess: false });

        const payload = { age: Number(age), email, password, first_name, second_name, role };
        try {
            const response = await registerUser(payload);
            setSuccess({
                isSuccess: true
            });

            setTimeout(() => {
                navigate('/login'); 
            }, 1000); 

        } catch (err: any) {
            setError({
                isError: true,
                message: err.response?.data?.message || 'Ошибка регистрации.',
                code: err.response?.status
            });
        }
    };

    return (
        <div>
            <h1>Регистрация</h1>
            <div>
                <div>
                    Возраст  
                    <input
                        type='number'
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                        required
                    />
                </div>
                <div>
                    Email
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    Пароль
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <div>
                    Имя
                    <input
                        type="text"
                        value={first_name}
                        onChange={(e) => setFirstName(e.target.value)}
                        required
                    />
                </div>
                <div>
                    Фамилия
                    <input
                        type="text"
                        value={second_name}
                        onChange={(e) => setSecondName(e.target.value)}
                        required
                    />
                </div>
                <div>
                    Роль
                    <select
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                        required
                    >
                        <option value="user">User</option>
                        <option value="admin">Admin</option>
                    </select>
                </div>
                <button style={{marginTop: '20px'}} className="custom-button" onClick={handleRegister}>
                    Регистрироваться
                </button>
            </div>
            {error.isError && <p style={{ color: 'red' }}>{error.message}</p>}

            <div>
                <button style={{marginTop: '20px'}} className="custom-button" onClick={() => navigate('/register')}>Уже имеете акаунт? Войти</button>
            </div>

        </div>
    );
};

export default Register;