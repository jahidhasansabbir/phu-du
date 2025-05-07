import AppointedDoctor from "./AppointedDoctor";

const BookedDoctor = ({doctors, setDoctors}) => {
    
  return (
    <div>
        <div className="max-w-4xl mx-auto -mb-4">
        <h1 className="text-4xl font-extrabold text-center">My Today Appointments</h1>
        <p className="text-gray-500 text-center">Our platform connects you with verified, experienced doctors across various specialties — all at your convenience.</p>
        </div>
      {doctors.map((doctor)=><AppointedDoctor key={doctor.registration_number} doctor={doctor} setDoctors={setDoctors}></AppointedDoctor>)}
    </div>
  );
};

export default BookedDoctor;
