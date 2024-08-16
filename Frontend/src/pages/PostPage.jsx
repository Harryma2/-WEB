import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './PostPage.css';

const PostPage = () => {
    const navigate = useNavigate();
    const { postId } = useParams();
    const [post, setPost] = useState(null);
    const [newComment, setNewComment] = useState('');

    useEffect(() => {

        const storedGroups = JSON.parse(localStorage.getItem('interestGroups') || '[]');
        let selectedPost = null;


        for (let group of storedGroups) {
            const foundPost = group.posts.find(post => post.id === postId);
            if (foundPost) {
                selectedPost = foundPost;
                break;
            }
        }

        if (selectedPost) {

            if (!selectedPost.comments) {
                selectedPost.comments = [];
            }
            setPost(selectedPost);
        } else {
            console.error('没有找到对应的帖子');
        }
    }, [postId]);

    const handleBackClick = () => {
        navigate(-1);
    };

    const handleCommentSubmit = () => {
        if (newComment.trim()) {

            const newCommentObj = {
                id: Date.now(),
                user: '当前用户',
                comment: newComment
            };

            const updatedPost = {
                ...post,
                comments: [...(post.comments || []), newCommentObj]
            };


            setPost(updatedPost);


            setNewComment('');


            const storedGroups = JSON.parse(localStorage.getItem('interestGroups') || '[]');
            for (let group of storedGroups) {
                const postIndex = group.posts.findIndex(post => post.id === postId);
                if (postIndex !== -1) {
                    group.posts[postIndex].comments = updatedPost.comments;
                    break;
                }
            }
            localStorage.setItem('interestGroups', JSON.stringify(storedGroups));
        }
    };

    if (!post) {
        return <div>加载中...</div>;
    }

    return (
        <div className="post-page">
            <header className="post-header">
                <button onClick={handleBackClick} className="back-button">返回</button>
                <h1>{post.title}</h1>
            </header>

            <div className="post-content">
                <div className="post-meta">
                    <span className="post-author">作者: {post.author || '未知'}</span>
                    <span className="post-date">发布时间: {post.publishedDate ? new Date(post.publishedDate).toLocaleString() : '未知'}</span>
                </div>
                <p>{post.content}</p>
                {post.image && <img src={post.image} alt="Post content" className="post-image" />}
            </div>

            <section className="post-comments">
                <h2>评论区</h2>
                <div className="comments-list">
                    {(post.comments || []).map((comment) => (
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
