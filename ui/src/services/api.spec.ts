import axios from 'axios';
import { getSomething } from './api';

describe('api calls', () => {
    afterEach(() => jest.restoreAllMocks());
    beforeEach(() => jest.resetAllMocks());

    it('When getSomething is called with argument Then should return value', async () => {
        jest.spyOn(axios, 'post').mockResolvedValue({ status: 200, data: {} });

        const expectedBody = {
           something: "something"
        };
        await getSomething(expectedBody);

        expect(axios.post).toHaveBeenCalledWith('/api/something', expectedBody);
        expect(axios.post).toHaveBeenCalledTimes(1);
    });
});
