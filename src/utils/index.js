
export const addToBook = (doctor)=>{
    const booked = getBooked();
    const isExist = booked.find(d=>d.registration_number===doctor.registration_number)
    if(isExist) return console.log('doctor is added'); 
    booked.push(doctor);
    localStorage.setItem('booking', JSON.stringify(booked))
}
export const getBooked = () =>{
    const booked = localStorage.getItem('booking')
    if(booked)return JSON.parse(booked)
    return []
}
export const removeBooked = (regId)=>{
    const booked = getBooked()
    const remainingBooked = booked.filter(d=>d.registration_number!==   regId )
    localStorage.setItem('booking', JSON.stringify(remainingBooked))
}