import React, { useEffect } from "react";
import Splide from "@splidejs/splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import { useTranslation } from "react-i18next";

const Gallery = () => {
  const { t } = useTranslation();

  const images = [
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

  useEffect(() => {
    const splide = new Splide(".splide", {
      type: "loop",
      perPage: 5, // Show one image at a time
      perMove: 1,
      gap: "1rem", // Set the gap between images
      pagination: false, // Disable pagination dots
      autoScroll: {
        speed: 0.5,
      },
      breakpoints: {
        600: {
          perPage: 1, // Ensure one image on small screens
        },
      },
    }).mount({ AutoScroll });

    return () => splide.destroy();
  }, []);

  return (
    <div className="carousel py-12 mx-auto">
      <div className="mb-10">
        <h1 className="text-4xl font-medium text-center mt-5 uppercase">
          {t("main.gallery")}
        </h1>
        <img
          src="./ul.png"
          alt="underline decoration"
          className="w-[250px] mx-auto mt-2"
        />
      </div>
      <div className="relative overflow-hidden px-4 sm:px-20">
        <div className="splide">
          <div className="splide__track">
            <ul className="splide__list">
              {images.map((resource, index) => (
                <li key={index} className="splide__slide">
                  <a
                    href={resource.link}
                    className="block w-full h-full bg-cover bg-center"
                    style={{
                      backgroundImage: `url(${resource.imageUrl})`,
                      height: "300px",
                      borderRadius: "8px", // Optional: Add rounded corners
                    }}
                  >
                    <img
                      src={resource.imageUrl}
                      alt={resource.title}
                      className="hidden"
                      loading="lazy"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
