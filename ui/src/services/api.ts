import axios from 'axios';

export const getSomething = async (
    body: any
): Promise<any> => {
    const url = '/api/something';
    const { data } = await axios.post(url, body);
    return data;
};
