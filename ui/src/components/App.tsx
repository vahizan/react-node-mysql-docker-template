import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import { ExampleProvider } from './Context/ExampleContext';
import Layout from './Layout/Layout';
import '../i18n/config';

const App = () => {
    return (
            <ExampleProvider>
                <Router basename="/">
                        <Layout>
                            <AppRoutes />
                        </Layout>
                </Router>
            </ExampleProvider>
    );
};

export default App;
