import React from 'react';
// import Header from './component/Header';
import Navbar from './component/header/Navbar';
import { Outlet } from 'react-router-dom';



function Main(){
    return(
        <>
        
        <Navbar />
        <Outlet/>
        
        </>
    );
}
export default Main;