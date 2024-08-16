import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './RegisterPage.css';

const RegisterPage = () => {
    const [avatar, setAvatar] = useState(null);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [hobby, setHobby] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();

    const handleAvatarChange = (e) => {
        if (e.target.files[0]) {
            setAvatar(URL.createObjectURL(e.target.files[0]));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!username || !email || !password || !hobby) {
            setError('请填写所有字段');
            return;
        }

        localStorage.setItem('userName', username);
        localStorage.setItem('userEmail', email);
        localStorage.setItem('userPassword', password);
        localStorage.setItem('userAvatar', avatar);
        localStorage.setItem('userHobbies', hobby);

        console.log('注册成功:', { username, email, hobby });
        navigate(-1);
    };

    const handleBackClick = () => {
        navigate(-1);
    };

    return (
        <div className="register-page">
            <button onClick={handleBackClick} className="back-button">返回</button>
            <div className="register-form">
                <h1>创建账户</h1>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="avatar">头像:</label>
                        <input
                            type="file"
                            id="avatar"
                            accept="image/*"
                            onChange={handleAvatarChange}
                            className="avatar-input"
                        />
                        {avatar && <img src={avatar} alt="头像预览" className="avatar-preview" />}
                    </div>
                    <div className="form-group">
                        <label htmlFor="username">用户名:</label>
                        <input
                            type="text"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="input-field"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">邮箱:</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="input-field"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">密码:</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="input-field"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="hobby">爱好:</label>
                        <input
                            type="text"
                            id="hobby"
                            value={hobby}
                            onChange={(e) => setHobby(e.target.value)}
                            className="input-field"
                        />
                    </div>
                    {error && <p className="error">{error}</p>}
                    <button type="submit" className="submit-button">注册</button>
                </form>
            </div>
        </div>
    );
};

export default RegisterPage;
