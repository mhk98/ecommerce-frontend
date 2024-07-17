// src/components/ProductList.js
import { StarIcon } from "@heroicons/react/solid";
import React from "react";
import { MdStars } from "react-icons/md";

const products = [
  {
    name: "TASNE Sunflower Oil - 5 Liter",
    price: "৳1250",
    oldPrice: "৳1090",
    rating: 4.5,
    reviews: 143,
    image:
      "https://media.e-valy.com/cms/brands/logo/e905b4e4-0ec3-4339-be2f-b78707fdf3e6?h=150&w=150",
  },
  {
    name: "Rose Garden Cherry Plum - 200gm",
    price: "৳170",
    oldPrice: "৳300",
    rating: 4.0,
    reviews: 22,
    image:
      "https://media.e-valy.com/cms/brands/logo/89e3613e-04d9-4010-8652-0d14788f8dac?h=150&w=150",
  },
  {
    name: "TASNE Sunflower Oil - 5 Liter",
    price: "৳1250",
    oldPrice: "৳1090",
    rating: 4.5,
    reviews: 143,
    image:
      "https://media.e-valy.com/cms/brands/logo/e905b4e4-0ec3-4339-be2f-b78707fdf3e6?h=150&w=150",
  },
  {
    name: "Airpods Pro 2nd Gen Special Edition Airpods With Display - White",
    price: "৳1199",
    oldPrice: "৳3500",
    rating: 2.0,
    reviews: 19,
    image:
      "https://media.e-valy.com/cms/brands/logo/f3da4680-d29f-4e92-a8ad-e0da5e7c934d?h=150&w=150",
  },
  {
    name: "Rose Garden Cherry Plum - 200gm",
    price: "৳170",
    oldPrice: "৳300",
    rating: 4.0,
    reviews: 22,
    image:
      "https://media.e-valy.com/cms/brands/logo/89e3613e-04d9-4010-8652-0d14788f8dac?h=150&w=150",
  },
  {
    name: "Kitchen Bathroom PVC Strong Adhesive Hook",
    price: "৳5",
    oldPrice: "৳15",
    rating: 4.5,
    reviews: 5,
    image:
      "https://media.e-valy.com/cms/brands/logo/e170a939-d61f-4a9f-a4cd-702f227b2aa6?h=150&w=150",
  },
  {
    name: "Automatic Deodorant Toilet Cleaner",
    price: "৳78",
    oldPrice: "৳180",
    rating: 1.0,
    reviews: 1,
    image:
      "https://media.e-valy.com/cms/brands/logo/8b2f9e5f-ae93-4f75-96a4-fa1a314d95b8?h=150&w=150",
  },
];

const TShop = () => {
  return (
    <div className="container mx-auto mt-4">
      <h2 className="flex gap-2 text-xl font-semibold mb-4">
        <MdStars className="text-yellow-500" /> Top Rated Shops
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-7 gap-6">
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

export default TShop;
