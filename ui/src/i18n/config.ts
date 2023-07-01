import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
    fallbackLng: 'en-GB',
    lng: 'en-GB',
    resources: {
        ['en-GB']: {
            translations: require('./locales/en-GB/translations.json')
        }
    },
    ns: ['translations'],
    defaultNS: 'translations'
});

i18n.languages = ['en-GB'];

export default i18n;
