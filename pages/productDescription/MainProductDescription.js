import { useState } from "react";
import Description from "./Description";
import Specifications from "./Specifications";
import Features from "./Features";
import Faq from "./Faq";
import {
  FaCheckCircle,
  FaMoneyBillAlt,
  FaShippingFast,
  FaThumbsUp,
  FaTruck,
} from "react-icons/fa";

const MainProductDescription = () => {
  const [activeButton, setActiveButton] = useState(0);

  const handleButtonClick = (index) => {
    setActiveButton(index);
  };

  return (
    <div className="container  p-4">
      <div className=" justify-between hidden lg:flex ">
        <div className=" border border-gray-300 p-3" style={{ width: "840px" }}>
          <div className="mb-2 rounded-lg">
            <button
              className={`bg-gray-300 rounded-lg py-1 px-2 ${
                activeButton === 0 ? "p-btn text-white" : ""
              }`}
              onClick={() => handleButtonClick(0)}
            >
              Description
            </button>

            <button
              className={`bg-gray-300 rounded-lg py-1 px-2 ml-2 ${
                activeButton === 1 ? "p-btn text-white" : ""
              }`}
              onClick={() => handleButtonClick(1)}
            >
              Specifications
            </button>

            <button
              className={`bg-gray-300 rounded-lg py-1 px-2 ml-2 ${
                activeButton === 2 ? "p-btn text-white" : ""
              }`}
              onClick={() => handleButtonClick(2)}
            >
              Features
            </button>
            <button
              className={`bg-gray-300 rounded-lg py-1 px-2 ml-2 ${
                activeButton === 3 ? "p-btn text-white" : ""
              }`}
              onClick={() => handleButtonClick(3)}
            >
              FAQs
            </button>
          </div>

          <div className="border border-gray-300 p-4">
            {activeButton === 0 && <Description />}
            {activeButton === 1 && <Specifications />}
            {activeButton === 2 && <Features />}
            {activeButton === 3 && <Faq />}
          </div>
        </div>

        <div className="w-96 p-4 bg-white border border-gray-300 shadow-lg rounded-lg">
          <div className="w-full h-56 bg-gray-200 flex items-center justify-center">
            <iframe
              width="560"
              height="230"
              src="https://www.youtube.com/embed/VtXv-gbYnj0?si=6aKHnoWV7MGm3QBP"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
          <ul className="mt-4 space-y-2">
            <li className="flex items-center text-green-500">
              <FaCheckCircle className="mr-2" />
              Product receive within 02 - 03 days
            </li>
            <li className="flex items-center text-purple-500">
              <FaThumbsUp className="mr-2" />
              Quality Product
            </li>
            <li className="flex items-center text-orange-500">
              <FaMoneyBillAlt className="mr-2" />
              Cash On Delivery Available
            </li>
            <li className="flex items-center text-blue-500">
              <FaTruck className="mr-2" />
              Delivery Charge Inside Dhaka Free
            </li>
            <li className="flex items-center text-pink-500">
              <FaShippingFast className="mr-2" />
              Delivery Charge Outside Dhaka Free
            </li>
          </ul>
        </div>
      </div>
      <div className=" justify-between flex-col lg:hidden xl:hidden ">
        <div className=" border border-gray-300 p-3">
          <div className="mb-2 rounded-lg">
            <button
              className={`bg-gray-300 rounded-lg py-1 px-2 ${
                activeButton === 0 ? "p-btn text-white" : ""
              }`}
              onClick={() => handleButtonClick(0)}
            >
              Description
            </button>

            <button
              className={`bg-gray-300 rounded-lg py-1 px-2 ml-2 ${
                activeButton === 1 ? "p-btn text-white" : ""
              }`}
              onClick={() => handleButtonClick(1)}
            >
              Specifications
            </button>

            <button
              className={`bg-gray-300 rounded-lg py-1 px-2 ml-2 ${
                activeButton === 2 ? "p-btn text-white" : ""
              }`}
              onClick={() => handleButtonClick(2)}
            >
              Features
            </button>
            <button
              className={`bg-gray-300 rounded-lg py-1 px-2 ml-2 ${
                activeButton === 3 ? "p-btn text-white" : ""
              }`}
              onClick={() => handleButtonClick(3)}
            >
              FAQs
            </button>
          </div>

          <div className="border border-gray-300 p-4">
            {activeButton === 0 && <Description />}
            {activeButton === 1 && <Specifications />}
            {activeButton === 2 && <Features />}
            {activeButton === 3 && <Faq />}
          </div>
        </div>

        <div className=" p-4 bg-white border border-gray-300 shadow-lg rounded-lg">
          <div className="w-full h-56 bg-gray-200 flex items-center justify-center">
            <iframe
              width="560"
              height="230"
              src="https://www.youtube.com/embed/VtXv-gbYnj0?si=6aKHnoWV7MGm3QBP"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
          <ul className="mt-4 space-y-2">
            <li className="flex items-center text-green-500">
              <FaCheckCircle className="mr-2" />
              Product receive within 02 - 03 days
            </li>
            <li className="flex items-center text-purple-500">
              <FaThumbsUp className="mr-2" />
              Quality Product
            </li>
            <li className="flex items-center text-orange-500">
              <FaMoneyBillAlt className="mr-2" />
              Cash On Delivery Available
            </li>
            <li className="flex items-center text-blue-500">
              <FaTruck className="mr-2" />
              Delivery Charge Inside Dhaka Free
            </li>
            <li className="flex items-center text-pink-500">
              <FaShippingFast className="mr-2" />
              Delivery Charge Outside Dhaka Free
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MainProductDescription;
