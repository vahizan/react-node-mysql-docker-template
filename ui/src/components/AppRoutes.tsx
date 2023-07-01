import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ExamplePage from './Page/ExamplePage';

import './main.scss';

export const ROUTE_PATHS = {
    ROOT: '/',
    ERROR: '/error',
};

const AppRoutes = () => {
    return (
        <Routes>
            <Route path={ROUTE_PATHS.ROOT} key={'example-page'} element={<ExamplePage />} />
        </Routes>
    );
};

export default AppRoutes;
