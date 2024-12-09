import React, { useState } from 'react';
import { loginUser } from '../service/logService'; 
import { ErrorType } from '../types/errType';
import { SuccessType } from '../types/successType';
import { useNavigate } from 'react-router-dom'; 
import '../ui/Button.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState<ErrorType>({ isError: false });
    const [success, setSuccess] = useState<SuccessType>({ isSuccess: false }); 

    const navigate = useNavigate(); 

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault(); 
        setError({ isError: false }); 
        setSuccess({ isSuccess: false }); 

        if (!email || !password) {
            setError({
                isError: true,
                message: 'Пожалуйста, заполните все поля.',
            });
            return;
        }

        try {
            const response = await loginUser({ email, password });

            const access_token: string = response.access_token;

            if (access_token) {
                localStorage.setItem('authToken', access_token);
                setSuccess({
                    isSuccess: true
                });

                setTimeout(() => {
                    navigate('/dashboard'); 
                }, 2000); 
            } else {
                setSuccess({
                    isSuccess: false,
                    message: 'Неверный токен'
                });
            }
        } catch (err: any) {

            setError({
                isError: true,
                message: err.response?.data?.message || 'Ошибка при входе в систему. Пожалуйста, попробуйте снова',
                code: err.response?.status,
            });
        }
    };


    return (
        <div>
            <h1>Вход в систему</h1>
            <div>
                <div>
                    <label>Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Пароль</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                {error.isError && <p style={{ color: 'red' }}>{error.message}</p>}
                <button style={{marginTop: '20px'}} className="custom-button" onClick={handleSubmit}>Войти</button>
            </div>

            <div>
                <button style={{marginTop: '20px'}} className="custom-button" onClick={() => navigate('/register')}>Не имеете аккаунта? Зарегистрируйтесь</button>
            </div>

        </div>
    );
};

export default Login;