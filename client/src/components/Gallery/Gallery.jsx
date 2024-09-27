import React, { useEffect, useRef, useState } from "react";

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carousel = useRef(null);

  const image = [
    { title: "Find me on Mastodon", link: "./g1.jpg", imageUrl: "./g1.jpg" },
    { title: "Welcome to K-Tech", link: "./g2.jpg", imageUrl: "./g2.jpg" },
    {
      title: "Some sort of third title",
      link: "./g3.jpg",
      imageUrl: "./g3.jpg",
    },
    {
      title: "Super item number the last",
      link: "./g4.jpg",
      imageUrl: "./g4.jpg",
    },
    {
      title: "Super item number the last",
      link: "./g5.png",
      imageUrl: "./g5.png",
    },
    {
      title: "Super item number the last",
      link: "./g6.png",
      imageUrl: "./g6.png",
    },
  ];

  const imagesToDisplay = () => {
    return [
      image[currentIndex % image.length],
      image[(currentIndex + 1) % image.length],
      image[(currentIndex + 2) % image.length],
      image[(currentIndex + 3) % image.length],
      image[(currentIndex + 4) % image.length],
    ];
  };

  const movePrev = () => {
    setCurrentIndex(
      (prevState) => (prevState - 1 + image.length) % image.length
    );
  };

  const moveNext = () => {
    setCurrentIndex((prevState) => (prevState + 1) % image.length);
  };

  useEffect(() => {
    if (carousel.current !== null) {
      carousel.current.scrollLeft = carousel.current.offsetWidth * currentIndex;
    }
  }, [currentIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      moveNext();
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel my-12 mx-auto">
      <h1 className="text-4xl font-medium text-center mb-7 mt-5">
        OUR GALLERY
      </h1>
      <img
        src="./ul.png"
        alt="underline decoration"
        className="w-[250px] mx-auto mt-2"
      />
      <div className="relative overflow-hidden px-4 sm:px-20">
        <div className="absolute top-1/2 left-0 transform -translate-y-1/2 flex justify-between w-full">
          <button
            onClick={movePrev}
            className="bg-blue-900/25 rounded-3xl text-white w-10 h-10 text-center opacity-75 hover:opacity-100 transition-all duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 ml-2"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                d="M15 19l-7-7 7-7"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button
            onClick={moveNext}
            className="bg-blue-900/25 rounded-3xl text-white w-10 h-10 text-center opacity-75 hover:opacity-100 transition-all duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 ml-2"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                d="M9 5l7 7-7 7"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
        <div
          ref={carousel}
          className="carousel-container flex gap-1 overflow-hidden scroll-smooth snap-x snap-mandatory touch-pan-x"
        >
          {imagesToDisplay().map((resource, index) => (
            <div
              key={index}
              className="carousel-item text-center relative w-64 h-64 snap-start"
            >
              <a
                href={resource.link}
                className="block w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${resource.imageUrl})` }}
              >
                <img
                  src={resource.imageUrl}
                  alt={resource.title}
                  className="hidden"
                  loading="lazy"
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
