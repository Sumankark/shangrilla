import React from "react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-[#EEEEEE]">
      <div className="grid grid-cols-3 py-[30px] lg:p-[50px] ">
        <div className="lg:mx-[50px] px-[20px]">
          <h1 className="font-bold underline text-[20px] md:text-[25px] lg:text-[32px]">
            {t("navbar.about")}
          </h1>
          <p className="text-[10px] md:text-[12px] lg:text-[14px] ">
            {t("footer.about")}
          </p>
        </div>
        <div className="lg:mx-[50px] px-[20px]">
          <h1 className="font-bold underline  text-[20px] md:text-[25px] lg:text-[32px]">
            {t("footer.address.title")}
          </h1>
          <p className="text-[10px] md:text-[12px] lg:text-[14px]">
            {t("footer.address.content1")}
            <br />
            {t("footer.address.content2")}
            <br />
            {t("footer.address.content3")}
          </p>
        </div>
        <div className="lg:mx-[50px] px-[20px]">
          <h1 className="font-bold underline text-[20px] md:text-[25px] lg:text-[32px]">
            {t("footer.contact.title")}
          </h1>
          <p className="text-[10px] md:text-[12px] lg:text-[14px]">
            {t("footer.contact.content1")} <br />
            {t("footer.contact.content2")}
          </p>
        </div>
      </div>
      <img
        src="./logo.png"
        alt="logo"
        className="h-10 md:h-[13px] lg:h-16 p-2 ml-[100px]"
      />{" "}
    </div>
  );
};

export default Footer;
