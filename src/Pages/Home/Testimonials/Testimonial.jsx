import SubTitle from "../../../Component/SubTitle.jsx/SubTitle";

import { Navigation } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'


const Testimonial = () => {
    const [reviews,setReviews]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:1500/review')
        .then(res=>res.json())
        .then(data=>
            setReviews(data)
           
        )
    },[])
    return (
        <section className="my-20">
            <SubTitle
                subHeading={'What Our Client Say '}
                heading={'Testimonial'}
            ></SubTitle>

<Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {
            reviews.map(review=><SwiperSlide
                key={review._id}
                
            >
                <div className="flex flex-col items-center mx-24 my-16">

                    <Rating
                    style={{ maxWidth: 180 }}
                    value={review.rating} 
                    readOnly
                        />
                    <p>{review.details}</p>
                    <h3 className="text-3xl text-orange-500">{review.name}</h3>

                </div>
            </SwiperSlide>)
        }
        
      </Swiper>
        </section>
    );
};

export default Testimonial;