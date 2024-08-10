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

        console.log('登录信息:', { email, password });

        // 模拟登录验证，这里可以替换为实际的验证逻辑
        if (email === 'user@example.com' && password === 'password') {
            setError('');
            navigate('/main'); // 登录成功后跳转到主页面
        } else {
            setError('账号或密码错误');
        }
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
            </div>
        </div>
    );
};

export default LoginForm;
