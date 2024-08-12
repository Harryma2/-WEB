import React from 'react';
import { useNavigate } from 'react-router-dom';
import './MainPage.css';

// 子组件：InterestGroupCard
const InterestGroupCard = ({ group, onClick }) => (
    <div className="group-card" onClick={() => onClick(group.id)}>
        <h3>{group.name}</h3>
        <p>{group.description}</p>
    </div>
);

const MainPage = () => {
    const navigate = useNavigate();

    const interestGroups = [
        { id: 1, name: '音乐', description: '分享音乐的乐趣' },
        { id: 2, name: '体育', description: '参与各种体育活动' },
        { id: 3, name: '科技', description: '探讨最新科技趋势' },
        { id: 4, name: '旅行', description: '分享旅行见闻' },
        { id: 5, name: '美食', description: '品尝各种美食' },
        { id: 6, name: '摄影', description: '分享摄影作品' },
        { id: 7, name: '电影', description: '讨论喜欢的电影' },
        { id: 8, name: '读书', description: '分享阅读心得' },
        { id: 9, name: '手工', description: 'DIY手工艺品' },
        { id: 10, name: '游戏', description: '玩游戏的乐趣' },
    ];

    const handleUserClick = () => {
        navigate('/profile');
    };

    const handleGroupClick = (id) => {
        navigate(`/group/${id}`);
    };

    const handleCreateGroupClick = () => {
        navigate('/create-group'); // 跳转到创建兴趣圈的页面
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
                    {interestGroups.map((group) => (
                        <InterestGroupCard
                            key={group.id}
                            group={group}
                            onClick={handleGroupClick}
                        />
                    ))}
                </div>
            </section>
        </div>
    );
};

export default MainPage;
