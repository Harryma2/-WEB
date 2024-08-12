import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './NewPostPage.css';

const NewPostPage = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [image, setImage] = useState(null);
    const navigate = useNavigate();
    const { groupId } = useParams();

    const handleTitleChange = (e) => setTitle(e.target.value);
    const handleContentChange = (e) => setContent(e.target.value);

    const handleImageChange = (e) => {
        if (e.target.files[0]) {
            setImage(URL.createObjectURL(e.target.files[0]));
        }
    };

    const handleSubmit = () => {
        // 处理提交逻辑，例如发送请求到服务器
        console.log('提交帖子:', { title, content, image, groupId });
        navigate(`/group/${groupId}`); // 提交后返回兴趣圈界面
    };

    const handleBackClick = () => {
        navigate(-1); // 返回上一个页面
    };

    return (
        <div className="new-post-page">
            <header className="new-post-header">
                <button onClick={handleBackClick} className="back-button">返回</button>
                <h1>发新帖子</h1>
            </header>

            <div className="new-post-content">
                <input
                    type="text"
                    placeholder="请输入标题"
                    value={title}
                    onChange={handleTitleChange}
                    className="post-title"
                />
                <textarea
                    placeholder="请输入内容..."
                    value={content}
                    onChange={handleContentChange}
                    className="post-textarea"
                />
                {image && <img src={image} alt="预览" className="post-image-preview" />}
                <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="post-image-upload"
                />
                <button onClick={handleSubmit} className="submit-button">提交</button>
            </div>
        </div>
    );
};

export default NewPostPage;
