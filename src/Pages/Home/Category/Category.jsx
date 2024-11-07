import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import slide1 from '../../../../bistro-boss-restaurant-resources-main/assets/home/slide1.jpg'
import slide2 from '../../../../bistro-boss-restaurant-resources-main/assets/home/slide2.jpg'
import slide3 from '../../../../bistro-boss-restaurant-resources-main/assets/home/slide3.jpg'
import slide4 from '../../../../bistro-boss-restaurant-resources-main/assets/home/slide4.jpg'
import slide5 from '../../../../bistro-boss-restaurant-resources-main/assets/home/slide5.jpg'
import SubTitle from '../../../Component/SubTitle.jsx/SubTitle';

const Category = () => {
    return (
        
        <section>
            <SubTitle
               subHeading={'From 11:00am to 10:00pm'}
               heading={'Order Online'}
            >
               
             
            </SubTitle>
            <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className=''>
            <img src={slide1} alt="" />
            <h3 className='text-4xl text-center uppercase -mt-16 text-white'>Salads</h3>
            </SwiperSlide>
        <SwiperSlide><img src={slide2} alt="" />
        <h3 className='text-4xl text-center uppercase -mt-16 text-white'>Pizza</h3>
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide3} alt="" />
            <h3 className='text-4xl text-center uppercase -mt-16 text-white'>Soups</h3>
            </SwiperSlide>
        <SwiperSlide>
            <img src={slide4} alt="" />
            <h3 className='text-4xl text-center uppercase -mt-16 text-white'>Desserts</h3>
            </SwiperSlide>
        <SwiperSlide>
            <img src={slide5} alt="" />
            <h3 className='text-4xl text-center uppercase -mt-16 text-white'>Salade</h3>
            </SwiperSlide>
        
      </Swiper>
        </section>
    );
};

export default Category;