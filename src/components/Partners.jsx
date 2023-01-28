import React, { useEffect } from "react";
import AOS from "aos";
import partner_1 from "../data/images/Partners/partner_1.png";
import partner_2 from "../data/images/Partners/partner_2.png";
import partner_3 from "../data/images/Partners/partner_3.png";
import partner_4 from "../data/images/Partners/partner_4.png";
import partner_5 from "../data/images/Partners/partner_5.png";
const Partners = () => {
  const firstLogos = [partner_1, partner_2, partner_3, partner_4, partner_5];
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <section
      data-aos="fade-up"
      className=" partners_section relative mt-60  w-full md:mt-8 md:py-16 flex flex-col justify-center items-center md:px-20"
    >
      <div className="w-full slider relative">
        {" "}
        <div className="flex   slide-track  slideLogos mb-12 px-6 w-full justify-between flex-row items-center overflow-x-scroll md:overflow-hidden">
          {firstLogos.map((img) => (
            <img
              key={img}
              className="w- mx-6 md:mx-2  slideImage slide"
              src={img}
              alt={img}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
