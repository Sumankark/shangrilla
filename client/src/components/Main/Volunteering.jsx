import React from "react";
import { useTranslation } from "react-i18next";

const Volunteering = () => {
  const { t } = useTranslation();

  const services = [
    {
      image:
        "https://glumac.com/wp-content/uploads/2016/03/AshlandYouthCenterComplex_Lnd_150dpi_web-1.jpg",
      title: t("volunteering.types.t1_title"),
      description: t("volunteering.types.t1_description"),
    },
    {
      image:
        "https://cdnsm5-ss10.sharpschool.com/userfiles/servers/server_18854385/image/departments/children's%20center/img_1210.jpg",
      title: t("volunteering.types.t2_title"),
      description: t("volunteering.types.t2_description"),
    },
    {
      image:
        "https://cdn.prod.website-files.com/604a97c70aee09eed25ce991/61897a35583a9b51db018d3e_MartinPublicSeating-97560-Importance-School-Library-blogbanner1.jpg",
      title: t("volunteering.types.t3_title"),
      description: t("volunteering.types.t3_description"),
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTx8iC49YqWPDHm7VrHIsLgaNor6btnDwwaLA&s",
      title: t("volunteering.types.t4_title"),
      description: t("volunteering.types.t4_description"),
    },
  ];

  return (
    <div className="relative w-full flex flex-col items-center py-12 pb-20 bg-white">
      <h1 className="text-4xl font-medium text-center mb-7 mt-5 uppercase">
        {t("volunteering.title")}
        <img
          src="./ul.png"
          alt="underline decoration"
          className="w-[450px] mx-auto mt-2"
        />
      </h1>
      <div className="flex flex-wrap justify-center gap-8">
        {services.map((item, i) => (
          <div
            key={i}
            className="relative w-[250px] h-[250px] perspective-1000 text-center"
          >
            <div className="flip-card-inner relative w-full h-full transition-transform duration-500 ease-in-out transform-style-3d hover:rotate-y-180">
              {/* Front side of the card */}
              <div className="flip-card-front absolute w-full h-full backface-hidden bg-red-200 rounded-full ">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover rounded-full shadow-lg"
                />
                <h2 className="absolute rounded-full top-0 left-0 w-full h-full bg-black/25 flex flex-col justify-center items-center text-center text-white font-bold text-[14px] px-4">
                  {item.title}
                </h2>
              </div>
              {/* Back side of the card */}
              <div className="flip-card-back absolute w-full h-full bg-black/25  backface-hidden rotate-y-180 flex flex-col items-center justify-center rounded-full">
                <p className="text-[14px] text-center  p-2">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Volunteering;
