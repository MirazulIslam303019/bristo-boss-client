import React from 'react';
import { Parallax, Background } from 'react-parallax';

const Cover = ({img,title,text}) => {
    return (

      <Parallax
        blur={{ min: -10, max: 10 }}
        bgImage={img}
        bgImageAlt="the dog"
        strength={-200}
    >
       
       <div
className="hero md:h-[600px]"
  >



  <div className="hero-overlay "></div>
  <div className="hero-content text-neutral-content text-center">
    <div className=" md:max-w-5xl bg-opacity-30 bg-black py-20 px-72">
      <h1 className="mb-5 text-5xl font-bold ">{title}</h1>
      <p className="mb-5">
       {text}
      </p>
      
    </div>
  </div>
</div>
    </Parallax>

        
    );
};

export default Cover;