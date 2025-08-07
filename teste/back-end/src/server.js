import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import { apiRoutes } from './routes/index.js';
import pagesRouter from './routes/pages/index.js';

import './database/db.js';

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, '../public')));

app.use('/', apiRoutes);
app.use('/', pagesRouter);

app.listen(3333, () => {
    console.log('Server is running on port 3333 🚀');
})
