import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CreateGroupPage.css';

const CreateGroupPage = () => {
    const [groupName, setGroupName] = useState('');
    const [groupDescription, setGroupDescription] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleCreateGroup = () => {

        if (!groupName) {
            setError('请填写兴趣圈名称');
            return;
        }
        if (!groupDescription) {
            setError('请填写兴趣圈描述');
            return;
        }

        setError('');


        const storedGroups = JSON.parse(localStorage.getItem('interestGroups') || '[]');


        const newId = storedGroups.length ? Math.max(...storedGroups.map(group => group.id)) + 1 : 1;


        const newGroup = {
            id: newId,
            name: groupName,
            description: groupDescription
        };


        storedGroups.push(newGroup);


        localStorage.setItem('interestGroups', JSON.stringify(storedGroups));




        navigate('/main');
    };

    const handleBack = () => {
        navigate('/main');
    };

    return (
        <div className="create-group-page">
            <header className="create-group-header">
                <button onClick={handleBack} className="CGP-back-button">返回</button>
                <h1>创建新的兴趣圈</h1>
            </header>
            <section className="create-group-form">
                <input
                    type="text"
                    placeholder="兴趣圈名称"
                    value={groupName}
                    onChange={(e) => setGroupName(e.target.value)}
                    className="group-name-input"
                />
                <textarea
                    placeholder="兴趣圈描述"
                    value={groupDescription}
                    onChange={(e) => setGroupDescription(e.target.value)}
                    className="group-description-textarea"
                />
                {error && <p className="error-message">{error}</p>}
                <button onClick={handleCreateGroup} className="create-button">
                    创建兴趣圈
                </button>
            </section>
        </div>
    );
};

export default CreateGroupPage;
