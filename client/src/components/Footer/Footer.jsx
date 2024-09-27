import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#EEEEEE] mt-[20px]">
      <div className="grid grid-cols-3 py-[30px] lg:p-[50px] ">
        <div className="lg:mx-[50px] px-[20px]">
          <h1 className="font-bold underline text-[20px] md:text-[25px] lg:text-[32px]">
            About Us
          </h1>
          <p className="text-[10px] md:text-[12px] lg:text-[14px] ">
            Founded on BS 2080/03/07, Everest Community Learning Centre (ECLC)
            is an enduring institution focused on educational excellence and
            holistic community development.
          </p>
        </div>
        <div className="lg:mx-[50px] px-[20px]">
          <h1 className="font-bold underline  text-[20px] md:text-[25px] lg:text-[32px]">
            Our Address
          </h1>
          <p className="text-[10px] md:text-[12px] lg:text-[14px]">
            Thulung DudhKoshi,
            <br />
            Rural Municipality wards <br />
            04, 05, and 09, Nepal
          </p>
        </div>
        <div className="lg:mx-[50px] px-[20px]">
          <h1 className="font-bold underline text-[20px] md:text-[25px] lg:text-[32px]">
            Contact Us
          </h1>
          <p className="text-[10px] md:text-[12px] lg:text-[14px]">
            Join Everest Community Learning Centre in our mission of sustainable
            development and community empowerment.{" "}
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
