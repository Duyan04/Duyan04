// src/Auth.js
import React, { useState } from 'react';
import './Auth.css'; // Import file CSS

const Auth = () => {
    const [currentForm, setCurrentForm] = useState('login'); // 'login', 'register', 'forgot'
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Xử lý logic cho từng form
        if (currentForm === 'login') {
            if (username === 'admin' && password === 'password') {
                alert('Đăng nhập thành công!');
                setError('');
            } else {
                setError('Tên người dùng hoặc mật khẩu không đúng!');
            }
        } else if (currentForm === 'register') {
            alert('Đăng ký thành công!');
            setError('');
            // Logic đăng ký có thể được thêm vào đây
        } else if (currentForm === 'forgot') {
            alert('Yêu cầu đặt lại mật khẩu đã được gửi!');
            setError('');
            // Logic quên mật khẩu có thể được thêm vào đây
        }
    };

    return (
        <div className="auth-page">
            
            <div className="auth-container">
                <h2>{currentForm === 'login' ? 'Đăng Nhập' : currentForm === 'register' ? 'Đăng Ký' : 'Quên Mật Khẩu'}</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Tên người dùng"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Mật khẩu"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required={currentForm !== 'forgot'}
                    />
                    {error && <p className="error">{error}</p>}
                    <button type="submit">{currentForm === 'login' ? 'Đăng Nhập' : currentForm === 'register' ? 'Đăng Ký' : 'Gửi Yêu Cầu'}</button>
                </form>
                <p>
                    {currentForm === 'login' ? 'Chưa có tài khoản? ' : currentForm === 'register' ? 'Đã có tài khoản? ' : 'Quay lại? '}
                    <span onClick={() => setCurrentForm(currentForm === 'login' ? 'register' : currentForm === 'register' ? 'login' : 'login')} className="toggle">
                        {currentForm === 'login' ? 'Đăng Ký' : currentForm === 'register' ? 'Đăng Nhập' : 'Đăng Nhập'}
                    </span>
                </p>
                {currentForm === 'login' && (
                    <p>
                        <span onClick={() => setCurrentForm('forgot')} className="toggle">Quên mật khẩu?</span>
                    </p>
                )}
            </div>
            <div className="auth-background"></div>
        </div>
    );
};

export default Auth;