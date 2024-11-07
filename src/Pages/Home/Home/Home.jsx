import React from 'react';
import Bennar from '../Bennar/Bennar';
import Category from '../Category/Category';
import PopularManu from '../PopularManu/PopularManu';
import Featured from '../Featured/Featured';
import Testimonial from '../Testimonials/Testimonial';

import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
            <Helmet>
        <title>Bristo Boss | Home</title>
        
      </Helmet>
           <Bennar></Bennar>
           <Category></Category>
           <PopularManu></PopularManu>
           <Featured></Featured>
           <Testimonial></Testimonial>
        </div>
    );
};

export default Home;