import React from 'react';

const Box = ({ p, p1, p2 }) => {
  return (
    <div className="bg-gray-800 text-white p-6 rounded-lg flex flex-col gap-3 
                    transition-transform duration-300 hover:scale-105 hover:bg-gray-700 hover:cursor-pointer">
      <div className="text-3xl text-green-400">{p}</div>
      <h3 className="text-xl font-semibold">{p1}</h3>
      <p className="text-gray-400">{p2}</p>
    </div>
  );
};

export default Box;
