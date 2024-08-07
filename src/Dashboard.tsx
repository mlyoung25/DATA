import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard: React.FC = () => {
  return (
    <div>
      <div className='py-12'></div>

      <h1 className='py-24 bg-blue-900 text-white text-right pr-12 text-5xl'>Welcome 'user'!</h1>


      <div className='button-container'>
        <div className='py-12'></div>
        <Link to="/DATA/create-content">
          <button className='w-3/4 py-8 float-left bg-zinc-300 text-black font-bold text-left text-xl mt-4'>
            Create News/Tools
          </button>
        </Link> 
        <Link to="/DATA/create-content">
          <button className='w-3/4 py-8 float-left bg-zinc-300 text-black font-bold text-left text-xl mt-4'>
            Edit News/Tools
          </button>
        </Link>        
        <Link to="/DATA/create-content">
          <button className='w-3/4 py-8 float-left bg-zinc-300 text-black font-bold text-left text-xl mt-4'>
            Delete News/Tools
          </button>
        </Link>        
        
        <div className='py-12'></div>
        <div className='py-12'></div>

                <div className='py-12'></div>
        
        <div></div>

      </div>
      
      <div className='py-36'></div>
    </div>
  );
};

export default Dashboard;