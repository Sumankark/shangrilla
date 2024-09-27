import React, { useState } from "react";
import emailjs from "emailjs-com";
import Footer from "../Footer/Footer";
import { toast, ToastContainer, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactUs = () => {
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
        Contact Us
      </h1>

      {/* Main div with proper height and flex distribution */}
      <div className="flex justify-between lg:w-[1040px] h-auto mx-auto p-[40px] bg-gray-100 rounded-[50px] shadow-md mb-[70px] ">
        {/* Image section */}
        <div className="md:w-[48%] md:h-[450px] lg:flex items-center hidden">
          <img
            src="./call.jpg" // Replace with actual image path
            alt="Call Us"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>


        {/* Form section */}
        <div className="lg:w-[48%] w-full">
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium">Name:</label>
              <input
                type="text"
                name="name"
                required
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full p-3 border border-gray-300 rounded shadow-sm"
              />
            </div>
            <div>
              <label className="inline-block align-middle text-l font-medium mr-[20px] ">
                Email:
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
              <label className="block text-sm font-medium">Phone:</label>
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
              <label className="block text-sm font-medium">Message:</label>
              <textarea
                name="message"
                required
                placeholder="Write a message here..."
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
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactUs;
