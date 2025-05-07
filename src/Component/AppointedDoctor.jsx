import React from "react";
import { NavLink } from "react-router";
import { getBooked, removeBooked } from "../utils";
import { toast } from "react-toastify";

const AppointedDoctor = ({ doctor, setDoctors }) => {
  const {
    name,
    education,
    speciality,
    registration_number,
    consultation_fee,
  } = doctor;
  const handleCancelAppointment =()=>{
    removeBooked(registration_number)
    const remainingAppointment = getBooked();
    setDoctors(remainingAppointment);
    toast.error('Appointment cancelled')
  }
  return (
    <div className=" bg-white  p-8 my-8 rounded-3xl">
      <div className="flex justify-between items-center mb-5 border-b-2 border-dashed border-gray-300 pb-4 md:flex-row flex-col gap-1.5">
        <div>
          <h1  className="text-xl font-bold mb-3">{name}</h1>
          <p  className="text-lg font-medium text-gray-400">{education} - {speciality}</p>
        </div>
        <p className="text-lg font-medium text-gray-400">Appointment Fee: {consultation_fee} Take + Vat</p>
      </div>
      <div>
        <NavLink to="/booking">
          <button className="text-xl font-bold text-[#FF0000] bg-white border border-[#ff000051] rounded-full px-5 py-2.5 w-full" onClick={handleCancelAppointment}>
            Cancel Appointment
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default AppointedDoctor;
