import React from "react";
// import ProductDetails from "./ProductDetails";
import Sidebar from "../pages/Sidebar";
import ProductDetails from "./productDetails/ProductDetails";

const ProductDetailsPage = () => {
  return (
    <div>
      {/* <header className="bg-red-600 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <Sidebar />
          <div className="flex items-center" style={{ width: "800px" }}>
            <div className="flex-grow md:flex-grow-0">
              <input
                type="text"
                placeholder="Search in Evaly"
                className="bg-gray-200 rounded-l-lg px-4 py-3 w-full md:w-96"
              />
            </div>
            <button className="bg-gray-800 text-white px-4 py-3 rounded-r-lg">
              Search
            </button>
          </div>
          <div className="text-lg">
            <a href="tel:+8801601872740">+8801601872740</a>
          </div>
        </div>
      </header> */}
      <ProductDetails />
    </div>
  );
};

export default ProductDetailsPage;
