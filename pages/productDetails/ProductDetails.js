import React, { useState } from "react";
import { BiSolidRightArrow } from "react-icons/bi";
import { FaWhatsapp } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";

const ProductDetails = () => {
  const [selectedImage, setSelectedImage] = useState(
    "https://medleybiz.com.bd/admin/public/storage/product-photos/6668418374852.png"
  );
  const [zoomLevel, setZoomLevel] = useState(1);

  const images = [
    "https://medleybiz.com.bd/admin/public/storage/product-photos/6668418374852.png",
    "https://medleybiz.com.bd/admin/public/storage/product-photos/666841836dd74.png",
    "https://medleybiz.com.bd/admin/public/storage/product-photos/6668418376e34.png",
    "https://medleybiz.com.bd/admin/public/storage/product-photos/6668418370c1c.png",
  ];

  const handleZoomIn = () => {
    setZoomLevel((prevZoomLevel) => Math.min(prevZoomLevel + 0.2, 3)); // Max zoom level is 3
  };

  const handleZoomOut = () => {
    setZoomLevel((prevZoomLevel) => Math.max(prevZoomLevel - 0.2, 1)); // Min zoom level is 1
  };

  return (
    <div className="container mx-auto p-4">
      <div className="grid lg:grid-cols-2 grid-cols-1 bg-white overflow-hidden">
        <div className="flex max-w-xl max-h-lg md:w-1/2 p-4 relative">
          <img
            src={selectedImage}
            alt="OSAKA Multi-Purpose Blender"
            className="max-w-md p-2 border shadow rounded-lg h-full object-cover"
            style={{ transform: `scale(${zoomLevel})` }}
          />
          <div className="absolute top-6 left-96 flex flex-col space-y-2">
            <button
              className="bg-white rounded-full p-2 shadow"
              onClick={handleZoomIn}
            >
              <svg
                className="w-6 h-6 text-gray-800"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 4v16m8-8H4"
                ></path>
              </svg>
            </button>
            <button
              className="bg-white rounded-full p-2 shadow"
              onClick={handleZoomOut}
            >
              <svg
                className="w-6 h-6 text-gray-800"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M20 12H4"
                ></path>
              </svg>
            </button>
          </div>
          <div className="ml-4">
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`OSAKA Multi-Purpose Blender ${index + 1}`}
                className="rounded-md shadow mt-2 w-16 h-16 object-cover mx-1 border rounded cursor-pointer"
                onClick={() => setSelectedImage(image)}
              />
            ))}
          </div>
        </div>
        <div className="md:w-1/2 p-4">
          <h3 className="text-2xl font-semibold">
            OSAKA Multi-Purpose Blender | Super Fast Blender | ওসাকা
          </h3>
          <div className="flex items-center mt-2">
            <span className="text-2xl font-bold text-black">৳1299</span>
            <span className="text-gray-500 line-through ml-2">৳1599</span>
            <span className="ml-2 text-white bg-green-500 rounded-full px-2 py-1 ">
              -19% OFF
            </span>
          </div>
          <div className="mt-2">
            <span>
              <span className="font-bold">Availability:</span>{" "}
              <span className="text-green-600">In Stock</span>
            </span>
            <span className="ml-4">
              <span className="font-bold">SKU:</span>{" "}
              <span className="text-green-600">TEPMBR</span>
            </span>
          </div>
          <div className="mt-4">
            <li className=" font-semibold">Detailed Specifications:</li>
            <ul className="list-disc list-inside text-sm text-gray-700 mt-2">
              <li className="list-none flex">
                <BiSolidRightArrow className="text-green-500 mr-1" />
                গ্রাইন্ডিংয়ে মাছ এবং মাংস শিঙ্গে মেশানোর কার্যকারিতা খুব দ্রুত
              </li>
              <li className="list-none flex">
                <BiSolidRightArrow className="text-green-500 mr-1" />
                ওসাকা মাল্টিপারপাজ ব্লেন্ডার রেডি-কাট কাটার দক্ষতা
              </li>
              <li className="list-none flex">
                <BiSolidRightArrow className="text-green-500 mr-1" />
                OSAKA ব্লেন্ডার একধরণের নতুন ডিজাইন করা শার্প ব্লেড
              </li>
              <li className="list-none flex">
                <BiSolidRightArrow className="text-green-500 mr-1" />
                ওসাকা ব্লেন্ডার ৪টি কাটার ব্লেডের মেশিন
              </li>
              <li className="list-none flex items-center">
                <a href="#" className="text-[#F30012] underline mr-2">
                  View More Info
                </a>{" "}
                |
                <span className="ml-2 flex items-center text-[#28A745]">
                  <FaWhatsapp /> <span className="ml-1">Ask for details</span>
                </span>
              </li>
            </ul>
          </div>
          <div className="flex items-center mt-6">
            <li className="mr-2 font-bold">Quantity:</li>
            <div className="flex items-center">
              <button className="px-3 py-1 bg-gray-200 font-bold text-gray-700 rounded">
                -
              </button>
              <input
                type="number"
                defaultValue="1"
                className="w-12 text-center border rounded mx-2"
              />
              <button className="px-3 font-bold py-1 bg-[#F30012] text-white rounded">
                +
              </button>
            </div>
          </div>
          <div className="flex mt-2 space-x-4">
            <button className="w-40 py-2 bg-[#D40010] text-white rounded-lg ">
              Order Now
            </button>
            <button className="flex items-center w-40 py-2 px-4 bg-[#454545] text-white rounded-lg ">
              <FaCartShopping className="mr-2" size={25} /> Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
