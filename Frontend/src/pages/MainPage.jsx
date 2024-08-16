import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './MainPage.css';


const InterestGroupCard = ({ group, onClick }) => (
    <div className="group-card" onClick={() => onClick(group.id)}>
        <h3>{group.name}</h3>
        <p>{group.description}</p>
    </div>
);

const MainPage = () => {
    const navigate = useNavigate();
    const [interestGroups, setInterestGroups] = useState([]);

    const initialGroups = [
        {
            id: 1, name: '音乐', description: '分享音乐的乐趣', activeMembers: 10,
            post: [
                { id: 101, title: '音乐推荐', author: '张三', date: '2024-08-12', content: '分享我最近听到的好音乐...', image: null, comments: [{ id: 1, user: '李四', comment: '这首音乐我也喜欢！' }, { id: 2, user: '王五', comment: '谢谢推荐，我去听听！' }] },
            ]
        },
        {
            id: 2, name: '体育', description: '参与各种体育活动', activeMembers: 5,
            post: [
                { id: 102, title: '运动心得', author: '李四', date: '2024-08-11', content: '分享我在运动中的一些心得...', image: null, comments: [{ id: 1, user: '张三', comment: '很有启发，谢谢分享！' }] },
            ]
        },
        {
            id: 3, name: '科技', description: '探讨最新科技趋势', activeMembers: 20,
            post: [
                { id: 103, title: 'AI技术分享', author: '王五', date: '2024-08-10', content: '分享我最近学习的AI技术...', image: null, comments: [{ id: 1, user: '张三', comment: '很有意思，谢谢分享！' }] },
            ]
        },
        {
            id: 4, name: '旅行', description: '分享旅行见闻', activeMembers: 15,
            post: [
                { id: 104, title: '旅行日记', author: '赵六', date: '2024-08-09', content: '分享我最近的旅行经历...', image: null, comments: [{ id: 1, user: '张三', comment: '很有意思，谢谢分享！' }] },
            ]
        },
        {
            id: 5, name: '美食', description: '品尝各种美食', activeMembers: 8,
            post: [
                { id: 105, title: '美食推荐', author: '钱七', date: '2024-08-08', content: '分享我最近吃到的好吃的...', image: null, comments: [{ id: 1, user: '张三', comment: '很有味道，谢谢分享！' }] },
            ]
        },
        {
            id: 6, name: '摄影', description: '分享摄影作品', activeMembers: 12,
            post: [
                { id: 106, title: '风景摄影', author: '孙八', date: '2024-08-07', content: '分享我最近拍的风景照...', image: null, comments: [{ id: 1, user: '张三', comment: '很有感觉，谢谢分享！' }] },
            ]
        },
        {
            id: 7, name: '电影', description: '讨论喜欢的电影', activeMembers: 6,
            post: [
                { id: 107, title: '电影推荐', author: '周九', date: '2024-08-06', content: '分享我最近看的好电影...', image: null, comments: [{ id: 1, user: '张三', comment: '很有意思，谢谢分享！' }] },
            ]
        },
        {
            id: 8, name: '读书', description: '分享阅读心得', activeMembers: 3,
            post: [
                { id: 108, title: '读书笔记', author: '吴十', date: '2024-08-05', content: '分享我最近读的好书...', image: null, comments: [{ id: 1, user: '张三', comment: '很有启发，谢谢分享！' }] },
            ]
        },
        {
            id: 9, name: '手工', description: 'DIY手工艺品', activeMembers: 7,
            post: [
                { id: 109, title: '手工作品', author: '郑十一', date: '2024-08-04', content: '分享我最近做的手工作品...', image: null, comments: [{ id: 1, user: '张三', comment: '很有创意，谢谢分享！' }] },
            ]
        },
        {
            id: 10, name: '游戏', description: '玩游戏的乐趣', activeMembers: 9,
            post: [
                { id: 110, title: '游戏推荐', author: '郑十二', date: '2024-08-03', content: '分享我最近玩的好游戏...', image: null, comments: [{ id: 1, user: '张三', comment: '很有意思，谢谢分享！' }] },
            ]
        },
    ];

    useEffect(() => {
        const storedGroups = JSON.parse(localStorage.getItem('interestGroups')) || [];


        if (storedGroups.length === 0) {
            localStorage.setItem('interestGroups', JSON.stringify(initialGroups));
            setInterestGroups(initialGroups);
        } else {
            setInterestGroups(storedGroups);
        }
    }, []);

    const handleUserClick = () => {
        navigate('/profile');
    };

    const handleGroupClick = (id) => {
        navigate(`/group/${id}`);
    };

    const handleCreateGroupClick = () => {
        navigate('/create-group');
    };

    return (
        <div className="main-page">
            <header className="header">
                <button onClick={handleUserClick} className="user-button">
                    我
                </button>
                <h1>
                    FriendJoy <span role="img" aria-label="handshake">🤝</span>
                </h1>
                <button onClick={handleCreateGroupClick} className="create-group-button">
                    创建你的兴趣圈
                </button>
            </header>

            <section className="interest-groups">
                <div className="groups-container">
                    {interestGroups.length > 0 ? (
                        interestGroups.map((group) => (
                            <InterestGroupCard
                                key={group.id}
                                group={group}
                                onClick={handleGroupClick}
                            />
                        ))
                    ) : (
                        <p>没有兴趣圈</p>
                    )}
                </div>
            </section>
        </div>
    );
};

export default MainPage;
