import React, { useState } from "react";
import emailjs from "emailjs-com";
import { toast, ToastContainer, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useTranslation } from "react-i18next";
import { FaPhoneAlt, FaUser } from "react-icons/fa";
import { MdOutlineContactMail } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { IoLocation } from "react-icons/io5";
import { FaMapLocationDot } from "react-icons/fa6";

const ContactUs = () => {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    name: "",
    address: "",
    email: "",
    number: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_g01hz3c",
        "template_fgulsk2",
        {
          ...formData,
          from_email: formData.email,
        },
        "nDE9j-VKZrW-mAstR"
      )
      .then(
        (response) => {
          console.log(
            "Email sent successfully!",
            response.status,
            response.text
          );
          setFormData({
            name: "",
            address: "",
            email: "",
            number: "",
            message: "",
          });
          toast.success(t("contact.success"), {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "colored",
            transition: Zoom,
          });
        },
        (error) => {
          console.error("Failed to send email. Error:", error);
          toast.error(t("contact.error"), {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "colored",
            transition: Zoom,
          });
        }
      );
  };

  return (
    <section className="mt-[100px]">
      <ToastContainer />
      <div className="flex flex-col md:flex-row w-full max-w-6xl mx-auto p-6">
        <div className="flex-1 mb-6 md:mb-0 md:mr-6 p-6 border-r">
          <form className="space-y-4" onSubmit={handleSubmit}>
            {/* Name Field */}
            <div className="relative w-full max-w-sm flex items-center">
              <div className="absolute right-0 mr-3 ">
                <FaUser />
              </div>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="peer w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                aria-label={t("contact.name")}
              />
              <label
                htmlFor="name"
                className="absolute cursor-text bg-white px-1 left-2.5 top-2.5 text-slate-400 text-sm transition-all transform origin-left peer-focus:-top-2 peer-focus:left-2.5 peer-focus:text-xs peer-focus:text-slate-400 peer-focus:scale-90"
              >
                {t("contact.name")}
              </label>
            </div>

            {/* Address Field */}
            <div className="relative w-full max-w-sm flex items-center">
              <div className="absolute right-0 mr-3 text-xl">
                <IoLocation />
              </div>
              <input
                type="text"
                name="address"
                required
                value={formData.address}
                onChange={handleChange}
                className="peer w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                aria-label={t("contact.address")}
              />
              <label
                htmlFor="name"
                className="absolute cursor-text bg-white px-1 left-2.5 top-2.5 text-slate-400 text-sm transition-all transform origin-left peer-focus:-top-2 peer-focus:left-2.5 peer-focus:text-xs peer-focus:text-slate-400 peer-focus:scale-90"
              >
                {t("contact.address")}
              </label>
            </div>

            {/* Email Field */}
            <div className="relative w-full max-w-sm flex items-center">
              <div className="absolute right-0 mr-3 text-lg">
                <MdEmail />
              </div>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="peer w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                aria-label={t("contact.email")}
              />
              <label
                htmlFor="email"
                className="absolute cursor-text bg-white px-1 left-2.5 top-2.5 text-slate-400 text-sm transition-all transform origin-left peer-focus:-top-2 peer-focus:left-2.5 peer-focus:text-xs peer-focus:text-slate-400 peer-focus:scale-90"
              >
                {t("contact.email")}
              </label>
            </div>

            {/* Phone Number Field */}
            <div className="relative w-full max-w-sm flex items-center">
              <div className="absolute right-0 mr-3">
                <FaPhoneAlt />
              </div>

              <input
                type="text"
                name="number"
                required
                value={formData.number}
                onChange={handleChange}
                maxLength={10}
                pattern="[0-9]*"
                inputMode="numeric"
                className="peer w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                aria-label={t("contact.phone")}
              />
              <label
                htmlFor="number"
                className="absolute cursor-text bg-white px-1 left-2.5 top-2.5 text-slate-400 text-sm transition-all transform origin-left peer-focus:-top-2 peer-focus:left-2.5 peer-focus:text-xs peer-focus:text-slate-400 peer-focus:scale-90"
              >
                {t("contact.phone")}
              </label>
            </div>

            {/* Message Field */}
            <div className="relative w-full max-w-sm">
              <textarea
                name="message"
                required
                value={formData.message}
                onChange={handleChange}
                className="peer w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                aria-label={t("contact.message")}
              />
              <label
                htmlFor="message"
                className="absolute cursor-text bg-white px-1 left-2.5 top-2.5 text-slate-400 text-sm transition-all transform origin-left peer-focus:-top-2 peer-focus:left-2.5 peer-focus:text-xs peer-focus:text-slate-400 peer-focus:scale-90"
              >
                {t("contact.message")}
              </label>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-blue-500 text-white p-3 rounded-lg w-full hover:bg-blue-600 transition duration-200"
              >
                {t("contact.send")}
              </button>
            </div>
          </form>
        </div>

        {/* Address Section */}
        <div className="flex-1 mb-6 md:mb-0 md:mt-[30px]">
          <div className="bg-blue-200 flex flex-col items-center p-6 rounded mb-2">
            <div className="text-[50px] bg-white p-2 rounded-full shadow-lg">
              <MdEmail />
            </div>
            <div className="mt-2">{t("footer.contact.content1")} </div>
          </div>

          <div className="bg-blue-200 flex flex-col items-center p-6 rounded mb-2">
            <div className="text-[50px] bg-white p-2 rounded-full shadow-lg">
              <MdOutlineContactMail />
            </div>
            <div className="mt-2">{t("footer.contact.content1")} </div>
          </div>
          <div className="bg-blue-200 flex flex-col items-center p-6 rounded">
            <div className="text-[50px] bg-white p-2 rounded-full shadow-lg">
              <FaMapLocationDot />
            </div>
            <div className="mt-2">{t("footer.contact.content1")} </div>
          </div>
        </div>
      </div>

      {/* Google Map */}
      <div className="m-6 mx-10">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d37209.860260406975!2d86.7191569901469!3d27.414264650251237!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e93b0031b44d6f%3A0xa10221f0b1e61ffd!2zVGh1bHVuZyBEdWRoa2lzaGkgUnVyYWwgTXVuaWNpcGFsaXR5IDQg4KSl4KWB4KSy4KWB4KSZIOCkpuClgeCkp-CkleCli-CktuClgCDgpJfgpL7gpIngpIEg4KSq4KS-4KSy4KS_4KSV4KS-IOClqg!5e0!3m2!1sen!2snp!4v1727766183777!5m2!1sen!2snp"
          className="w-full h-[300px] border-2 rounded-lg"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  );
};

export default ContactUs;
