import { Router } from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const pages = Router();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const publicPath = path.join(__dirname, '../../../public');

pages.get('/', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

pages.get('/agendamento', (req, res) => {
  res.sendFile(path.join(publicPath, 'agendamento.html'));
});


pages.get('/cardapio', (req, res) => {
  res.sendFile(path.join(publicPath, 'cadapio.html'));
});


pages.get('/contato', (req, res) => {
  res.sendFile(path.join(publicPath, 'contato.html'));
});


pages.get('/eventos', (req, res) => {
  res.sendFile(path.join(publicPath, 'eventos.html'));
});


export default pages;