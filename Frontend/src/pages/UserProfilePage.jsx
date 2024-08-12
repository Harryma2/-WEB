import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './UserProfilePage.css';

const UserProfilePage = () => {
    const [followedGroups, setFollowedGroups] = useState([]);
    const navigate = useNavigate();

    const user = {
        name: '张三',
        avatar: '/src/assets/avatar.jpg', // 替换为用户头像的路径
        details: '爱好：音乐、旅行、美食'
    };

    const recentPosts = [
        { id: 1, title: '我最近去了一个很棒的地方', content: '分享我在XXX的旅行经历...' },
        { id: 2, title: '音乐推荐', content: '最近发现了一些很棒的音乐...' },
        // 添加更多的帖子
    ];

    useEffect(() => {
        // 从 localStorage 获取用户关注的兴趣圈
        const followedGroups = [];
        for (let i = 1; i <= 10; i++) {
            const followed = localStorage.getItem(`followedGroup_${i}`);
            if (followed) {
                followedGroups.push({ id: i, name: `兴趣圈 ${i}` }); // 根据实际需求调整兴趣圈名称
            }
        }
        setFollowedGroups(followedGroups);
    }, []);

    const handleBackClick = () => {
        navigate('/main'); // 返回主界面
    };

    const handlePostClick = (id) => {
        navigate(`/post/${id}`); // 导航到帖子详情页
    };

    const handleGroupClick = (id) => {
        navigate(`/group/${id}`); // 导航到兴趣圈详情页
    };

    return (
        <div className="user-profile-page">
            <header className="profile-header">
                <button onClick={handleBackClick} className="back-button">返回</button>
                <h1>我的信息</h1>
            </header>

            <div className="profile-user-info">
                <img src={user.avatar} alt="用户头像" className="profile-user-avatar" />
                <h2 className="profile-user-name">{user.name}</h2>
                <p className="profile-user-details">{user.details}</p>
            </div>

            <section className="profile-recent-posts">
                <h2>最近的帖子</h2>
                <div className="profile-posts-list">
                    {recentPosts.map((post) => (
                        <div key={post.id} className="profile-post-card" onClick={() => handlePostClick(post.id)}>
                            <h3>{post.title}</h3>
                            <p>{post.content}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="profile-interest-groups">
                <h2>我的兴趣圈</h2>
                <div className="profile-groups-list">
                    {followedGroups.map((group) => (
                        <div key={group.id} className="profile-group-card" onClick={() => handleGroupClick(group.id)}>
                            <h3>{group.name}</h3>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default UserProfilePage;
