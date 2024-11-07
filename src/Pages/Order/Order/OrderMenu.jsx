import React, { useState } from 'react';
import Cover from '../../../shared/Cover/Cover';
import OrderCoverImg from '../../../../bistro-boss-restaurant-resources-main/assets/shop/banner2.jpg'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import UseMenu from '../../../Hooks/UseMenu';
import FoodCard from '../../../Component/SubTitle.jsx/FoodCard/FoodCard';
import OrderTab from '../OrderTab/OrderTab';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const OrderMenu = () => {
    const categories=['salad','pizza','soup','dessert','drinks'];
    const {category}=useParams();
    const initicalIndex=categories.indexOf(category);
    const [tabIndex,setTabIndex]=useState(initicalIndex)
    const [menu]=UseMenu();
    
   
    const dessert=menu.filter(item=>item.category === 'dessert');
    const salad=menu.filter(item=>item.category === 'salad');
    const pizza=menu.filter(item=>item.category === 'pizza');
    const soup=menu.filter(item=>item.category === 'soup');
    const drinks=menu.filter(item=>item.category === 'drinks');
    return (
        <div >
            <Helmet>
                <title>Bistro Boss | Order Food</title>
            </Helmet>
            <Cover img={OrderCoverImg} title='Our Foods' text='Would you like to try a dish?'></Cover>

            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)} className='text-center my-16'>
            <TabList>
                <Tab>Salad</Tab>
                <Tab>Pizza</Tab>
                <Tab>Soup</Tab>
                <Tab>Dessert</Tab>
                <Tab>Drinks</Tab>
                
            </TabList>
            <TabPanel>
               <OrderTab
               items={salad}
               ></OrderTab>
            </TabPanel>
            <TabPanel>
                <OrderTab items={pizza}></OrderTab>
            </TabPanel>
            <TabPanel>
                <OrderTab items={soup}></OrderTab>
            </TabPanel>
            <TabPanel>
                <OrderTab items={dessert}></OrderTab>
            </TabPanel>
            <TabPanel>
                <OrderTab items={drinks}></OrderTab>
            </TabPanel>
            </Tabs>
        </div>
    );
};

export default OrderMenu;