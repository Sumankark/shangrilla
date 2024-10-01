import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";

const OurGoals = () => {
  const { t } = useTranslation();

  const goals = [
    {
      logo: "https://cdn-icons-png.freepik.com/256/1430/1430926.png?semt=ais_hybrid",
      title: t("goals.aims.aims_t1"),
      description:
        "ECLC collaborates with various non-governmental organizations (NGOs) to expand its outreach and leverage additional resources. These partnerships enable ECLC to tap into the expertise and funding opportunities that NGOs provide, enhancing program delivery and community engagement.",
    },
    {
      logo: "https://cdn-icons-png.freepik.com/256/5635/5635526.png?semt=ais_hybrid",
      title: t("goals.aims.aims_t2"),
      description:
        "ECLC works closely with government bodies, including the Ministry of Education, to ensure that its initiatives align with national educational standards and development goals. This collaboration facilitates access to governmental resources and support, which is essential for implementing effective educational programs.",
    },
    {
      logo: "https://cdn-icons-png.freepik.com/256/10961/10961962.png?semt=ais_hybrid",
      title: t("goals.aims.aims_t3"),
      description:
        "ECLC participates in multi-stakeholder platforms that bring together diverse entities—including businesses, NGOs, and government representatives—to address shared challenges. These initiatives foster collective action and resource sharing, amplifying the impact of ECLC's programs.",
    },
    {
      logo: "https://cdn-icons-png.freepik.com/256/4258/4258109.png?semt=ais_hybrid",
      title: t("goals.aims.aims_t4"),
      description:
        "Through partnerships with educational institutions and NGOs, ECLC engages in capacity-building efforts aimed at training educators and community leaders. This not only enhances local expertise but also ensures sustainability by empowering individuals within the community.",
    },
    {
      logo: "https://cdn-icons-png.freepik.com/256/1415/1415498.png?semt=ais_hybrid",
      title: t("goals.aims.aims_t5"),
      description:
        "ECLC collaborates with various non-governmental organizations (NGOs) to expand its outreach and leverage additional resources. These partnerships enable ECLC to tap into the expertise and funding opportunities that NGOs provide, enhancing program delivery and community engagement.",
    },
    {
      logo: "https://cdn-icons-png.freepik.com/256/2104/2104160.png?semt=ais_hybrid",
      title: t("goals.aims.aims_t6"),
      description:
        "ECLC works closely with government bodies, including the Ministry of Education, to ensure that its initiatives align with national educational standards and development goals. This collaboration facilitates access to governmental resources and support, which is essential for implementing effective educational programs.",
    },
    {
      logo: "https://cdn-icons-png.freepik.com/256/9125/9125435.png?semt=ais_hybrid",
      title: t("goals.aims.aims_t7"),
      description:
        "ECLC participates in multi-stakeholder platforms that bring together diverse entities—including businesses, NGOs, and government representatives—to address shared challenges. These initiatives foster collective action and resource sharing, amplifying the impact of ECLC's programs.",
    },
    {
      logo: "https://cdn-icons-png.freepik.com/256/2661/2661386.png?semt=ais_hybrid",
      title: t("goals.aims.aims_t8"),
      description:
        "Through partnerships with educational institutions and NGOs, ECLC engages in capacity-building efforts aimed at training educators and community leaders. This not only enhances local expertise but also ensures sustainability by empowering individuals within the community.",
    },
  ];

  return (
    <div className="w-full h-auto px-4 md:px-8 lg:px-12 py-8">
      <h1 className="relative text-4xl font-medium text-center mb-7 mt-5 uppercase">
        {t("navbar.goals")}
        <img
          src="./ul.png"
          alt="underline decoration"
          className="w-[200px] mx-auto mt-2"
        />
      </h1>

      <p className="text-[10px] md:text-[12] lg:text-[14px] font-medium text-center mb-8">
        {t("goals.description")}
      </p>

      <h3 className="text-[15px] md:text-[20px] lg:text-[28px] font-medium text-center mb-6">
        {t("goals.title")}
      </h3>

      <div className="flex flex-wrap items-center justify-center px-[40px] lg:px-[150px] gap-3 mb-10">
        {goals.map((item, i) => (
          <div key={i}>
            <div className="flex flex-col items-center bg-[#DFDFDF] h-[200px] w-[200px] lg:h-[250px] lg:w-[250px] p-6">
              <img
                src={item.logo}
                alt={item.title}
                className="h-[60px] md:h-[80px] lg:h-[100px] mt-10"
              />
              <h1 className="text-[10px] md:text-[12px] lg:text-[14px] font-semibold mt-5 text-center">
                {item.title}
              </h1>
            </div>
          </div>
        ))}
      </div>
      <Link
        to={`/goals`}
        className="mx-[610px] pl-3 p-2 text-[14px] flex items-center justify-center mt-2 bg-blue-500 hover:bg-blue-700 text-white rounded"
      >
        {t("services.more")} <IoIosArrowForward className="ml-1" />
      </Link>
    </div>
  );
};

export default OurGoals;
