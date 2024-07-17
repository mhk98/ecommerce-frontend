import React from "react";

const categories = [
  {
    src: "https://media.e-valy.com/cms/products/images/dd47d353-61f5-45e5-9e6a-eb74e2ab7629?h=250&w=250",
    label: "PHARMACY",
  },
  {
    src: "https://media.e-valy.com/cms/products/images/dd47d353-61f5-45e5-9e6a-eb74e2ab7629?h=250&w=250",
    label: "HOUSEHOLD FESTIVAL",
  },
  {
    src: "https://media.e-valy.com/cms/products/images/dd47d353-61f5-45e5-9e6a-eb74e2ab7629?h=250&w=250",
    label: "SPECIAL WEEKLY OFFER",
  },
  {
    src: "https://media.e-valy.com/cms/products/images/dd47d353-61f5-45e5-9e6a-eb74e2ab7629?h=250&w=250",
    label: "FURNITURE BIG SAVING DAYS",
  },
  {
    src: "https://media.e-valy.com/cms/products/images/dd47d353-61f5-45e5-9e6a-eb74e2ab7629?h=250&w=250",
    label: "HOME & LIVING",
  },
  {
    src: "https://media.e-valy.com/cms/products/images/dd47d353-61f5-45e5-9e6a-eb74e2ab7629?h=250&w=250",
    label: "ELECTRONICS",
  },
  {
    src: "https://media.e-valy.com/cms/products/images/dd47d353-61f5-45e5-9e6a-eb74e2ab7629?h=250&w=250",
    label: "FOOD & GROCERY",
  },
  {
    src: "https://media.e-valy.com/cms/products/images/dd47d353-61f5-45e5-9e6a-eb74e2ab7629?h=250&w=250",
    label: "FASHION",
  },
  {
    src: "https://media.e-valy.com/cms/products/images/dd47d353-61f5-45e5-9e6a-eb74e2ab7629?h=250&w=250",
    label: "BABY & KIDS",
  },
  {
    src: "https://media.e-valy.com/cms/products/images/dd47d353-61f5-45e5-9e6a-eb74e2ab7629?h=250&w=250",
    label: "BAGS & TRAVEL",
  },
  {
    src: "https://media.e-valy.com/cms/products/images/dd47d353-61f5-45e5-9e6a-eb74e2ab7629?h=250&w=250",
    label: "BOOKS & STATIONERY",
  },
  {
    src: "https://media.e-valy.com/cms/products/images/dd47d353-61f5-45e5-9e6a-eb74e2ab7629?h=250&w=250",
    label: "JEWELLERIES & ACCESSORIES",
  },
];

const Categories = () => {
  return (
    <div className="grid grid-cols-2 gap-4 mt-4 p-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-12 xl:grid-cols-12">
      {categories.map((category, index) => (
        <div key={index} className="flex flex-col items-center">
          <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
            <img
              src={category.src}
              alt={category.label}
              className="w-10 h-10"
            />
          </div>
          <p className="text-xs mt-2 text-center">{category.label}</p>
        </div>
      ))}
    </div>
  );
};

export default Categories;
