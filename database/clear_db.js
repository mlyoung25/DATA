import sqlite3 from 'sqlite3';
import path from 'path';

const dbPath = path.resolve('./database/articles.db');

const db = new sqlite3.Database(dbPath);

// Clear the articles table

db.serialize(() => {
    db.run('DELETE FROM articles');
    }
);
