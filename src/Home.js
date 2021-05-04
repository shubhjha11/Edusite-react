import React from 'react';
import { NavLink } from 'react-router-dom';
import web from "../src/images/archer.jpg"
import Common from './Common';
const Home = () => {
    return (
        <>
            <Common name="Welcome to 3bows, you need us to mark all your arrows perfectly" 
            imgsrc={web} visit="/services" btname="Get Started" />
        </>
    );
};
export default Home;
