import express from 'express';
import cors from 'cors';
import config from './config/index.js';
const port = config.port;
import indexRoutes from './routes/index.js';
const app = express();

app.use(cors());
app.use('/', indexRoutes);

app.listen(port, () => {
    console.log(`Server is listening at port ${port}`);
});