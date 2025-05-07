import React from 'react';
import Banner from '../Component/Banner';
import DoctorsContainer from '../Component/DoctorsContainer';
import MedicalServices from '../Component/MedicalServices';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <DoctorsContainer></DoctorsContainer>
            <MedicalServices></MedicalServices>
        </div>
    );
};

export default Home;