import React, { useState, useEffect } from "react";
import { assets } from "../assets/assets";

const Hero = () => {
  const slides = [
    {
      id: 1,
      subtitle: "OUR BESTSELLERS",
      title: "Latest Arrivals",
      image:
        "https://images.pexels.com/photos/1311590/pexels-photo-1311590.jpeg",
    },
    {
      id: 2,
      subtitle: "NEW COLLECTION",
      title: "Spring Vibes",
      image:
        "https://images.pexels.com/photos/7202768/pexels-photo-7202768.jpeg",
    },
    {
      id: 3,
      subtitle: "MEGA SALE",
      title: "Up to 50% Off",
      image:
        "https://images.pexels.com/photos/5560083/pexels-photo-5560083.jpeg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Next aur Previous Functions
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1,
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1,
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);

    // Cleanup function
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="relative w-full overflow-hidden border border-gray-400">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide) => (
          /* YAHAN HEIGHT ADD KI HAI: sm:h-[400px] (Desktop ke liye) aur mobile ke liye auto rakha hai */
          <div key={slide.id} className="min-w-full flex flex-col sm:flex-row sm:h-[400px]">
            
            {/* Hero left */}
            {/* sm:h-full add kiya taaki desktop par ye poori height le */}
            <div className="w-full sm:w-1/2 sm:h-full flex items-center justify-center py-10 sm:py-0 bg-white">
              <div className="text-[#414141]">
                <div className="flex items-center gap-2">
                  <p className="w-8 md:w-11 h-0.5 bg-[#414141]"></p>
                  <p className="font-medium text-sm md:text-base">
                    {slide.subtitle}
                  </p>
                </div>
                <h1 className="prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed">
                  {slide.title}
                </h1>
                <div className="flex items-center gap-2 cursor-pointer">
                  <p className="font-semibold text-sm md:text-base">SHOP NOW</p>
                  <p className="w-8 md:w-11 h-0.5 bg-[#414141]"></p>
                </div>
              </div>
            </div>

            {/* Hero right */}
            {/* Mobile par height h-64 aur Desktop par h-full add kiya hai */}
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-64 sm:h-full sm:w-1/2 object-cover object-top"
            />
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-2 md:left-4 transform -translate-y-1/2 bg-white/70 p-3 rounded-full hover:bg-white text-gray-800 transition-all"
      >
        &#10094;
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-2 md:right-4 transform -translate-y-1/2 bg-white/70 p-3 rounded-full hover:bg-white text-gray-800 transition-all"
      >
        &#10095;
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentIndex === index ? "bg-[#414141] w-8" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Hero;