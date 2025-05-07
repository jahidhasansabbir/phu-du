import React from "react";
import HeroImage from "../assets/banner-img-1.png"
const Banner = () => {
  return (
    <div className="hero w-11/12 mx-auto border-4 border-white rounded-2xl bg-linear-to-b from-[#fff0] to-[#FFF] p-5 md:p-16  md:mb-16 md:mt-5 my-6">
      <div className="text-center mx-auto">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl md:text-5xl font-bold ">Dependable Care, Backed by Trusted Professionals.</h1>
          <p className="py-6">
          Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.
          </p>
          <div className="flex justify-center gap-3 flex-col md:flex-row">
          <input type="text" placeholder="Search any doctor.." className="input rounded-full w-full" />
          <a className="btn rounded-full text-white bg-[#176AE5]">Search Now</a>
          </div>
        </div>
        <div className="flex justify-between gap-5 mt-4 flex-col md:flex-row">
            <img className="w-[100%] md:w-1/2" src={HeroImage} alt="" />
            <img className="w-[100%] md:w-1/2" src={HeroImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
