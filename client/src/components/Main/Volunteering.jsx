import React from "react";

const Volunteering = () => {
  const services = [
    {
      image:
        "https://glumac.com/wp-content/uploads/2016/03/AshlandYouthCenterComplex_Lnd_150dpi_web-1.jpg",
      title: "Library Volunteering",
      description:
        "Assist in managing our library, providing resources and support for educational and personal development.",
    },
    {
      image:
        "https://cdnsm5-ss10.sharpschool.com/userfiles/servers/server_18854385/image/departments/children's%20center/img_1210.jpg",
      title: "Children's Center Volunteering",
      description:
        "Engage with children aged 5 to 8, organizing fun learning activities and helping them explore their creativity.",
    },
    {
      image:
        "https://cdn.prod.website-files.com/604a97c70aee09eed25ce991/61897a35583a9b51db018d3e_MartinPublicSeating-97560-Importance-School-Library-blogbanner1.jpg",
      title: "General Administration Volunteering",
      description:
        "Support the operational aspects of the centre, including planning and customer service, ensuring a smooth experience for visitors.",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTx8iC49YqWPDHm7VrHIsLgaNor6btnDwwaLA&s",
      title: "Computer Lab Volunteering",
      description:
        "Teach essential computer skills to community members, particularly women and youth, using our equipped computer lab.",
    },
  ];

  return (
    <div className="relative w-full flex flex-col items-center">
      <h1 className="text-4xl font-medium text-center mb-7 mt-5">
        Volunteering Opportunities
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
