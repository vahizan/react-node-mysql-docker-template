import express from 'express';
import cors from 'cors';
import {recordsRouter}  from './routers/recordsRouter';

const app = express();
const port = 8080;

let corsOptions = {
    origin: "http://localhost:8081"
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(recordsRouter);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});