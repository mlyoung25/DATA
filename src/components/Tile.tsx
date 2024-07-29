// Tile.tsx
import React from 'react';
import { Link } from 'react-router-dom';

// Define the props interface
interface TileProps {
  id: number;
  title: string;
  thumbnail: string;
  description: string;
  linkTo: string;
}

// Functional component with typed props
const Tile: React.FC<TileProps> = ({ id, title, thumbnail, description, linkTo }) => {
  return (
    <div className="tile">
      <img src={thumbnail} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <Link to={linkTo}>Read more</Link>
    </div>
  );
};

export default Tile;