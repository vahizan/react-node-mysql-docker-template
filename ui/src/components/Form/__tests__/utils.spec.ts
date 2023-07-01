
jest.mock('react-i18next', () => ({
    getI18n: () => ({ t: (key: string) => key })
}));

describe('form utils', () => {

});
