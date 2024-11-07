import React from 'react';
import MenuItems from '../../../shared/MenuItms/MenuItems';
import Cover from '../../../shared/Cover/Cover';
import { Link } from 'react-router-dom';

const MenuCategory = ({items,title,itemImg}) => {
    return (
        <div className='mt-16'>
        {title && <Cover img={itemImg} title={title}text='Lorem Ipsum has been the industry’
        s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it
         to make a type specimen book.'
    ></Cover>}
            <div className='md:grid grid-cols-2 gap-6 my-16'>
               {
                items.map(item=><MenuItems
                key={item._id}
                item={item}
                ></MenuItems>)
               }
            </div>
            <div className='flex justify-center'>
            <Link to={`/order/${title}`}>
            <button className="btn btn-outline border-0 border-b-4 ">Order {title}</button>   
            </Link>
            </div>
        </div>
    );
};

export default MenuCategory;