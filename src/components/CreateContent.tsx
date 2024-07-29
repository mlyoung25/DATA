// CreateContent.tsx
import React, { useState } from 'react';
import './../App.css'


const CreateContent: React.FC = () => {
  const [title, setTitle] = useState('');
  const [thumbnail, setThumbnail] = useState('');
  const [content, setContent] = useState('');
  const [type, setType] = useState('news'); // can be 'news' or 'tool'

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newArticle = { title, thumbnail, content, type };

    const response = await fetch('/api/createContent', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newArticle),
    });

    if (response.ok) {
      alert('Content created successfully');
      setTitle('');
      setThumbnail('');
      setContent('');
    } else {
      alert('Failed to create content');
    }
  };

  return (
    <div className='main'>
        <form onSubmit={handleSubmit}>
        <h2>Create New Content</h2>
        <div>
            <label>
            Type:
            <select value={type} onChange={(e) => setType(e.target.value)}>
                <option value="news">News</option>
                <option value="tool">Tool</option>
            </select>
            </label>
        </div>
        <div>
            <label>
            Title:
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
            </label>
        </div>
        <div>
            <label>
            Thumbnail URL:
            <input type="text" value={thumbnail} onChange={(e) => setThumbnail(e.target.value)} />
            </label>
        </div>
        <div>
            <label>
            Content:
            <textarea value={content} onChange={(e) => setContent(e.target.value)}></textarea>
            </label>
        </div>
        <button type="submit">Publish</button>
        </form>
    </div>
  );
};

export default CreateContent;