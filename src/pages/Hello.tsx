import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../ui/Hello.css';
import '../ui/Button.css';

const Hello = () => {
    const navigate = useNavigate(); 

    return (
        <div className="container">
            <h1>Добро пожаловать!!!</h1>
            <p>Зарегистрируйтесь или войдите в систему</p>
            <div className="button-container">
                <button className="custom-button" onClick={() => navigate('/login')}>Вход</button>
                <button className="custom-button" onClick={() => navigate('/register')}>Регистрация</button>
            </div>
        </div>
    );
};

export default Hello;