import React from 'react';
import {  FaAddressCard, FaCalendarAlt, FaCashRegister, FaDollarSign, FaHome, FaList, FaPaypal, FaShoppingCart, FaWallet } from 'react-icons/fa';
import { NavLink, Outlet } from 'react-router-dom';

const Deshboard = () => {
    return (
        <div className='lg:flex '>
            <div className="w-64 min-h-screen bg-orange-500 ">
                <ul className='menu p-5'> 
                    <li>
                        <NavLink to='/dashborad/userHome' className=' text-white'>
                         <FaHome></FaHome> User Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashborad/reservation' className=' text-white'>
                         <FaCalendarAlt></FaCalendarAlt> Reservation</NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashborad/payment' className=' text-white'>
                         <FaWallet></FaWallet>Payment History</NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashborad/cart' className=' text-white'>
                         <FaShoppingCart></FaShoppingCart> My cart</NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashborad/review' className=' text-white'>
                         <FaAddressCard></FaAddressCard> Add Review</NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashborad/booking' className=' text-white'>
                         <FaList></FaList> My Booking</NavLink>
                    </li>
                    <div className="divider"></div>
                    <li>
                        <NavLink to='/' className=' text-white'>
                         <FaHome></FaHome> Home</NavLink>
                    </li>
                </ul>
            </div>
            <div className='flex-1 p-8'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Deshboard;