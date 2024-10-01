import React from "react";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { useTranslation } from "react-i18next";

const OurServices = () => {
  const { t } = useTranslation();

  const services = [
    {
      image:
        "https://images.pexels.com/photos/8389780/pexels-photo-8389780.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: t("services.i1.title"),
      description: t("services.i1.description"),
      details: [
        {
          image:
            "https://api.asm.skype.com/v1/objects/0-jhb-d4-ec0f58f14cc5d79e94a168b6afb790aa/views/imgpsh_fullsize_anim",
          title: t("services.i1.details.d1_title"),
          content: t("services.i1.details.d1_content"),
        },
        {
          image:
            "https://api.asm.skype.com/v1/objects/0-jhb-d6-08d510e49046af8d00db8f47a0fa2e81/views/imgpsh_fullsize_anim",
          title: t("services.i1.details.d2_title"),
          content: t("services.i1.details.d2_content"),
        },
        {
          image:
            "https://api.asm.skype.com/v1/objects/0-jhb-d2-9aa9a4b6e40e1d10f2a7bd1425aa9601/views/imgpsh_fullsize_anim",
          title: t("services.i1.details.d3_title"),
          content: t("services.i1.details.d3_content"),
        },
      ],
    },
    {
      image:
        "https://images.pexels.com/photos/3205570/pexels-photo-3205570.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: t("services.i2.title"),
      description: t("services.i2.description"),
      details: [
        {
          image:
            "https://api.asm.skype.com/v1/objects/0-jhb-d10-80712866a5262a543e156172e51d8f5e/views/imgpsh_fullsize_anim",
          title: t("services.i2.details.d1_title"),
          content: t("services.i2.details.d1_content"),
        },
        {
          image:
            "https://api.asm.skype.com/v1/objects/0-jhb-d8-6b57ed8bd824bd5abda2b5b3b4003a5f/views/imgpsh_fullsize_anim",
          title: t("services.i2.details.d2_title"),
          content: t("services.i2.details.d2_content"),
        },
        {
          image:
            "https://api.asm.skype.com/v1/objects/0-jhb-d5-d20d400a93b77f25edaf5e07ae2de0f1/views/imgpsh_fullsize_anim",
          title: t("services.i2.details.d3_title"),
          content: t("services.i2.details.d3_content"),
        },
      ],
    },
    {
      image:
        "https://images.pexels.com/photos/6257075/pexels-photo-6257075.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: t("services.i3.title"),
      description: t("services.i3.description"),
      details: [
        {
          image:
            "https://api.asm.skype.com/v1/objects/0-jhb-d5-08c1f4034180de251479bca4239a0c43/views/imgpsh_fullsize_anim",
          title: t("services.i3.details.d1_title"),
          content: t("services.i3.details.d1_content"),
        },
        {
          image:
            "https://api.asm.skype.com/v1/objects/0-jhb-d9-83f74032e3aed894fd763ab908e40260/views/imgpsh_fullsize_anim",
          title: t("services.i3.details.d2_title"),
          content: t("services.i3.details.d2_content"),
        },
        {
          image:
            "https://api.asm.skype.com/v1/objects/0-jhb-d3-f55af15ff5d1b8bff63830989e3bce76/views/imgpsh_fullsize_anim",
          title: t("services.i3.details.d3_title"),
          content: t("services.i3.details.d3_content"),
        },
      ],
    },
    {
      image:
        "https://images.pexels.com/photos/2561628/pexels-photo-2561628.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: t("services.i4.title"),
      description: t("services.i4.description"),
      details: [
        {
          image:
            "https://api.asm.skype.com/v1/objects/0-jhb-d5-07b8fe0579d5111f80e962e74c9c509f/views/imgpsh_fullsize_anim",
          title: t("services.i4.details.d1_title"),
          content: t("services.i4.details.d1_content"),
        },
        {
          image:
            "https://api.asm.skype.com/v1/objects/0-jhb-d11-c215b39525ab1d72de1e893ece12cbf9/views/imgpsh_fullsize_anim",
          title: t("services.i3.details.d2_title"),
          content: t("services.i4.details.d2_content"),
        },
      ],
    },
  ];

  return (
    <div className="w-full flex flex-col items-center bg-white py-12 border-2">
      <h1 className="relative text-4xl font-medium text-center mb-7 mt-5 uppercase">
        {t("navbar.services")}
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
                state={{ service: item }} // Pass the service data
                className="ml-[110px] text-[14px] flex items-center mt-2 text-blue-500 hover:underline"
              >
                {t("services.more")} <IoIosArrowForward className="ml-1" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurServices;
