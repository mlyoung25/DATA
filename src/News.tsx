import React, { useState, useEffect } from 'react';
import Tile from './components/Tile';

const News: React.FC = () => {
  interface NewsItem {
    id: number;
    title: string;
    thumbnail: string;
    content: string; // assuming content is used somewhere here
  }

  const [newsItems, setNewsItems] = useState<NewsItem[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/DATA/api/news'); // Updated endpoint
        const data = await response.json();
        setNewsItems(data);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='main'>
      <h1>News</h1>
      <div className='tiles-container'>
        {newsItems.map((item: NewsItem) => (
          <Tile 
            key={item.id} 
            id={item.id} 
            title={item.title} 
            thumbnail={item.thumbnail} 
            description={item.content} 
            linkTo={`/DATA/news/${item.id}`} 
          />
        ))}
      </div>
    </div>
  );
};

export default News;