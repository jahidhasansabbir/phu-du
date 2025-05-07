import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import DoctorCard from "./DoctorCard";

const DoctorsContainer = () => {
  const doctorsData = useLoaderData();
  const [isShow, setIsShow] = useState(false);
  const [doctors, setDoctor] = useState(doctorsData);
  useEffect(() => {
    if (!isShow) setDoctor(doctorsData.slice(0, 6));
    else setDoctor(doctorsData);
  }, [doctorsData, isShow]);

  return (
    <div className="w-10/12 mx-auto">
      <div className="max-w-3xl mx-auto mb-5 md:mb-8">
        <h1 className="font-extrabold text-2xl md:text-4xl text-center">
          Our Best Doctors
        </h1>
        <p className="text-center">
          Our platform connects you with verified, experienced doctors across
          various specialties — all at your convenience. Whether it's a routine
          checkup or urgent consultation, book appointments in minutes and
          receive quality care you can trust.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {doctors.map((doctor) => (
          <DoctorCard
            key={doctor.registration_number}
            doctor={doctor}
          ></DoctorCard>
        ))}
      </div>
      <div className="text-center mt-6 mb-16">
        <button
          onClick={() => setIsShow(!isShow)}
          className="px-4 py-2 rounded-full text-white bg-[#176AE5]"
        >
          {isShow ? "Show less" : "Show All"}
        </button>
      </div>
    </div>
  );
};

export default DoctorsContainer;
