import React from "react";
import { IoMdTrendingUp } from "react-icons/io";
const TProductCard = ({ image, title, oldPrice, newPrice, status }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden relative h-72 p-4 flex flex-col justify-between">
      <div className="absolute top-2 right-2 p-1 bg-red-500 h-6 w-6 rounded-full">
        <IoMdTrendingUp size={18} className="text-white" />
      </div>
      <div>
        <img
          src={image}
          alt={title}
          className="h-32 w-full object-contain mb-2"
        />
        <p className="text-sm text-blue-500 mb-1">{status}</p>
        <p className="text-gray-900 text-sm mb-2">{title}</p>
      </div>
      <div className="flex items-center justify-between mt-auto">
        <span className="text-red-500 line-through text-sm">{oldPrice}</span>
        <span className="text-green-500 font-bold text-sm">{newPrice}</span>
      </div>
    </div>
  );
};

export default TProductCard;
