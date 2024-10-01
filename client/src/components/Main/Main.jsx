import React, { useState, useEffect } from "react";
import OurServices from "./OurServices";
import OurGoals from "./OurGoals";
import Volunteering from "./Volunteering";
import Footer from "../Footer/Footer";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Gallery from "../Gallery/Gallery";
import { useTranslation } from "react-i18next";

const Main = () => {
  const { t } = useTranslation();
  const [currentSlide, setCurrentSlide] = useState(0);

  const carouselImages = [
    {
      url: "https://img.freepik.com/free-photo/team-teamwork-collaboration-corporate-concept_53876-15857.jpg?t=st=1727404830~exp=1727408430~hmac=20cdb052d0e6076932c0469a4f44ff93d22c65ea668831eda0512ff11046214d&w=1480",
      title: t("main.carousel.welcome_title"),
      description: t("main.carousel.welcome_description"),
    },
    {
      url: "https://img.freepik.com/premium-photo/dirty-park-positive-male-volunteer-grinning-camera-while-collecting-litter_259150-30536.jpg?ga=GA1.1.1226311596.1727329106&semt=ais_hybrid",
      title: t("main.carousel.volunteering_title"),
      description: t("main.carousel.volunteering_description"),
    },
    {
      url: "https://miro.medium.com/v2/resize:fit:996/1*nIBxNrv7S80jMOUoen9FSw.png",
      title: t("main.carousel.goals_title"),
      description: t("main.carousel.goals_description"),
    },
  ];

  const totalSlides = carouselImages.length;

  // Auto-scroll effect using useEffect
  useEffect(() => {
    const interval = setInterval(nextSlide, 7000); // Slide changes every 7 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index % totalSlides); // Ensure index is within bounds
  };

  return (
    <div>
      {/* Carousel Implementation */}
      <div className="relative w-full h-96 md:h-[500px] lg:h-[600px] overflow-hidden">
        {/* Parallax images */}
        <div cla>
          {carouselImages.map((image, index) => (
            <div
              key={index}
              className="absolute w-full h-full transition-transform duration-1000 ease-in-out"
              style={{
                transform: `translateX(${100 * (index - currentSlide)}%)`,
                backgroundImage: `url(${image.url})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              aria-hidden={index !== currentSlide}
            >
              {/* Content on top of the image */}
              <div className="pt-10 absolute top-0 left-0 w-full h-full bg-black/50 flex flex-col justify-center items-center text-center text-white px-4">
                <h2 className="text-xl md:text-3xl lg:text-5xl font-bold">
                  {image.title}
                </h2>
                <p className="text-sm md:text-lg lg:text-xl mt-2">
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
              aria-label={`Slide ${index + 1}`}
            ></div>
          ))}
        </div>
      </div>

      <div id="our-goals" className="shadow">
        <OurGoals />
      </div>

      <div className="bg-gray-100">
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
