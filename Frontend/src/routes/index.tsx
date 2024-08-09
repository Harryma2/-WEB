import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import InterestPage from '../pages/InterestPage';

function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/interest/:id" element={<InterestPage />} />
            </Routes>
        </Router>
    );
}

export default AppRoutes;
