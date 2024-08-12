import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CreateGroupPage.css';

const CreateGroupPage = () => {
    const [groupName, setGroupName] = useState('');
    const [groupDescription, setGroupDescription] = useState('');
    const navigate = useNavigate();

    const handleCreateGroup = () => {
        // 在这里处理兴趣圈的创建逻辑，例如调用 API。
        // 成功后导航回到主页面。
        navigate('/main');
    };

    return (
        <div className="create-group-page">
            <header className="create-group-header">
                <h1>创建新的兴趣圈</h1>
            </header>
            <section className="create-group-form">
                <input
                    type="text"
                    placeholder="兴趣圈名称"
                    value={groupName}
                    onChange={(e) => setGroupName(e.target.value)}
                />
                <textarea
                    placeholder="兴趣圈描述"
                    value={groupDescription}
                    onChange={(e) => setGroupDescription(e.target.value)}
                />
                <button onClick={handleCreateGroup} className="create-button">
                    创建兴趣圈
                </button>
            </section>
        </div>
    );
};

export default CreateGroupPage;
