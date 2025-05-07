import { NavLink, useLoaderData, useNavigate, useParams } from "react-router";
import { addToBook, getBooked } from "../utils";
import { toast } from "react-toastify";

const DoctorDetails = () => {
  const navigate = useNavigate();
  const { regId } = useParams();
  const doctorsData = useLoaderData();
  const singleDoctor = doctorsData.find(
    (doctor) => doctor.registration_number === regId
  );
  const {
    image,
    name,
    education,
    speciality,
    working_hospital,
    registration_number,
    availability,
    consultation_fee,
  } = singleDoctor;
  const handleBook = () => {
    const data = getBooked();
    const a = data.find((d) => d.registration_number === registration_number);
    if (a) {
      toast.warn(`Already booked ${name}`);
    } else {
      addToBook(singleDoctor);
      toast.success(`Successfully added ${name}`);
      navigate("/booking");
    }
  };
  return (
    <div className="w-10/12 mx-auto mb-10">
      {/* Title */}
      <div className="flex flex-col items-center bg-white p-4 md:p-12 space-y-3 my-10 rounded-3xl">
        <h1 className="text-center text-xl md:text-3xl font-extrabold">
          Doctor’s Profile Details
        </h1>
        <p className="text-center">
        Get to know the skilled professionals dedicated to guiding your journey toward better health, every step of the way.
        </p>
      </div>
      {/* Doctor details */}
      <div className="flex flex-col md:grid md:grid-cols-12 gap-6 bg-white p-6 md:p-12 rounded-3xl md:space-y-2">
        <div className="md:col-span-4">
          <img src={image} className="h-full rounded-3xl object-fit" alt="" />
        </div>
        <div className="md:col-span-8">
          <h1 className=" text-2xl md:text-3xl font-extrabold">{name}</h1>
          <p className="md:text-lg font-medium text-gray-500">{education}</p>
          <p className="md:text-lg font-medium text-gray-500">{speciality}</p>
          <p className="md:text-lg font-medium text-gray-500 border-b-2 border-dashed pb-2 border-gray-300">
            Working at <br />
            <span className="text-black font-bol">{working_hospital}</span>
          </p>
          <p className="md:text-lg font-medium text-gray-500 border-b-2 border-dashed my-2 pb-2 border-gray-300">
            {registration_number}
          </p>
          <div className=" md:text-lg font-medium text-gray-500 mt-5 flex flex-col md:flex-row md:items-center md:gap-4">
            Available:
            <div className="flex flex-col gap-3 mt-3 md:mt-0 md:flex-row md:items-center">
            {availability.map((day, index) => (
              <span
                className="bg-[#FFA0001A] text-[#FFA000] rounded-full py-2 px-3 text-center"
                key={index}
              >
                {day}
              </span>
            ))}
            </div>
          </div>
          <p className="font-extrabold mt-4 text-sm md:text-base">
            Consultation Fee:{" "}
            <span className="text-[#176AE5] ml-4">
              Taka : {consultation_fee}
            </span>{" "}
            <span className="font-medium text-gray-500">(incl. Vat)</span>{" "}
            <span className="font-medium text-[#176AE5]">Per consultation</span>
          </p>
        </div>
      </div>
      {/* Booking section */}
      <div className=" bg-white p-6  md:p-8 my-8 md:my-10 rounded-3xl">
        <h1 className="text-xl md:text-2xl font-extrabold text-center border-b-2 border-dashed pb-4 border-gray-300">
          Book an Appointment
        </h1>
        <div className="flex justify-between items-center my-4 border-b-2 border-gray-200 pb-4">
          <span className="text-sm md:text-lg font-bold">Availability</span>
          <span className="text-xs md:text-sm font-medium text-[#09982F] bg-[#09982F1A] rounded-full px-2 md:px-4 py-1 ">
            Doctor Available Today
          </span>
        </div>
        <p className="text-[#FFA000] font-medium bg-[rgba(255,162,0,0.1)] px-4 py-2 rounded-lg md:rounded-full  w-fit">
          Due to high patient volume, we are currently accepting appointments
          for today only. We appreciate your understanding and cooperation.
        </p>
        <div>
          <button
            onClick={handleBook}
            className="text-sm md:text-xl font-bold text-white bg-[#176AE5] rounded-full px-5 py-2.5 w-full mt-12 mb-5"
          >
            Book Appointment Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default DoctorDetails;
