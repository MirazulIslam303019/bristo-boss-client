import React from 'react';
import { Outlet, useLoaderData, useLocation } from 'react-router-dom';
import Footer from '../Pages/Footer/Footer';
import Navbar from '../Pages/Navbar/Navbar';


const Main = () => {
        const location=useLocation()
        console.log(location)
        const noHeaderFooder=location.pathname.includes('login') ||
        location.pathname.includes('signUp')

    return (
        <div>
        {noHeaderFooder || <Navbar></Navbar>}
            <Outlet></Outlet>
           {noHeaderFooder ||  < Footer></Footer>}
           
        </div>
    );
};

export default Main;