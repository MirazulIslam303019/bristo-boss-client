import React from 'react';
import SubTitle from '../../../Component/SubTitle.jsx/SubTitle';
import featured from '../../../../bistro-boss-restaurant-resources-main/assets/home/featured.jpg'
import './Featured.css'


const Featured = () => {
    return (
        <div className='featured-item bg-fixed text-white pt-8 my-20'>
            <SubTitle
                heading={'from our menu'}
                subHeading={'Check it out'}
            ></SubTitle>
            <div className='md:flex justify-center items-center py-12 px-16 bg-slate-600 bg-opacity-60 pb-20 pt-12'>
               <div>
               <img src={featured} alt="" className='rounded-md ' />
               </div>
                <div className='ml-8 space-y-1 '>
                    <p>March 20, 2023</p>
                    <p>WHERE CAN I GET SOME?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis 
                        quas quasi.Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam
                         maxime tenetur.</p>
                         <button className="btn btn-outline border-0 border-b-4 ">Default</button>     
                </div>
            </div>
        </div>
    );
};

export default Featured;