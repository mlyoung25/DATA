import sqlite3 from 'sqlite3';
import path from 'path';

const dbPath = path.resolve('./database/articles.db');

const db = new sqlite3.Database(dbPath);

db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS articles (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      thumbnail TEXT NOT NULL,
      content TEXT NOT NULL,
      type TEXT NOT NULL
    )
  `);
});

db.close();