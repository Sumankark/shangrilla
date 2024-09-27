import React from "react";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";

const OurServices = () => {
  const services = [
    {
      image:
        "https://images.pexels.com/photos/8389780/pexels-photo-8389780.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Educational Services",
      description:
        "Educational services enhance literacy, support early childhood growth, and promote lifelong learning, strengthening the community's educational foundation.",
    },
    {
      image:
        "https://images.pexels.com/photos/3205570/pexels-photo-3205570.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Skill Development and Economic Empowerment",
      description:
        "Skill development programs empower individuals with job skills and financial management, fostering economic independence and community growth.",
    },
    {
      image:
        "https://images.pexels.com/photos/6257075/pexels-photo-6257075.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Health and Social Awareness",
      description:
        "Health and social awareness programs promote hygiene, gender equality, and environmental sustainability, enhancing community well-being and inclusivity.",
    },
    {
      image:
        "https://images.pexels.com/photos/2561628/pexels-photo-2561628.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Community Engagement",
      description:
        "Community engagement involves discussion forums that empower residents and awareness campaigns that educate on key issues. Together, they create an informed community that drives positive change.",
    },
  ];

  return (
    <div className="w-full flex flex-col items-center">
      <h1 className="relative text-4xl font-medium text-center mb-7 mt-5">
        OUR SERVICES
        <img
          src="./ul.png"
          alt="underline decoration"
          className="w-[250px] mx-auto mt-2"
        />
      </h1>

      <div className="flex flex-wrap mx-[20px] justify-center gap-8 my-[50px]">
        {services.map((item, i) => (
          <div
            key={i}
            className="relative flex flex-col sm:flex-row w-full sm:w-[478px] h-auto sm:h-[287px] gap-4 rounded-lg overflow-hidden"
          >
            {/* Image in front */}
            <div className="h-[242px] w-[242px] relative z-10 mb-[30px]">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Text div behind */}
            <div className="flex flex-col justify-center p-4 h-[242px] w-[371px] bg-blue-200 relative z-0 sm:ml-[-100px] mt-[30px]">
              <h2 className="ml-[110px] text-[14px] font-semibold">
                {item.title}
              </h2>
              <p className=" ml-[110px] text-[12px] p-[5px]">
                {item.description}
              </p>
              <Link
                to={`/services/${i}`}
                className="ml-[110px]  text-[14px] flex items-center mt-2 text-blue-500 hover:underline"
              >
                Learn More <IoIosArrowForward className="ml-1" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurServices;
