import React, { useState } from "react";
import emailjs from "emailjs-com";
import { toast, ToastContainer, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useTranslation } from "react-i18next";

const ContactUs = () => {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    name: "",
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
          from_email: formData.email, // Use the email from the form data as the sender's email
        },
        "nDE9j-VKZrW-mAstR"
      ) // Your EmailJS User ID
      .then(
        (response) => {
          console.log(
            "Email sent successfully!",
            response.status,
            response.text
          );

          // Optionally, you can reset the form or show a success message here
          setFormData({ name: "", email: "", number: "", message: "" });
          toast.success("Message Sent Successfully", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Zoom,
          });
        },
        (error) => {
          console.error("Failed to send email. Error:", error);
          toast.error("Failed to send message", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Zoom,
          });
        }
      );
  };

  return (
    <div className="mt-[100px]">
      <ToastContainer />
      <h1 className="text-4xl text-[#000000] font-bold text-center mb-[40px]">
        <img
          src="./contact.png"
          alt="favicon"
          className="inline-block w-[40px] h-[40px] mr-3"
        />
        {t("navbar.contact")}
      </h1>

      <div className="flex w-full ">
        <div className="flex w-[50%] h-auto mx-auto p-[40px] border-r mb-[70px] mx-20 ">
          {/* Form section */}
          <div className=" w-full ">
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-medium">
                  {t("contact.name")}
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder={t("contact.placeholder.name")}
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 block w-full p-3 border border-gray-300 rounded shadow-sm"
                />
              </div>
              <div>
                <label className="inline-block align-middle text-l font-medium mr-[20px] ">
                  {t("contact.email")}
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="example@gmail.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full p-3 border border-gray-300 rounded shadow-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">
                  {t("contact.phone")}
                </label>
                <input
                  type="number"
                  name="number"
                  required
                  placeholder="XXXXXXXXXX"
                  value={formData.number}
                  onChange={handleChange}
                  className="mt-1 block w-full p-3 border border-gray-300 rounded shadow-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">
                  {t("contact.message")}
                </label>
                <textarea
                  name="message"
                  required
                  placeholder={t("contact.placeholder.message")}
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-1 block w-full p-4 h-36 border border-gray-300 rounded shadow-sm"
                />
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="bg-[#0094FF] text-white p-3 rounded-xl items-center w-[200px] hover:bg-blue-700 transition"
                >
                  {t("contact.send")}
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="flex flex-col w-[50%] w-full mb-20 ">
          <div className="">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113322.81794442945!2d86.62953522408955!3d27.4275732241713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e93c9ab721273d%3A0x8fd648407697142!2sThulung%20Dudhkoshi!5e0!3m2!1sen!2snp!4v1727761258186!5m2!1sen!2snp"
              width="500"
              height="350"
              style={{ border: "0" }} // Change style prop to an object
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className=" mt-10">
            <h1 className="text-[18px] font-semibold underline">
              {t("navbar.name")}
            </h1>
            <p className="mt-2">{t("footer.about")}</p>
            <p className=" mt-2">
              {t("footer.address.content1")}
              <br />
              {t("footer.address.content2")}
              <br />
              {t("footer.address.content3")}{" "}
            </p>
            <p className="mt-2">
              {t("footer.contact.content1")} <br />
              {t("footer.contact.content2")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
