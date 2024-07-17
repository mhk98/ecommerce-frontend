import React from "react";
import { FaShoppingCart } from "react-icons/fa"; 

const products = [
  {
    name: "Haribhanga MANGO",
    price: "৳1400",
    oldPrice: "৳1700",
    discount: "-18%",
    image:
      "https://media.e-valy.com/cms/products/images/62155c70-3a88-4b84-b6d1-4e5e2d93f8c5?h=250&w=250",
  },
  {
    name: "Mini Portable Fan | Handheld",
    price: "৳599",
    oldPrice: "৳650",
    discount: "-8%",
    image:
      "https://media.e-valy.com/cms/products/images/dfa1f6fd-480c-4b51-887b-b4e42dbc6970?h=250&w=250",
  },
  {
    name: "OSAKA Multi-Purpose Blender",
    price: "৳1299",
    oldPrice: "৳1599",
    discount: "-19%",
    image:
      "https://media.e-valy.com/cms/products/images/1b35b8c1-6dcd-4240-b223-e277f15b950b?h=250&w=250",
  },
  {
    name: "Knife Set | High Quality Knif...",
    price: "৳1399",
    oldPrice: "৳1800",
    discount: "-22%",
    image:
      "https://media.e-valy.com/cms/products/images/62155c70-3a88-4b84-b6d1-4e5e2d93f8c5?h=250&w=250",
  },
  {
    name: "Fast Electric Grinding Machin...",
    price: "৳999",
    oldPrice: "৳1800",
    discount: "-45%",
    image:
      "https://media.e-valy.com/cms/products/images/1b35b8c1-6dcd-4240-b223-e277f15b950b?h=250&w=250",
  },
  {
    name: "Novenan Electric Toaster",
    price: "৳1700",
    oldPrice: "৳2300",
    discount: "-26%",
    image:
      "https://media.e-valy.com/cms/products/images/1b35b8c1-6dcd-4240-b223-e277f15b950b?h=250&w=250",
  },
];

const DProductList = () => {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {products.map((product, index) => (
          <div
            key={index}
            className="card-container border rounded-lg p-4 bg-white shadow-md relative overflow-hidden"
          >
            <div className="relative">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover mb-4"
              />
              <span className="discount-badge absolute top-2 left-2 bg-[#EE0012] text-white text-xs px-2 py-1 rounded transition-transform duration-300">
                {product.discount}
              </span>
            </div>
            <h3 className="text-sm font-semibold mb-2">{product.name}</h3>
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-500 line-through">
                {product.oldPrice}
              </span>
              <span className="text-red-600 font-bold">{product.price}</span>
            </div>
            <button className="order-now-btn w-full p-btn text-white py-2 rounded relative overflow-hidden">
              <span className="bg-[#282828] pr-3 rounded-r-lg icon-container absolute inset-y-0 left-0 flex items-center pl-3 transform -translate-x-full transition-transform duration-300">
                <FaShoppingCart />
              </span>
              <span className="text-container">Order Now</span>
            </button>
          </div>
        ))}
      </div>
      <div className="text-center mt-4">
        <button className="w-96 border border-orange-500 text-red-500 py-2 px-6 rounded">
          LOAD MORE
        </button>
      </div>
    </div>
  );
};

export default DProductList;
