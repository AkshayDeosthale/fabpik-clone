import Image from "next/image";
import React from "react";

const categoryImages = [
  {
    id: 1,
    name: "Clothing",
    url: "https://portal.fabpik.in/uploads/home/clothing.png",
  },
  {
    id: 2,
    name: "Footwear",
    url: "https://portal.fabpik.in/uploads/home/footwear.png",
  },
  {
    id: 3,
    name: "Toys",
    url: "https://portal.fabpik.in/uploads/home/toys.png",
  },
  {
    id: 4,
    name: "Heath & Safety",
    url: "https://portal.fabpik.in/uploads/home/health.jpg",
  },
  {
    id: 5,
    name: "Personal Care",
    url: "https://portal.fabpik.in/uploads/home/personal%20Care.jpg",
  },
  {
    id: 6,
    name: "Nutrition",
    url: "https://portal.fabpik.in/uploads/home/personal%20Care.jpg",
  },
  {
    id: 7,
    name: "Accessories",
    url: "https://portal.fabpik.in/uploads/home/personal%20Care.jpg",
  },
  {
    id: 8,
    name: "Books & Arts",
    url: "https://portal.fabpik.in/uploads/home/personal%20Care.jpg",
  },
  {
    id: 9,
    name: "Sports",
    url: "https://portal.fabpik.in/uploads/home/personal%20Care.jpg",
  },
  {
    id: 10,
    name: "School Suplies",
    url: "https://portal.fabpik.in/uploads/home/personal%20Care.jpg",
  },
];

type Props = {};

const ShopByCategories = ({}: Props) => {
  return (
    <div>
      <p className="my-9 text-center font-semibold text-2xl uppercase">
        SHOP BY CATEGORIES
      </p>
      <div className="xs:w-full md:max-w-7xl md:mx-auto h-[70vh] grid grid-cols-3 xl:grid-cols-5 xl:gap-2">
        {categoryImages.map((category, key) => (
          <div className="relative p-2 xl:p-0 group cursor-pointer" key={key}>
            <Image
              fill
              src={category.url}
              alt={category.name}
              //style={{ objectFit: "contain" }}
            />
            <p className="absolute bottom-0 right-0 font-semibold text-xl group-hover:text-pink-400 transition-all duration-200 ">
              {category.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopByCategories;
