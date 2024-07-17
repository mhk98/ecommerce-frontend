import React from "react";
import TProductCard from "./TProductCard";
import { IoMdTrendingUp } from "react-icons/io";

const products = [
  {
    image:
      "https://media.e-valy.com/cms/products/images/cb90dcb2-013b-4d49-bf96-4a84d3c9f9e8?h=250&w=250",
    title: "Smart Wireless Bluetooth Headphone Sunglasses - Black",
    oldPrice: "৳18",
    newPrice: "৳10",
    status: "In Stock",
  },
  {
    image:
      "https://media.e-valy.com/cms/products/images/cb90dcb2-013b-4d49-bf96-4a84d3c9f9e8?h=250&w=250",
    title: "Times Premium Detergent Powder - 500gm",
    oldPrice: "৳140",
    newPrice: "৳58",
    status: "In Stock",
  },
  {
    image:
      "https://media.e-valy.com/cms/products/images/cb90dcb2-013b-4d49-bf96-4a84d3c9f9e8?h=250&w=250",
    title: "Times Premium Detergent Powder - Buy 500gm and Get 500gm Free",
    oldPrice: "৳280",
    newPrice: "৳116",
    status: "In Stock",
  },
  {
    image:
      "https://media.e-valy.com/cms/products/images/cb90dcb2-013b-4d49-bf96-4a84d3c9f9e8?h=250&w=250",
    title: "Cotton Frock for New Born Baby Girls - White",
    oldPrice: "৳200",
    newPrice: "৳60",
    status: "In Stock",
  },
  {
    image:
      "https://media.e-valy.com/cms/products/images/cb90dcb2-013b-4d49-bf96-4a84d3c9f9e8?h=250&w=250",
    title: "Strong Wall Hook with Screw Nut Cap",
    oldPrice: "৳18",
    newPrice: "৳10",
    status: "In Stock",
  },
];

const TProductList = () => {
  return (
    <div className="p-4 bg-white">
      <div className="flex gap-2">
        <div className=" p-1 bg-red-500 h-6 w-6 rounded-full">
          <IoMdTrendingUp size={20} className="text-white" />
        </div>
        <h2 className="text-xl font-semibold mb-4">Trending Now</h2>
      </div>
      <div className="grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
        {products.map((product, index) => (
          <TProductCard
            key={index}
            image={product.image}
            title={product.title}
            oldPrice={product.oldPrice}
            newPrice={product.newPrice}
            status={product.status}
          />
        ))}
      </div>
    </div>
  );
};

export default TProductList;
