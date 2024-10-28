"use client"; // Add this at the top to make it a Client Component

import React from 'react';
import dynamic from 'next/dynamic';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image'; // Import the Image component

// Dynamically import the Slider component
const Slider = dynamic(() => import('react-slick'), { ssr: false });

interface SlideProps {
    img: string;
    title: string;
    mainTitle: string;
    price: string;
}

const Slides: React.FC<SlideProps> = ({ img }) => (
    <div className="relative w-full h-96"> {/* Set a height for the slide container */}
        <Image 
            src={img} 
            alt="Slider Image" 
            layout="fill"  // Use fill for responsive images
            objectFit="cover"  // Cover to maintain aspect ratio
            className="rounded-lg"  // Optional: Add styling
        />
    </div>
);

const Hero: React.FC = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        pauseOnHover: false,
    };

    const slideData = [
        { id: 1, img: '/images/banner1.jpg', title: 'Trending Item 1', mainTitle: 'Limited Time Offer', price: '$10' },
        { id: 2, img: '/images/banner2.jpg', title: 'Trending Item 2', mainTitle: 'Limited Time Offer', price: '$20' },
        // Add more slides as needed
    ];

    return (
        <Slider {...settings}>
            {slideData.map(item => (
                <Slides key={item.id} img={item.img} title={item.title} mainTitle={item.mainTitle} price={item.price} />
            ))}
        </Slider>
    );
};

export default Hero;
