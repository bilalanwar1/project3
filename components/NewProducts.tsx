import React from "react";
import ProductCard from "./ProductCard"; // Ensure this path is correct

const NewProducts: React.FC = () => {
  const products = [
    {
      img: "/images/derma-roler01.jpg",
      title: "Derma Roler",
      desc: "This is Derma Roler",
      price: "$2000",
    },
    {
      img: "/images/Hand-griper02.jpg",
      title: "Hand Griper",
      desc: "This is Hand Gripper",
      price: "$1500",
    },
    {
      img: "/images/watches.jpg",
      title: "Watch for Men",
      desc: "This is Watch",
      price: "$1500",
    },
    {
      img: "/images/shoes.jpg",
      title: "Shoes",
      desc: "This is Shoes for Men",
      price: "$2500",
    },
    {
      img: "/images/shirt.jpg",
      title: "Shirt",
      desc: "This is Shirt",
      price: "$1500",
    },
    {
      img: "/images/shirt2.jpg",
      title: "Shirt For Men",
      desc: "This is Shirt for Men",
      price: "$500",
    },
    {
      img: "/images/watch2.jpg",
      title: "Watch",
      desc: "This is Watch",
      price: "$100",
    },
    {
      img: "/images/watch3.jpg",
      title: "Watch",
      desc: "This is Watch",
      price: "$1000",
    },
    {
      img: "/images/watch4.jpg",
      title: "Watch For Men",
      desc: "This is Watch for Men",
      price: "$1500",
    },
    {
      img: "/images/sportshoes.jpg",
      title: "Sport Shoes",
      desc: "This is Hand Gripper",
      price: "$1500",
    },
    {
      img: "/images/girlshoes.jpg",
      title: "Women Shoes",
      desc: "This is Shoes for Women",
      price: "$500",
    },
    {
      img: "/images/jacket.jpg",
      title: "Jacket",
      desc: "This is Jacket",
      price: "$1500",
    },
  ];

  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-wrap gap-4 justify-center">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            img={product.img}
            title={product.title}
            desc={product.desc}
            price={product.price} // Keep only the price prop
          />
        ))}
      </div>
    </div>
  );
};

export default NewProducts;
