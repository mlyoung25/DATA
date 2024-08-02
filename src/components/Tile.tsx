import React from 'react';
import { Link } from 'react-router-dom';

interface TileProps {
  id: number;
  title: string;
  thumbnail: string;
  description: string;
  linkTo: string;
}

const Tile: React.FC<TileProps> = ({ title, thumbnail, description, linkTo }) => {
  const imagePath = require(`../assets/${thumbnail}`).default
  return (
    <div className="tile">
      <img src={imagePath} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <Link to={linkTo}>Read more</Link>
    </div>
  );
};

export default Tile;