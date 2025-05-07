import React from "react";
import { NavLink } from "react-router";

const DoctorCard = ({ doctor }) => {
  const { image, experience, name, registration_number, education } = doctor;
  // const image =
  // "https://img.freepik.com/free-photo/woman-doctor-wearing-lab-coat-with-stethoscope-isolated_1303-29791.jpg?t=st=1745170541~exp=1745174141~hmac=2cf1470698f182a2ca6456bd1c10f70d05faad46f24f0a5705d88fff333bd9fe&w=996";
  // console.log(image,experience,name,registration_number,education);
  return (
    <div className="bg-white rounded-xl p-8 flex flex-col h-full">
      <img className="w-[100%] rounded-xl h-[230px]" src={image} />
      <div className="flex-grow mb-4">
        <div className="flex justify-between my-4">
          <span className="text-sm font-medium h-10 flex items-center justify-center px-4 rounded-full text-[#09982F] bg-[#09982F1A]">
            Available
          </span>
          <span className="text-sm font-medium h-10 flex items-center justify-center px-4 rounded-full text-[#176AE5] bg-[#176AE51A]">
            {experience} experience
          </span>
        </div>
        <h1 className="text-2xl font-extrabold">{name}</h1>
        <p className="text-lg font-medium text-gray-500 border-b-2 border-dashed pb-4 my-4">
          {education}
        </p>
        <p className="text-lg font-medium text-gray-500">
          {registration_number}
        </p>
      </div>
        <NavLink to={`/doctors/${registration_number}`}>
      <div className="flex mt-auto">
          <button className="btn border border-[#176AE5] text-xl text-[#176AE5] font-bold rounded-full w-full">
            View Details
          </button>
      </div>
        </NavLink>
    </div>
  );
};

export default DoctorCard;
