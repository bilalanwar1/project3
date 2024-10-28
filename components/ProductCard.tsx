import React from "react";
import Image from "next/image";

interface ProductCardProps {
  img: string;
  title: string;
  desc: string;
  rating: number;
  price: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ img, title, desc, rating, price }) => {
  return (
    <div className="w-60 h-80 border rounded-lg overflow-hidden shadow-md flex flex-col items-center justify-center">
      <div className="relative w-full h-48">
        <Image src={img} alt={title} layout="fill" objectFit="cover" className="rounded-t-lg" />
      </div>
      <div className="p-4 text-center">
        <h3 className="text-lg font-bold">{title}</h3>
        <p>{desc}</p>
        <span className="text-gray-700 font-semibold">{price}</span>
      </div>
    </div>
  );
};

export default ProductCard;
