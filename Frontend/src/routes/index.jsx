import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import MainPage from '../pages/MainPage';
import UserProfilePage from '../pages/UserProfilePage';
import InterestGroupPage from '../pages/InterestGroupPage';
import PostPage from '../pages/PostPage';
import NewPostPage from '../pages/NewPostPage';
import CreateGroupPage from '../pages/CreateGroupPage';

const AppRoutes = () => (
    <Router>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/main" element={<MainPage />} />
            <Route path="/profile" element={<UserProfilePage />} />
            <Route path="/group/:groupId" element={<InterestGroupPage />} />
            <Route path='/post/:postId' element={<PostPage />} />
            <Route path='/group/:groupId/new-post' element={<NewPostPage />} />
            <Route path='/create-group' element={<CreateGroupPage />} />
            {/* 其他路由 */}
        </Routes>
    </Router>
);

export default AppRoutes;

