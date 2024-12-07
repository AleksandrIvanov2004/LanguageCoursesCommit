import React from 'react';

const Registration = () => {
    return (
        <div>
            <h1>Registration</h1>
            <form>
                <label>Email</label>
                <input type="email" />
                <label>Password</label>
                <input type="password" />
                <button type="submit">Registration</button>
            </form>
        </div>
    );
};
export default Registration;
export { }