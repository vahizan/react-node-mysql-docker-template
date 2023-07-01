
import { getExampleData } from '../controllers/recordsController';

import express from 'express';

export const recordsRouter = express.Router();

recordsRouter.get('/', getExampleData);
recordsRouter.post('/', () => {});