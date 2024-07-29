import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
app.use(bodyParser.json());
app.use(cors());

let articles = []; // This would be a database in a real implementation

app.get('/api/news', (req, res) => {
  res.json(articles.filter(article => article.type === 'news'));
});

app.get('/api/tools', (req, res) => {
  res.json(articles.filter(article => article.type === 'tool'));
});

app.get('/api/article/:id', (req, res) => {
  const article = articles.find(article => article.id === parseInt(req.params.id));
  res.json(article);
});

app.post('/api/createContent', (req, res) => {
  const { title, thumbnail, content, type } = req.body;
  const newArticle = { id: Date.now(), title, thumbnail, content, type };
  articles.push(newArticle);
  res.status(201).json(newArticle);
});

app.listen(3001, () => {
  console.log('Server is running on port 3001');
});