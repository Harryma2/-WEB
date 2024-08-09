import React from 'react';
import { useNavigate } from 'react-router-dom';
import './MainPage.css';

const MainPage = () => {
    const navigate = useNavigate();

    const interestGroups = [
        { id: 1, name: '音乐', description: '分享音乐的乐趣' },
        { id: 2, name: '体育', description: '参与各种体育活动' },
        { id: 3, name: '科技', description: '探讨最新科技趋势' },
        { id: 4, name: '旅行', description: '分享旅行见闻' },
        { id: 5, name: '美食', description: '品尝各种美食' },
        { id: 6, name: '摄影', description: '分享摄影作品' },
        { id: 7, name: '电影', description: '讨论最新电影' },
        { id: 8, name: '读书', description: '分享阅读心得' },
        { id: 9, name: '手工', description: 'DIY手工艺品' },
        { id: 10, name: '游戏', description: '玩游戏的乐趣' },
        // 可以添加更多的兴趣圈
    ];

    const handleUserClick = () => {
        // 导航到用户个人资料页面
        navigate('/profile');
    };

    const handleGroupClick = (id) => {
        // 导航到兴趣圈详情页
        navigate(`/group/${id}`);
    };

    return (
        <div className="main-page">
            <header className="header">
                <button onClick={handleUserClick} className="user-button">
                    用户个人按钮
                </button>
                <h1>好友趣</h1>
            </header>

            <section className="interest-groups">
                <h2>兴趣圈分类</h2>
                <div className="groups-container">
                    {interestGroups.map((group) => (
                        <div key={group.id} className="group-card" onClick={() => handleGroupClick(group.id)}>
                            <h3>{group.name}</h3>
                            <p>{group.description}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default MainPage;
