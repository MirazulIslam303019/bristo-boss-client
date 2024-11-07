import React from 'react';
import { Helmet } from 'react-helmet-async';
import CoverImg from '../../../bistro-boss-restaurant-resources-main/assets/menu/banner3.jpg'
import dessertImg from '../../../bistro-boss-restaurant-resources-main/assets/menu/dessert-bg.jpeg'
import pizzatImg from '../../../bistro-boss-restaurant-resources-main/assets/menu/pizza-bg.jpg'
import saladImg from '../../../bistro-boss-restaurant-resources-main/assets/menu/salad-bg.jpg'
import soupImg from '../../../bistro-boss-restaurant-resources-main/assets/menu/soup-bg.jpg'

import Cover from '../../shared/Cover/Cover';
import Featured from '../Home/Featured/Featured';
import PopularManu from '../Home/PopularManu/PopularManu';
import UseMenu from '../../Hooks/UseMenu';
import SubTitle from '../../Component/SubTitle.jsx/SubTitle';
import MenuCategory from './MenuCategory/MenuCategory';

const Menu = () => {
    const [menu]=UseMenu();
    const dessert=menu.filter(item=>item.category === 'dessert');
    const salad=menu.filter(item=>item.category === 'salad');
    const pizza=menu.filter(item=>item.category === 'pizza');
    const soup=menu.filter(item=>item.category === 'soup');
    const offered=menu.filter(item=>item.category === 'offered');
    return (
        <div>
            <Helmet>
        <title>Bristo Boss | Our Menu</title>
        
      </Helmet>

     <Cover img={CoverImg} title="Our Menu" text='Would you like to try a dish?'
     ></Cover>

     <SubTitle
     heading='todays offer'
     subHeading="Don't miss"
     ></SubTitle>
    <MenuCategory items={offered}></MenuCategory>

    <MenuCategory 
    items={dessert}
    title='Dessert'
    itemImg={dessertImg}
    ></MenuCategory>

    <MenuCategory
    items={pizza}
    title='pizza'
    itemImg={pizzatImg}
    ></MenuCategory>
    

    <MenuCategory
    items={salad}
    title='salad'
    itemImg={saladImg}
    ></MenuCategory>

    <MenuCategory
    items={soup}
    title='soup'
    itemImg={soupImg}
    ></MenuCategory>
 

        </div>
    );
};

export default Menu;