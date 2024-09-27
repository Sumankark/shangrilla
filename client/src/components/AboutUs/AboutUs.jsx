import React from "react";
import Footer from "../Footer/Footer";

const AboutUs = () => {
  const sections = [
    {
      title: "Everest Community Learning Center (ECLC)",
      content:
        "The Everest Community Learning Centre (ECLC), located in Thulung, DudhKoshi, Nepal, has been a key institution for non-formal education and community development since its inception in 2002. Officially recognized by the Ministry of Education, ECLC plays a crucial role in enhancing educational quality and fostering community growth, aligning with national goals. Through its innovative educational initiatives, the center empowers local communities, particularly focusing on girls, women, and marginalized groups. This study is part of the UNESCO CapED program, which aims to improve educational planning and management capacities across governance levels.",
      image: "./11.jpg", // Replace with your actual image path
    },
    {
      title: "Background",
      content:
        "The Government of Nepal is committed to achieving the Sustainable Development Goals, particularly Goal 4, which focuses on inclusive quality education. The new School Sector Development Plan emphasizes non-formal education to meet the diverse needs of underserved communities. The Capacity Development for Education (CapED) program collaborates with the Ministry of Education to enhance educational quality for marginalized groups by transforming Community Learning Centers (CLCs) into lifelong learning hubs. The Everest Community Learning Center (ECLC) also aims to provide tailored education and resources, leveraging technology and community involvement. As ECLC evolves, it will adapt to the changing educational landscape, ensuring it meets community needs and aligns with national goals.",
      image: "./22.jpg", // Replace with your actual image path
    },
    {
      title: "Future Plans",
      content:
        "ECLC plans to implement programs focused on income generation and skill-based training, with a special emphasis on extending literacy opportunities to women and disadvantaged groups. The center aims to enhance infrastructure and advance information and communication technology (ICT), as well as improve library facilities and establish information centers for community learning. Feedback from CLC facilitators indicates a strong demand for training in income generation, skill development, ICT, resource mobilization, proposal writing, and management and accounting skills, highlighting their desire to enhance their capabilities and better serve the community.",
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
        <div
          className="flex flex-wrap mx-[50px] md:mx-[100px] lg:mx-[200px]"
        >
          {sections.map((section, index) => (
            <div
              key={index}
              className={`flex rounded-lg shadow-lg bg-gray-100 my-1 p-6 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}           >
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
