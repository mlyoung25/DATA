// Article.tsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

interface ArticleProps {
  id: string;
  title: string;
  thumbnail: string;
  content: string;
}

const Article: React.FC<ArticleProps> = () => {
  const { id } = useParams<{ id: string }>();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    const fetchArticle = async () => {
      const response = await fetch(`/api/article/${id}`);
      const data = await response.json();
      setArticle(data);
    };

    fetchArticle();
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