import React from "react";
import ProductCard from "./ProductCard"; // Ensure this path is correct

const NewProducts: React.FC = () => {
  const products = [
    {
      img: "/images/derma-roler01.jpg",
      title: "Derma Roler",
      desc: "This is Derma Roler",
      rating: 4,
      price: "$2000",
    },
    {
      img: "/images/Hand-griper02.jpg",
      title: "Hand Griper",
      desc: "This is Hand Gripper",
      rating: 5,
      price: "$1500",
    },
    {
      img: "/images/watches.jpg",
      title: "Watch for Men",
      desc: "This is Watch",
      rating: 4,
      price: "$1500",
    },
    {
      img: "/images/shoes.jpg",
      title: "Shoes",
      desc: "This is Shoes for MEn",
      rating: 4,
      price: "$2500",
    },
    {
      img: "/images/shirt.jpg",
      title: "Shirt",
      desc: "This is Shirt",
      rating: 4,
      price: "$1500",
    },
    {
      img: "/images/shirt2.jpg",
      title: "Shirt For men",
      desc: "This is Shirt for Mrn",
      rating: 4,
      price: "$500",
    },
    {
      img: "/images/watch2.jpg",
      title: "Watch",
      desc: "This is Watch",
      rating: 3,
      price: "$100",
    },
    {
      img: "/images/watch3.jpg",
      title: "Watch",
      desc: "This is Watch",
      rating: 5,
      price: "$1000",
    },
    {
      img: "/images/watch4.jpg",
      title: "Watch For Men",
      desc: "This is Watch for Men",
      rating: 2,
      price: "$1500",
    },
    {
      img: "/images/sportshoes.jpg",
      title: "Sport Shoes",
      desc: "This is Hand Gripper",
      rating: 4,
      price: "$1500",
    },
    {
      img: "/images/girlshoes.jpg",
      title: "Women Shoes",
      desc: "This is Shoes for Women",
      rating: 4,
      price: "$500",
    },
    {
      img: "/images/jacket.jpg",
      title: "Sport Shoes",
      desc: "This is Hand Gripper",
      rating: 4,
      price: "$1500",
    },
    // ...other products
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
            rating={product.rating}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
};

export default NewProducts;
