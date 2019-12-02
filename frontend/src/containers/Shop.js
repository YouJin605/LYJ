import React, { Component} from 'react';
import GoodLinks from '../components/GoodLinks';
//import ShopDetail from '../components/ShopDetail';
import GoodGatherer from '../components/GoodGatherer';

const Shop = ({children}) => {
    
    //console.log(children);
    return (
        <div>
            {children}
            <GoodLinks/>
            
        </div>
    );
};

export default Shop;
