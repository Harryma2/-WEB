import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './PostPage.css';

const PostPage = () => {
    const navigate = useNavigate();
    const { postId } = useParams();

    // 示例数据，可以从后端获取
    const posts = {
        1: {
            title: '音乐推荐',
            author: '张三',
            date: '2024-08-12',
            content: '分享我最近听到的好音乐...',
            image: '/src/assets/music.jpg', // 图片路径
            comments: [
                { id: 1, user: '李四', comment: '这首音乐我也喜欢！' },
                { id: 2, user: '王五', comment: '谢谢推荐，我去听听！' }
            ]
        },
        2: {
            title: '运动心得',
            author: '李四',
            date: '2024-08-11',
            content: '分享我在运动中的一些心得...',
            image: '/src/assets/sports.jpg', // 图片路径
            comments: [
                { id: 1, user: '张三', comment: '很有启发，谢谢分享！' }
            ]
        },
        // 添加更多帖子数据
    };

    const post = posts[postId] || {};

    const [newComment, setNewComment] = useState('');

    const handleBackClick = () => {
        navigate(-1); // 返回上一页
    };

    const handleCommentSubmit = () => {
        if (newComment.trim()) {
            // 这里可以处理提交评论的逻辑，例如更新状态或发送到服务器
            console.log('评论提交:', newComment);
            setNewComment('');
        }
    };

    return (
        <div className="post-page">
            <header className="post-header">
                <button onClick={handleBackClick} className="back-button">返回</button>
                <h1>{post.title}</h1>
            </header>

            <div className="post-content">
                <div className="post-meta">
                    <span className="post-author">作者: {post.author}</span>
                    <span className="post-date">发布时间: {post.date}</span>
                </div>
                <p>{post.content}</p>
                {post.image && <img src={post.image} alt="Post content" className="post-image" />}
            </div>

            <section className="post-comments">
                <h2>评论区</h2>
                <div className="comments-list">
                    {post.comments.map((comment) => (
                        <div key={comment.id} className="comment-card">
                            <span className="comment-user">{comment.user}:</span>
                            <p>{comment.comment}</p>
                        </div>
                    ))}
                </div>
                <div className="comment-input">
                    <input
                        type="text"
                        value={newComment}
                        onChange={(e) => setNewComment(e.target.value)}
                        placeholder="添加评论..."
                    />
                    <button onClick={handleCommentSubmit} className="comment-submit">提交</button>
                </div>
            </section>
        </div>
    );
};

export default PostPage;
