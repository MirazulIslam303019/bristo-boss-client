import React from 'react';

const SubTitle = ({heading,subHeading}) => {
    return (
        <div className='w-4/12 mx-auto text-center my-10'>
            <p className='text-yellow-600 mb-2'>----{subHeading}----</p>
            <h2 className='text-4xl uppercase border-y-4 py-4'>{heading}</h2>
        </div>
    );
};

export default SubTitle;