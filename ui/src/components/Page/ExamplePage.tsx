import React from 'react';
import { useTranslation } from 'react-i18next';

const ExamplePage = () => {
    const { t } = useTranslation();
    return (
       <main>
           <div>HELLO EXAMPLE PAGE</div>
       </main>
    );
};

export default ExamplePage;
