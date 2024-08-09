import React, { useState } from 'react';

const CreateInterestGroup = () => {
    const [groupName, setGroupName] = useState('');
    const [groupDescription, setGroupDescription] = useState('');
    const [category, setCategory] = useState('');
    const [image, setImage] = useState(null);
    const [error, setError] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!groupName || !groupDescription || !category) {
            setError('请填写所有必填字段');
            return;
        }

        const formData = new FormData();
        formData.append('groupName', groupName);
        formData.append('groupDescription', groupDescription);
        formData.append('category', category);
        if (image) {
            formData.append('image', image);
        }

        // TODO: 发送表单数据到后端API
        console.log('创建兴趣圈:', { groupName, groupDescription, category, image });

        // 重置表单
        setGroupName('');
        setGroupDescription('');
        setCategory('');
        setImage(null);
        setError('');
    };

    return (
        <div className="create-group-form">
            <h1>创建兴趣圈</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="groupName">圈子名称:</label>
                    <input
                        type="text"
                        id="groupName"
                        value={groupName}
                        onChange={(e) => setGroupName(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="groupDescription">圈子描述:</label>
                    <textarea
                        id="groupDescription"
                        value={groupDescription}
                        onChange={(e) => setGroupDescription(e.target.value)}
                        required
                    ></textarea>
                </div>
                <div>
                    <label htmlFor="category">类别:</label>
                    <select
                        id="category"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        required
                    >
                        <option value="">选择类别</option>
                        <option value="music">音乐</option>
                        <option value="sports">体育</option>
                        <option value="technology">科技</option>
                        {/* 其他类别选项 */}
                    </select>
                </div>
                <div>
                    <label htmlFor="image">上传圈子头像或封面:</label>
                    <input
                        type="file"
                        id="image"
                        onChange={(e) => setImage(e.target.files[0])}
                    />
                </div>
                {error && <p className="error" style={{ color: 'red' }}>{error}</p>}
                <button type="submit">创建</button>
            </form>
        </div>
    );
};

export default CreateInterestGroup;
