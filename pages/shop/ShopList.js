import React from "react";
import Slider from "react-slick";
import ShopCard from "./ShopCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import "./ShopList.css";

const products = [
  {
    image: "https://media.e-valy.com/cms/products/images/4cf96e80-a012-4f67-9682-b678087411ed?h=250&w=250",
    title: "Viscose Printed Kurtis For Women - Sky...",
    oldPrice: "৳1500",
    newPrice: "৳790",
  },
  {
    image: "https://media.e-valy.com/cms/products/images/4cf96e80-a012-4f67-9682-b678087411ed?h=250&w=250",
    title: "Viscose Printed Kurtis For Women - Ash...",
    oldPrice: "৳1500",
    newPrice: "৳790",
  },
  {
    image: "https://media.e-valy.com/cms/products/images/b5fc9bc7-68f2-4496-82d6-0ea4e35fdb9a?h=250&w=250",
    title: "Viscose Printed Kurtis For Women - Yellow...",
    oldPrice: "৳1500",
    newPrice: "৳790",
  },
  {
    image: "https://media.e-valy.com/cms/products/images/4cf96e80-a012-4f67-9682-b678087411ed?h=250&w=250",
    title: "Viscose Printed Kurtis For Women - Ash...",
    oldPrice: "৳1500",
    newPrice: "৳790",
  },
  {
    image: "https://media.e-valy.com/cms/products/images/b5fc9bc7-68f2-4496-82d6-0ea4e35fdb9a?h=250&w=250",
    title: "Viscose Printed Kurtis For Women - Navy...",
    oldPrice: "৳1500",
    newPrice: "৳790",
  },
  {
    image: "https://media.e-valy.com/cms/products/images/4cf96e80-a012-4f67-9682-b678087411ed?h=250&w=250",
    title: "Viscose Printed Kurtis For Women - Mast...",
    oldPrice: "৳1500",
    newPrice: "৳790",
  },
  {
    image: "https://media.e-valy.com/cms/products/images/b5fc9bc7-68f2-4496-82d6-0ea4e35fdb9a?h=250&w=250",
    title: "Viscose Printed Kurtis For Women - Mast...",
    oldPrice: "৳1500",
    newPrice: "৳790",
  },
];

const ShopList = () => {
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        //   dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-black text-white p-8">
      <div className="flex justify-between items-center mb-4">
        <p className="text-xl">
          <span className="text-white">Shop</span>
        </p>
        <button className="bg-gray-700 text-white py-2 px-4 rounded-lg">
          Show more
        </button>
      </div>
      <Slider {...settings}>
        {products.map((product, index) => (
          <div key={index} className="p-2">
            {" "}
            {/* Add padding to each slide */}
            <ShopCard
              image={product.image}
              title={product.title}
              oldPrice={product.oldPrice}
              newPrice={product.newPrice}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ShopList;
