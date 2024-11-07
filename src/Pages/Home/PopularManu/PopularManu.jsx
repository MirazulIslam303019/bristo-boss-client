import  { useEffect, useState } from 'react';
import SubTitle from '../../../Component/SubTitle.jsx/SubTitle';
import MenuItems from '../../../shared/MenuItms/MenuItems';
import UseMenu from '../../../Hooks/UseMenu';

const PopularManu = () => {
    const [menu]=UseMenu();
     const Popular=menu.filter(item=>item.category === 'popular');
    
    return (
        <section>
                <SubTitle
                    heading={'From our menu'}
                    subHeading={'check it out'}

                ></SubTitle>
            <div className='md:grid grid-cols-2 gap-6'>
               {
                Popular.map(item=><MenuItems
                key={item._id}
                item={item}
                ></MenuItems>)
               }
            </div>
        </section>
       
    );
};

export default PopularManu;