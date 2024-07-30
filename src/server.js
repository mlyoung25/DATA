import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import multer from 'multer';
import path from 'path';
import { fileURLToPath } from 'url';
import sqlite3 from 'sqlite3';

// Determine the __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dbPath = path.resolve(__dirname, '../database/articles.db');
const db = new sqlite3.Database(dbPath);

const app = express();
app.use(bodyParser.json());
app.use(cors());

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, '../public/uploads')); // Adjust the path to the uploads directory
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});
const upload = multer({ storage });

// Serve static files from the public directory
app.use('/DATA/public', express.static(path.join(__dirname, '../public')));

// Get news articles
app.get('/DATA/api/news', (req, res) => {
  db.all('SELECT * FROM articles WHERE type = ?', ['news'], (err, rows) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(rows);
  });
});

// Get tool articles
app.get('/DATA/api/tools', (req, res) => {
  db.all('SELECT * FROM articles WHERE type = ?', ['tool'], (err, rows) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(rows);
  });
});

// Get an article by ID
app.get('/DATA/api/article/:id', (req, res) => {
  const { id } = req.params;
  db.get('SELECT * FROM articles WHERE id = ?', [id], (err, row) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(row);
  });
});

// Handle content creation with file upload
app.post('/DATA/api/createContent', upload.single('thumbnail'), (req, res) => {
  console.log('Received body:', req.body);
  console.log('Received file:', req.file);
  const { title, content, type } = req.body;
  const thumbnail = req.file ? req.file.filename : null;

  if (!title || !content || !type || !thumbnail) {
    return res.status(400).send('All fields are required');
  }


  db.run(
    'INSERT INTO articles (title, thumbnail, content, type) VALUES (?, ?, ?, ?)',
    [title, thumbnail, content, type],
    function (err) {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      const newArticle = {
        id: this.lastID,
        title,
        thumbnail,
        content,
        type,
      };
      res.status(201).json(newArticle);
    }
  );
});

app.listen(3001, () => {
  console.log('Server is running on port 3001');
});