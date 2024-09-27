import React from "react";
import Footer from "../Footer/Footer";

const AboutUs = () => {
  const sections = [
    {
      title: "Vision",
      content:
        "ECLC is steadfast in its commitment to uplifting marginalized communities, particularly focusing on women’s empowerment and addressing the needs of low-literate individuals.",
      logo: "./ln.png",
    },
    {
      title: "Mission",
      content:
        "ECLC’s mission is to foster literacy and financial independence by providing opportunities for individuals to acquire livelihood skills in their native languages, promoting sustainable development.",
      logo: "./hh.png",
    },
  ];

  return (
    <div className="mt-[100px]">
      <div>
        <h1 className="text-4xl text-[#0094FF] mt-4 mb-4 text-center font-bold">
          About Us
        </h1>

        <div
          className="item-center mx-[10px] md:mx-[60px] lg:mx-[100px] p-[30px] md:p-[50px] text-white rounded-[50px] mt-10"
          style={{ background: "#38ABFF" }}
        >
          <h2 className="text-3xl md:text-[25px] lg:text-[36px] font-bold text-center">
            Everest Community Learning Center (ECLC)
          </h2>
          <p className="text-[12px] md:text-[15px] lg:text-[17px] mt-4">
            The Government of Nepal is dedicated to the Sustainable Development
            Goals, especially Goal 4, which promotes inclusive, quality
            education and lifelong learning. The new School Sector Development
            Plan highlights the need for non-formal education to address diverse
            community needs, particularly through skill development for
            underserved groups. The Capacity Development for Education (CapED)
            program partners with the Ministry of Education to improve
            educational quality and opportunities for marginalized populations,
            focusing on community learning centers (CLCs) as resource hubs. A
            recent survey of CLCs provided crucial baseline data for future
            assessments. Similarly, the Everest Community Learning Center (ECLC)
            aims to enhance local education by using technology and community
            involvement, ensuring inclusivity and alignment with national
            educational goals.
          </p>
        </div>
      </div>

      <div className="vision-mission md:px-[40px] lg:px-[80px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 p-10">
          {sections.map((section, index) => (
            <div key={index} className="border p-6 rounded-lg">
              <div className="flex gap-4">
                <img
                  src={section.logo}
                  alt={section.title}
                  className="w-[40px] h-[40px] object-cover"
                />
                <h2 className="font-bold text-xl text-[#0094FF]">
                  {section.title}
                </h2>
              </div>
              <p className="mt-4 text-[12px] md:text-[15px] lg:text-[17px] ">
                {section.content}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div
        className="item-center mx-[10px] md:mx-[60px] lg:mx-[100px] p-[10px] md:p-[20px] lg:p-[30px] text-white rounded-[50px] px-[10px] md:px-[30px] lg:px-[50px]"
        style={{ background: "#38ABFF" }}
      >
        <div className="full px-[30px] items-center">
          <h3 className="text-3xl font-bold text-center my-5 pb-1">
            Aims and Objectives
          </h3>
          <div className="text-[12px] md:text-[15px] lg:text-[17px] pb-3">
            <p>
              The Everest Community Learning System (ECLS) is committed to
              several key objectives aimed at fostering community development
              and empowerment:
            </p>
            <ul className="list-disc ml-5">
              <li>Promoting Literacy and Lifelong Learning</li>
              <li>Preserving Indigenous Knowledge</li>
              <li>Raising Social Awareness</li>
              <li>Addressing Local Challenges</li>
              <li>Promoting Gender Equality</li>
              <li>Enhancing Socio-economic Development</li>
              <li>Facilitating Social Empowerment</li>
              <li>Creating Discussion Forums</li>
            </ul>
            <p>
              Overall, the Everest Community Learning System aspires to be a
              catalyst for sustainable community development, lifelong
              education, and social transformation.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
