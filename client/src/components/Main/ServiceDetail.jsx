import React from "react";
import { useParams, Link } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";

const ServiceDetail = () => {
  const { id } = useParams();

  const services = [
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJXEMRznH4NUZKT4Iuk602MISOJHd6e-LZdA&s",
      title: "Educational Services",
      description: [
        {
          title: "Literacy Programs",
          content:
            "Classes designed to improve reading and writing skills among community members.",
        },
        {
          title: "Early Childhood Development Programs",
          content:
            "Initiatives focused on promoting the growth and learning of young children.",
        },
        {
          title: "Library Services",
          content:
            "Access to books, newspapers, and other reading materials to foster a culture of learning.",
        },
      ],
    },
    {
      image: "https://static.mygov.in/media/blog/2020/02/tn-1.jpg",
      title: "Skill Development and Economic Empowerment",
      description: [
        {
          title: "Income Generation Activities",
          content:
            "Training in various skills such as tailoring, agriculture, animal husbandry, and ICT to empower individuals economically.",
        },
        {
          title: "Skill Development Workshops",
          content:
            "Training sessions covering trades relevant to the local economy.",
        },
        {
          title: "Savings and Credit Services",
          content:
            "Financial services aimed at helping community members manage their finances effectively.",
        },
      ],
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThtLmybQVTzoJWIs2tARz6vi9smhF_7A1CZg&s",
      title: "Health and Social Awareness",
      description: [
        {
          title: "Health and Sanitation Initiatives",
          content:
            "Awareness programs promoting health practices and sanitation within the community.",
        },
        {
          title: "Gender Rights Advocacy",
          content:
            "Engaging in raising awareness about gender equality and addressing discrimination issues.",
        },
        {
          title: "Environmental Awareness Programs",
          content:
            "Educating the community about environmental conservation and sustainable practices.",
        },
      ],
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf8Klqecyqk_lJJSHNMRYJbmce_Pd9bLlacQ&s",
      title: "Community Engagement",
      description: [
        {
          title: "Discussion Forums",
          content:
            "Platforms for community members to engage in discussions about local issues and development needs.",
        },
        {
          title: "Awareness Campaigns",
          content:
            "Programs focused on educating the community about health issues, environmental sustainability, and social justice.",
        },
      ],
    },
  ];

  const service = services[id];

  return (
    <div className="p-8 pt-16 relative z-10 bg-white mx-[100px] mt-[100px]">
      <div>
        <img src={service.image} alt={service.title} className="w-[400px]" />
      </div>
      <h1 className="text-3xl font-bold mb-4">{service.title}</h1>
      <ul className="list-disc pl-5">
        {service.description.map((desc, index) => (
          <li key={index} className="mb-2">
            <h2 className="text-xl font-semibold">{desc.title}</h2>
            <p>{desc.content}</p>
          </li>
        ))}
      </ul>
      <Link to="/" className="text-blue-500 mt-4 inline-block">
        <div className="flex text-center ">
          <IoArrowBack /> Back
        </div>
      </Link>
    </div>
  );
};

export default ServiceDetail;
