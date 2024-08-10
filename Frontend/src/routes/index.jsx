import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import MainPage from '../pages/MainPage';

const AppRoutes = () => (
    <Router>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/main" element={<MainPage />} />
            {/* 其他路由 */}
        </Routes>
    </Router>
);

export default AppRoutes;

