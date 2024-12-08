import React from 'react';
const Login = () => {
    return (
        <div>
            <h1>Вход в систему</h1>
            <form>
                <label>Email</label>
                <input type="email" />
                <label>Пароль</label>
                <input type="password" />
                <button type="submit">Войти</button>
            </form>
        </div>
    );
};
export default Login;