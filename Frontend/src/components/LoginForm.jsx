import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginForm.css';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!email || !password) {
            setError('请填写所有字段');
            return;
        }

        const storedEmail = localStorage.getItem('userEmail');
        const storedPassword = localStorage.getItem('userPassword');


        if (email !== storedEmail) {
            setError('邮箱不存在');
            return;
        }

        if (password !== storedPassword) {
            setError('密码错误');
            return;
        }
        console.log('登录成功:', { email });
        navigate('/main');
    }

    const handleRegisterClick = () => {
        navigate('/register');
    };

    return (
        <div className="login-container">
            <h1 className="title">好友趣</h1>
            <div className="login-form">
                <h2>登录</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="email">账号:</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="password">密码:</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    {error && <p className="error">{error}</p>}
                    <button type="submit">登录</button>
                </form>
                <button onClick={handleRegisterClick} className="register-button">
                    注册
                </button>
            </div>
        </div>
    );
};

export default LoginForm;
