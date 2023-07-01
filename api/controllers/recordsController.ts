import { Request, Response } from 'express';

export const getExampleData = (req: Request, res: Response) => {
    const exampleData = {
        message: 'This is an example response',
    };

    res.json(exampleData);
};