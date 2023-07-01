import React from 'react';
import styles from './layout.module.scss';

const Navigation = () => {

    return (
        <nav className={styles.navigation}>
            <a id={styles.navContent} href={"some url"}>
            </a>
        </nav>
    );
};
export default Navigation;
