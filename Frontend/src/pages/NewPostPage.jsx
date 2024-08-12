import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './NewPostPage.css';

const NewPostPage = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [image, setImage] = useState(null);
    const navigate = useNavigate();

    const handleTitleChange = (e) => setTitle(e.target.value);
    const handleContentChange = (e) => setContent(e.target.value);

    const handleImageChange = (e) => {
        if (e.target.files[0]) {
            setImage(URL.createObjectURL(e.target.files[0]));
        }
    };

    const handleImageRemove = () => {
        setImage(null);
        // 清除文件输入
        document.querySelector('.file-input').value = '';
    };

    const handleSubmit = () => {
        // 处理提交逻辑
        console.log('提交帖子:', { title, content, image });
        navigate('/group'); // 假设提交后返回兴趣圈界面
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

                {/* 图片预览和删除按钮 */}
                {image && (
                    <div className="post-image-container">
                        <img src={image} alt="预览" className="post-image-preview" />
                        <button onClick={handleImageRemove} className="remove-image">×</button>
                    </div>
                )}

                {/* 隐藏文件输入和自定义上传按钮 */}
                <label htmlFor="file-input" className="file-input-label">上传图片</label>
                <input
                    id="file-input"
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="file-input"
                />

                <button onClick={handleSubmit} className="submit-button">提交</button>
            </div>
        </div>
    );
};

export default NewPostPage;
