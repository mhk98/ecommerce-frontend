// src/components/ProductList.js
import { StarIcon } from "@heroicons/react/solid";
import React from "react";

const products = [
  {
    name: "TASNE Sunflower Oil - 5 Liter",
    price: "৳1250",
    oldPrice: "৳1090",
    rating: 4.5,
    reviews: 43,
    image:
      "https://media.e-valy.com/cms/products/images/954d1499-a3a6-45f4-80b8-e58827042d79?h=250&w=250",
  },
  {
    name: "Rose Garden Cherry Plum - 200gm",
    price: "৳170",
    oldPrice: "৳300",
    rating: 4.0,
    reviews: 22,
    image:
      "https://media.e-valy.com/cms/products/images/954d1499-a3a6-45f4-80b8-e58827042d79?h=250&w=250",
  },
  {
    name: "Airpods Pro 2nd Gen Special Edition Airpods With Display - White",
    price: "৳1199",
    oldPrice: "৳3500",
    rating: 2.0,
    reviews: 19,
    image:
      "https://media.e-valy.com/cms/products/images/954d1499-a3a6-45f4-80b8-e58827042d79?h=250&w=250",
  },
  {
    name: "Kitchen Bathroom PVC Strong Adhesive Hook",
    price: "৳5",
    oldPrice: "৳15",
    rating: 4.5,
    reviews: 5,
    image:
      "https://media.e-valy.com/cms/products/images/954d1499-a3a6-45f4-80b8-e58827042d79?h=250&w=250",
  },
  {
    name: "Automatic Deodorant Toilet Cleaner",
    price: "৳78",
    oldPrice: "৳180",
    rating: 1.0,
    reviews: 1,
    image:
      "https://media.e-valy.com/cms/products/images/954d1499-a3a6-45f4-80b8-e58827042d79?h=250&w=250",
  },
];

const PProductList = () => {
  return (
    <div className="container mx-auto">
      <h2 className="text-xl font-semibold mb-4">🔥 Popular Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {products.map((product, index) => (
          <div key={index} className="border rounded-lg p-4">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover mb-4"
            />
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <div className="flex items-center mb-2">
              <span className="text-gray-500 line-through">
                {product.oldPrice}
              </span>
              <span className="ml-2 text-red-600">{product.price}</span>
            </div>
            <div className="flex items-center">
              <div className="flex items-center">
                {[...Array(5)].map((star, i) => (
                  <StarIcon
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(product.rating)
                        ? "text-yellow-400"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <span className="ml-2 text-sm text-gray-600">
                {product.reviews} reviews
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PProductList;
