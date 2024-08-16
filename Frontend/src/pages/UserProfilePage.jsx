import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './UserProfilePage.css';

const UserProfilePage = () => {
    const [followedGroups, setFollowedGroups] = useState([]);
    const [recentPosts, setRecentPosts] = useState([]);
    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userHobbies, setUserHobbies] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const storedUserName = localStorage.getItem('userName');
        const storedUserEmail = localStorage.getItem('userEmail');
        const storedUserHobbies = localStorage.getItem('userHobbies');

        if (storedUserName) {
            setUserName(storedUserName);
        }

        if (storedUserEmail) {
            setUserEmail(storedUserEmail);
        }

        if (storedUserHobbies) {
            setUserHobbies(storedUserHobbies);
        }


        const followedGroups = [];
        for (let i = 1; i <= 20; i++) {
            const followed = localStorage.getItem(`followedGroup_${i}`);
            if (followed) {
                followedGroups.push({ id: i, name: `兴趣圈 ${i}` });
            }
        }
        setFollowedGroups(followedGroups);


        const userPosts = [];
        const storedGroups = JSON.parse(localStorage.getItem('interestGroups') || '[]');
        storedGroups.forEach(group => {
            if (group.posts) {
                group.posts.forEach(post => {

                    if (post.author === storedUserEmail) {
                        userPosts.push(post);
                    }
                });
            }
        });
        setRecentPosts(userPosts);
    }, []);

    const handleBackClick = () => {
        navigate('/main');
    };

    const handlePostClick = (id) => {
        navigate(`/post/${id}`);
    };

    const handleGroupClick = (id) => {
        navigate(`/group/${id}`);
    };

    return (
        <div className="user-profile-page">
            <header className="profile-header">
                <button onClick={handleBackClick} className="back-button">返回</button>
                <h1>我的信息</h1>
            </header>

            <div className="profile-user-info">
                <img src="/src/assets/avatar.jpg" alt="用户头像" className="profile-user-avatar" />
                <h2 className="profile-user-name">用户名: {userName}</h2>
                <p className="profile-user-email">邮箱: {userEmail}</p>
                <p className="profile-user-details">爱好：{userHobbies}</p>
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
