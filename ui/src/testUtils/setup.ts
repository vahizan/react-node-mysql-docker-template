import { configure } from '@testing-library/react';

configure({ testIdAttribute: 'data-test' });

const API_URL = 'http://fake-test-api.com';
process.env.API = API_URL;

global.beforeEach(() => {
    jest.spyOn(window.localStorage.__proto__, 'setItem').mockImplementation();
    jest.spyOn(window.localStorage.__proto__, 'getItem').mockImplementation();
});

global.afterEach(() => {
    jest.clearAllMocks();
});

export const setupIntersectionObserverMock = ({ observe = () => null, unobserve = () => null } = {}): void => {
    window.IntersectionObserver = jest.fn().mockReturnValue({
        observe,
        unobserve
    });
};

export { API_URL };
