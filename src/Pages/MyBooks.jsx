import React, { useEffect, useState } from 'react';
import BookedDoctor from '../Component/BookedDoctor';
import Chart from '../Component/Chart';
import { getBooked } from "../utils";
import NotBooked from '../Component/NotBooked';
const MyBooks = () => {
    const [doctors, setDoctors] = useState([]);
    useEffect(()=>{
      const bookedDoctors = getBooked()
      setDoctors(bookedDoctors)
    },[])
    return (
        <div className='w-10/12 mx-auto'>
            {(doctors.length===0)? (<NotBooked></NotBooked>):(<div><Chart></Chart>
            <BookedDoctor doctors={doctors} setDoctors={setDoctors}></BookedDoctor></div>)}
            
        </div>
        
    );
};

export default MyBooks;