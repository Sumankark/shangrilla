import React, { useState, useEffect } from "react";
import OurServices from "./OurServices";
import OurGoals from "./OurGoals";
import Volunteering from "./Volunteering";
import Footer from "../Footer/Footer";
import {
  IoIosArrowBack,
  IoIosArrowForward,
  IoIosArrowDown,
} from "react-icons/io";
import Gallery from "../Gallery/Gallery";

const carouselImages = [
  {
    url: "https://img.freepik.com/free-photo/team-teamwork-collaboration-corporate-concept_53876-15857.jpg?t=st=1727404830~exp=1727408430~hmac=20cdb052d0e6076932c0469a4f44ff93d22c65ea668831eda0512ff11046214d&w=1480",
    title: "Welcome to Everest Community",
    description: "Empowering communities through education and growth.",
  },
  {
    url: "https://img.freepik.com/premium-photo/dirty-park-positive-male-volunteer-grinning-camera-while-collecting-litter_259150-30536.jpg?ga=GA1.1.1226311596.1727329106&semt=ais_hybrid",
    title: "Join Our Volunteering Program",
    description: "Become a part of a community-driven initiative.",
  },
  {
    url: "https://miro.medium.com/v2/resize:fit:996/1*nIBxNrv7S80jMOUoen9FSw.png",
    title: "Our Goal: Sustainability",
    description: "Fostering sustainable growth through education.",
  },
];

const Main = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-scroll effect using useEffect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % carouselImages.length);
    }, 7000); // Slide changes every 7 seconds

    return () => clearInterval(interval); // Clean up the interval on unmount
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % carouselImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prevSlide) =>
        (prevSlide - 1 + carouselImages.length) % carouselImages.length
    );
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div>
      {/* Carousel Implementation */}
      <div className="relative w-full h-96 md:h-[500px] lg:h-[600px]">
        <div className="overflow-hidden relative w-full h-full">
          {/* Carousel images */}
          {carouselImages.map((image, index) => (
            <div
              key={index}
              className={`absolute transition-opacity duration-1000 w-full h-full ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={image.url}
                alt={`slide-${index}`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              {/* Content on top of the image */}
              <div className="mt-10 absolute top-0 left-0 w-full h-full bg-black/50 flex flex-col justify-center items-center text-center text-white/50 px-4 transition-opacity duration-1000">
                <h2 className="text-xl md:text-3xl lg:text-5xl font-bold transition-transform duration-1000 transform">
                  {image.title}
                </h2>
                <p className="text-sm md:text-lg lg:text-xl mt-2 transition-opacity duration-1000">
                  {image.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel controls */}
        <button
          onClick={prevSlide}
          aria-label="Previous Slide"
          className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white bg-gray-500/25 p-2 rounded-full"
        >
          <IoIosArrowBack />
        </button>
        <button
          onClick={nextSlide}
          aria-label="Next Slide"
          className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white bg-gray-500/25 p-2 rounded-full"
        >
          <IoIosArrowForward />
        </button>

        {/* Slider Indicator */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {carouselImages.map((_, index) => (
            <div
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full cursor-pointer ${
                index === currentSlide ? "bg-white" : "bg-gray-400"
              }`}
            ></div>
          ))}
        </div>
      </div>

      <div id="our-goals">
        <OurGoals />
      </div>

      <div>
        {" "}
        <Gallery />
      </div>
      <div id="our-services">
        <OurServices />
      </div>

      <div id="volunteering">
        <Volunteering />
      </div>
      <Footer />
    </div>
  );
};

export default Main;
