import React from "react";
import Image from 'next/image'; // Importing Image from Next.js

interface PropsType {
  img: string;
  title: string;
  mainTitle: string;
  price: string;
}

const Slides: React.FC<PropsType> = ({ img, title, mainTitle, price }) => {
  return (
    <div className="outline-none border-none relative">
      <Image src={img} alt={title} layout="responsive" width={500} height={300} className="rounded-lg" />
      <div className="absolute left-[30px] md:left-[70px] max-w-[250px] sm:max-w-[350px] top-[50%] -translate-x-[50%] space-y-2 lg:space-y-4 bg-[#ffffffa2] 
      sm:bg-transparent p-4 sm:p-0 rounded-lg sm:rounded-none">
        <h3 className="text-accent text-[24px] lg:text-[28px]">{mainTitle}</h3>
        <p className="text-black">{title}</p>
        <span className="text-lg font-bold">{price}</span>
      </div>
    </div>
  );
};

export default Slides;