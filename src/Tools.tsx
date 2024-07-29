import React, { useState, useEffect } from 'react';
import Tile from './components/Tile';

const Tools: React.FC = () => {
  interface ToolsItem {
    id: number;
    title: string;
    thumbnail: string;
    description: string;
  }
  
  const [toolsItems, setToolsItems] = useState<ToolsItem[]>([]);

  useEffect(() => {
    const storedTools = JSON.parse(localStorage.getItem('tools') || '[]');
    setToolsItems(storedTools);
  }, []);

  return (
    <div className='main'>
      <h1>Tools</h1>
      <div className="tiles-container">
        {toolsItems.map((item: ToolsItem) => (
          <Tile key={item.id}
                id={item.id} 
                title={item.title} 
                thumbnail={item.thumbnail} 
                description={item.description} 
                linkTo={`/DATA/tools/${item.id}`} />
        ))}
      </div>
    </div>
  );
};

export default Tools;