import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import { ExampleProvider } from './Context/ExampleContext';
import '../i18n/config';

const App = () => {
    return (
            <ExampleProvider>
                <Router basename="/">
                    <AppRoutes />
                </Router>
            </ExampleProvider>
    );
};

export default App;
