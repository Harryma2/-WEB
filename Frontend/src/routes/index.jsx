import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LoginForm from '../components/LoginForm';
import MainPage from '../pages/MainPage';

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Navigate to="/login" />} />
                <Route path="/login" element={<LoginForm />} />
                <Route path="/main" element={<MainPage />} />
            </Routes>
        </Router>
    );
};

export default AppRoutes;
