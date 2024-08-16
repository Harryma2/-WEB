import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './InterestGroupPage.css';

const InterestGroupPage = () => {
    const [isFollowing, setIsFollowing] = useState(false);
    const [group, setGroup] = useState(null);
    const navigate = useNavigate();
    const { groupId } = useParams();


    const initialPosts = [
        { id: `${groupId}-1`, title: '欢迎来到兴趣圈', content: '这是我们圈子的第一个帖子，欢迎大家加入讨论！' },
        { id: `${groupId}-2`, title: '如何在这个圈子中发帖？', content: '点击右下角的 + 按钮来发帖，分享你的想法和经历！' },
    ];

    useEffect(() => {
        const groups = JSON.parse(localStorage.getItem('interestGroups')) || [];
        const selectedGroup = groups.find((g) => g.id === parseInt(groupId, 10));

        if (selectedGroup) {

            if (!selectedGroup.posts) {
                selectedGroup.posts = [...initialPosts];
                localStorage.setItem('interestGroups', JSON.stringify(groups));
            }
            setGroup(selectedGroup);
        } else {
            console.error('未找到对应的兴趣圈');
            navigate('/main');
        }

        setIsFollowing(!!localStorage.getItem(`followedGroup_${groupId}`));
    }, [groupId, navigate]);

    const handleBackClick = () => {
        navigate(-1);
    };

    const handlePostNewClick = () => {
        navigate(`/group/${groupId}/new-post`);
    };

    const handlePostClick = (id) => {
        navigate(`/post/${id}`);
    };

    const handleFollowClick = () => {
        const newIsFollowing = !isFollowing;
        setIsFollowing(newIsFollowing);

        if (newIsFollowing) {
            localStorage.setItem(`followedGroup_${groupId}`, 'true');
        } else {
            localStorage.removeItem(`followedGroup_${groupId}`);
        }
    };

    if (!group) {
        return <div>加载中...</div>;
    }

    return (
        <div className="interest-group-page">
            <header className="interest-group-header">
                <button onClick={handleBackClick} className="back-button">返回</button>
                <h1>{group.name}</h1>
                <div className="active-members">
                    活跃成员: {group.activeMembers || 0}
                </div>
                <button
                    onClick={handleFollowClick}
                    className={`follow-button ${isFollowing ? 'following' : ''}`}
                >
                    {isFollowing ? '已关注' : '关注'}
                </button>
            </header>

            <div className="group-description">
                <p>{group.description}</p>
            </div>

            <section className="group-posts-section">
                {group.posts && group.posts.map((post) => (
                    <div key={post.id} className="post-card" onClick={() => handlePostClick(post.id)}>
                        <h3>{post.title}</h3>
                        <p>{post.content.length > 100 ? `${post.content.substring(0, 100)}...` : post.content}</p>
                    </div>
                ))}
            </section>

            <button onClick={handlePostNewClick} className="add-post-button">+</button>
        </div>
    );
};

export default InterestGroupPage;
