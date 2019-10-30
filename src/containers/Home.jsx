import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import Buttons from '../components/Buttons';
// import 'bootstrap/dist/css/bootstrap.css';
import '../assets/styles/App.scss';

const Home = () => {
    return(
    <>
        <Hero />
        <Buttons />
    </>
    );
}    

export default Home;