import React from "react";
import { BiSolidCheckShield } from "react-icons/bi";
import { TbShieldCheckFilled } from "react-icons/tb";

const ShopCard = ({ image, title, oldPrice, newPrice }) => {
  return (
    <div className="relative grid w-full bg-white shadow-lg rounded-lg p-4">
      <div className="absolute top-2 right-2 rounded-full p-1">
        <TbShieldCheckFilled size={25} className="text-blue-500" />
      </div>
      <img
        src={image}
        alt={title}
        className="w-full h-40 object-cover rounded-t-lg"
      />
      <div className="mt-4">
        <p className="text-gray-900 ">{title}</p>
        {/* <div className="flex items-center justify-between mt-2">
          <span className="text-red-500 line-through">{oldPrice}</span>
          <span className="text-green-500 font-bold">{newPrice}</span>
        </div> */}
      </div>
    </div>
  );
};

export default ShopCard;
