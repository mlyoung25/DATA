// News.tsx
import React, { useState, useEffect } from 'react';
import Tile from './components/tile';

const News: React.FC = () => {
  const [newsItems, setNewsItems] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      const response = await fetch('/api/news');
      const data = await response.json();
      setNewsItems(data);
    };

    fetchNews();
  }, []);

  return (
    <div className='main'>
      <h1>News</h1>
      <div className="tiles-container">
        {newsItems.map((item) => (
          <Tile key={item.id} {...item} linkTo={`/DATA/news/${item.id}`} />
        ))}
      </div>
    </div>
  );
};

export default News;