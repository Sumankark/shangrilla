import React from "react";
import Footer from "../Footer/Footer";
import { useTranslation } from "react-i18next";

const AboutUs = () => {
  const { t } = useTranslation();

  const sections = [
    {
      title: t("about_us.section.section_t1"),
      content: t("about_us.section.section_c1"),
      image: "./11.jpg", // Replace with your actual image path
    },
    {
      title: t("about_us.section.section_t2"),
      content: t("about_us.section.section_c2"),
      image: "./22.jpg", // Replace with your actual image path
    },
    {
      title: t("about_us.section.section_t3"),
      content: t("about_us.section.section_c3"),
      image: "./33.jpg", // Replace with your actual image path
    },
  ];

  return (
    <div className="mt-[100px]">
      <div>
        <h1 className="text-4xl text-[#000000] mt-4 mb-4 text-center font-bold">
          About Us
        </h1>

        {/* Container for all sections */}
        <div className="flex flex-wrap mx-[50px] md:mx-[100px] lg:mx-[200px] mb-[100px]">
          {sections.map((section, index) => (
            <div
              key={index}
              className={`flex rounded-lg shadow-lg bg-gray-100 my-1 p-6 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              <div className="w-[30%] ">
                <img
                  src={section.image}
                  alt={section.title}
                  className="w-full h-[250px] object-cover rounded-t-lg"
                />
              </div>
              <div className="p-4 w-[70%]">
                <h2 className="text-xl font-bold text-center mb-4">
                  {section.title}
                </h2>
                <p className="text-[14px] text-left">{section.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AboutUs;
