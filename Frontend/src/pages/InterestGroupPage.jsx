import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './InterestGroupPage.css';

const InterestGroupPage = () => {
    const [isFollowing, setIsFollowing] = useState(false);
    const navigate = useNavigate();
    const { groupId } = useParams();

    useEffect(() => {
        // 从 localStorage 获取关注状态
        const followed = localStorage.getItem(`followedGroup_${groupId}`);
        setIsFollowing(!!followed);
    }, [groupId]);

    const interestGroups = {
        1: { name: '音乐圈', description: '分享音乐的乐趣', activeMembers: 128, posts: [{ id: 1, title: '音乐推荐', content: '分享我最近听到的好音乐...' }] },
        2: { name: '体育圈', description: '参与各种体育活动', activeMembers: 64, posts: [{ id: 2, title: '运动心得', content: '分享我在运动中的一些心得...' }] },
        3: { name: '科技圈', description: '探讨最新科技趋势', activeMembers: 256, posts: [{ id: 3, title: '科技新闻', content: '分享我最近看到的科技新闻...' }] },
        4: { name: '旅行圈', description: '分享旅行见闻', activeMembers: 32, posts: [{ id: 4, title: '旅行计划', content: '计划下一个旅行去哪里...' }] },
        5: { name: '美食圈', description: '品尝各种美食', activeMembers: 512, posts: [{ id: 5, title: '美食推荐', content: '分享我最近吃到的好吃的...' }] },
        6: { name: '摄影圈', description: '分享摄影作品', activeMembers: 16, posts: [{ id: 6, title: '摄影作品', content: '分享我最近拍的一些照片...' }] },
        7: { name: '电影圈', description: '讨论喜欢的电影', activeMembers: 128, posts: [{ id: 7, title: '电影推荐', content: '分享我最近看的一部好电影...' }] },
        8: { name: '读书圈', description: '分享阅读心得', activeMembers: 64, posts: [{ id: 8, title: '读书笔记', content: '分享我最近读的一本好书...' }] },
        9: { name: '手工圈', description: 'DIY手工艺品', activeMembers: 32, posts: [{ id: 9, title: '手工作品', content: '分享我最近做的一些手工作品...' }] },
        10: { name: '游戏圈', description: '玩游戏的乐趣', activeMembers: 256, posts: [{ id: 10, title: '游戏推荐', content: '分享我最近玩的一款好游戏...' }] },
        // 添加更多兴趣圈数据
    };

    const group = interestGroups[groupId] || {};

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

    return (
        <div className="interest-group-page">
            <header className="interest-group-header">
                <button onClick={handleBackClick} className="back-button">返回</button>
                <h1>{group.name}</h1>
                <div className="active-members">
                    活跃成员: {group.activeMembers}
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
                        <p>{post.content}</p>
                    </div>
                ))}
            </section>

            <button onClick={handlePostNewClick} className="add-post-button">+</button>
        </div>
    );
};

export default InterestGroupPage;
