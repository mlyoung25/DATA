// Tools.tsx
import React, { useState, useEffect } from 'react';
import Tile from './components/tile';
import './App.css'

const Tools: React.FC = () => {
  const [tools, setTools] = useState([]);

  useEffect(() => {
    const fetchTools = async () => {
      const response = await fetch('/api/tools');
      const data = await response.json();
      setTools(data);
    };

    fetchTools();
  }, []);

  return (
    <div className='main'>
      <h1>Tools</h1>
      <div className="tiles-container">
        {tools.map((tool) => (
          <Tile key={tool.id} {...tool} linkTo={`/DATA/tools/${tool.id}`} />
        ))}
      </div>
    </div>
  );
};

export default Tools;