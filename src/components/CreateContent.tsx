// CreateContent Component

import React, { useState } from 'react';
import './CreateContent.css'; // Import your custom CSS file

const CreateContent: React.FC = () => {
  const [title, setTitle] = useState('');
  const [thumbnail, setThumbnail] = useState<File | null>(null);
  const [content, setContent] = useState('');
  const [type, setType] = useState('news');

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setThumbnail(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    if (!thumbnail) {
      alert('Please select a thumbnail image');
      return;
    }
  
    const formData = new FormData();
    formData.append('title', title);
    formData.append('thumbnail', thumbnail);
    formData.append('content', content);
    formData.append('type', type);
  
    try {
      const response = await fetch('/DATA/api/createContent', {
        method: 'POST',
        body: formData,
      });
  
      if (response.ok) {
        alert('Content created successfully');
        setTitle('');
        setThumbnail(null);
        setContent('');
      } else {
        const errorMessage = await response.text();
        console.error('Error response from server:', errorMessage);
        alert('Failed to create content: ' + errorMessage);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while creating content');
    }
  };

  return (
    <div className='create'>
      <div className='py-12'></div>

      <form onSubmit={handleSubmit}>
        <h2>Create New Content</h2>
        <div className='form-group'>
          <label>
            Type:
            <select value={type} onChange={(e) => setType(e.target.value)}>
              <option value='news' className='text-white'>News</option>
              <option value='tool'>Tool</option>
            </select>
          </label>
        </div>
        <div className='form-group'>
          <label>
            Title:
            <input type='text' value={title} onChange={(e) => setTitle(e.target.value)} />
          </label>
        </div>
        <div className='form-group'>
          <label>
            Thumbnail:
            <input type='file' onChange={handleFileChange} />
          </label>
        </div>
        <div className='form-group'>
          <label>
            Content:
            <textarea value={content} onChange={(e) => setContent(e.target.value)}></textarea>
          </label>
        </div>
        <button type='submit'>Publish</button>
      </form>

      <div className='py-36'></div>
    </div>
  );
};

export default CreateContent;
