import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

interface ArticleProps {
  id: string;
  title: string;
  thumbnail: string;
  content: string;
}

const Article: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [article, setArticle] = useState<ArticleProps | null>(null);

  useEffect(() => {
    const storedNews: ArticleProps[] = JSON.parse(localStorage.getItem('news') || '[]');
    const storedTools: ArticleProps[] = JSON.parse(localStorage.getItem('tools') || '[]');
    const combinedItems = [...storedNews, ...storedTools];
    const foundArticle = combinedItems.find((article: ArticleProps) => article.id === id);
    setArticle(foundArticle || null);
  }, [id]);

  if (!article) return <div>Loading...</div>;

  return (
    <div>
      <img src={article.thumbnail} alt={article.title} />
      <h1>{article.title}</h1>
      <p>{article.content}</p>
    </div>
  );
};

export default Article;