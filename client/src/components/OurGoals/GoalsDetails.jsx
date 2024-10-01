import React from "react";
import { useTranslation } from "react-i18next";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";

const GoalsDetails = () => {
  const { t } = useTranslation();

  const goals = [
    {
      logo: "https://cdn-icons-png.freepik.com/256/1430/1430926.png?semt=ais_hybrid",
      title: t("goals.aims.aims_t1"),
      description: t("goals.aims.aims_d1"),
    },
    {
      logo: "https://cdn-icons-png.freepik.com/256/5635/5635526.png?semt=ais_hybrid",
      title: t("goals.aims.aims_t2"),
      description: t("goals.aims.aims_d2"),
    },
    {
      logo: "https://cdn-icons-png.freepik.com/256/10961/10961962.png?semt=ais_hybrid",
      title: t("goals.aims.aims_t3"),
      description: t("goals.aims.aims_d3"),
    },
    {
      logo: "https://cdn-icons-png.freepik.com/256/4258/4258109.png?semt=ais_hybrid",
      title: t("goals.aims.aims_t4"),
      description: t("goals.aims.aims_d4"),
    },
    {
      logo: "https://cdn-icons-png.freepik.com/256/1415/1415498.png?semt=ais_hybrid",
      title: t("goals.aims.aims_t5"),
      description: t("goals.aims.aims_d5"),
    },
    {
      logo: "https://cdn-icons-png.freepik.com/256/2104/2104160.png?semt=ais_hybrid",
      title: t("goals.aims.aims_t6"),
      description: t("goals.aims.aims_d6"),
    },
    {
      logo: "https://cdn-icons-png.freepik.com/256/9125/9125435.png?semt=ais_hybrid",
      title: t("goals.aims.aims_t7"),
      description: t("goals.aims.aims_d7"),
    },
    {
      logo: "https://cdn-icons-png.freepik.com/256/2661/2661386.png?semt=ais_hybrid",
      title: t("goals.aims.aims_t8"),
      description: t("goals.aims.aims_d7"),
    },
  ];
  return (
    <div>
      <div className="w-full h-auto px-4 md:px-8 lg:px-12 py-8 mt-12">
        <h1 className="text-4xl font-medium text-center mb-7 mt-5 uppercase">
          {t("navbar.goals")}
        </h1>

        <Link
          to="/"
          className="text-blue-500 flex items-center mb-4 hover:underline ml-[120px] "
        >
          <IoIosArrowBack className="mr-1" /> {t("services.back")}
        </Link>

        <div className="flex flex-col px-[100px] items-center justify-center">
          {goals.map((item, i) => (
            <div key={i} className="w-full p-4">
              <div className="flex flex-col items-center bg-[#DFDFDF] p-6">
                <img
                  src={item.logo}
                  alt={item.title}
                  className="h-[60px] md:h-[80px] lg:h-[100px] mt-10"
                />
                <h1 className="text-lg font-semibold mt-5 text-center">
                  {item.title}
                </h1>
                <p className="text-base text-center mt-3">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GoalsDetails;
