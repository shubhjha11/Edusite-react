import React from 'react';
import { NavLink } from 'react-router-dom';
import web from "../src/images/zebra.jpg"
import Common from './Common';
const Home = () => {
    return (
        <>
            <Common name="Welcome to My submission for the requested task" 
            imgsrc={web} visit="/services" btname="Get Started" />
        </>
    );
};
export default Home;
