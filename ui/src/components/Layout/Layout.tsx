import React, { FunctionComponent } from 'react';
import Navigation from './Navigation';
const Layout: FunctionComponent = ({ children }) => {
    return (
        <>
            <Navigation />
            {children}
        </>
    );
};

export default Layout;
