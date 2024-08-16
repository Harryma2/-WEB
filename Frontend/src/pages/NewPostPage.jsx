import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './NewPostPage.css';

const NewPostPage = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [image, setImage] = useState(null);
    const navigate = useNavigate();
    const { groupId } = useParams();
    const userEmail = localStorage.getItem('userEmail'); // 从 localStorage 获取用户邮箱

    const handleTitleChange = (e) => setTitle(e.target.value);
    const handleContentChange = (e) => setContent(e.target.value);

    const handleImageChange = (e) => {
        if (e.target.files[0]) {
            setImage(URL.createObjectURL(e.target.files[0]));
        }
    };

    const handleImageRemove = () => {
        setImage(null);
        document.querySelector('#file-input').value = '';
    };

    const handleSubmit = () => {
        if (!title || !content) {
            alert('请填写标题和内容');
            return;
        }

        // 从 localStorage 获取现有帖子
        const storedGroups = JSON.parse(localStorage.getItem('interestGroups') || '[]');
        const group = storedGroups.find(g => g.id === parseInt(groupId));

        if (group) {
            // 生成新的帖子 ID
            const newPostId = (group.posts && group.posts.length ? Math.max(group.posts.map(p => p.id)) + 1 : 1);
            const newPostIdentifier = `${groupId}-${newPostId}`; // 组合兴趣圈 ID 和帖子 ID 生成唯一标识符

            const newPost = {
                id: newPostIdentifier, // 使用组合标识符
                title,
                content,
                image,
                author: userEmail, // 添加作者字段
                publishedDate: new Date().toISOString() // 添加发布时间字段
            };

            group.posts = group.posts ? [...group.posts, newPost] : [newPost];

            // 更新兴趣圈数据
            localStorage.setItem('interestGroups', JSON.stringify(storedGroups));
        }

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
