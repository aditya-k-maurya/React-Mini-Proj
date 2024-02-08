import React from 'react';
import { Link } from 'react-router-dom';

function ProjBox({ mini }) {

  const { title, description, image, path } = mini;


  return (
    <div className="w-80 h-auto bg-neutral-300 rounded-3xl text-neutral-800 p-4 flex flex-col items-start justify-center gap-3 hover:bg-gray-300 hover:shadow-2xl hover:shadow-orange-400 transition-shadow">
      <div>
        <img src={image} alt="" />
      </div>
      <div className="">
        <p className="font-bold text-xl text-orange-900">{title}</p>
        <p className="">{description}</p>
      </div>

      <Link to={path}>
        <button className="bg-orange-800 text-white font-bold p-2 px-6 rounded-xl hover:bg-orange-700 transition-colors">
          Let's go
        </button>
      </Link>
    </div>
  );
}

export default ProjBox;
