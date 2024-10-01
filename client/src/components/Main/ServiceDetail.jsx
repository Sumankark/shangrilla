import React from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { useTranslation } from "react-i18next";

const ServiceDetail = () => {
  const { t } = useTranslation();
  const { state } = useLocation();
  const { service } = state;

  return (
    <div className="p-8 pt-5 mx-[100px] mt-[100px]">
      <h1 className="text-[30px] font-normal mb-4">{service.title}</h1>
      <div className="">
        {service.details.map((detail, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row h-auto mb-4 ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            } bg-zinc-300`}
          >
            <div className="w-full md:w-[30%] h-auto relative bg-red-200">
              <img
                src={detail.image}
                alt={detail.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full md:w-[70%] p-[30px]">
              <h2 className="text-[16px] font-normal">{detail.title}</h2>
              <p className="text-[12px] font-normal mt-2 text-justify">
                {detail.content}
              </p>
            </div>
          </div>
        ))}
      </div>
      <Link
        to="/"
        className="text-blue-500 flex items-center mb-4 hover:underline"
      >
        <IoIosArrowBack className="mr-1" /> {t("services.back")}
      </Link>
    </div>
  );
};

export default ServiceDetail;
