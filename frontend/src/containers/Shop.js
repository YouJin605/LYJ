import React, { Component} from 'react';
import GoodLinks from '../components/GoodLinks';
import './Shop.css';

import Popup from "reactjs-popup";

const Shop = ({children}) => {
    //console.log(children);
    return (
        <div className="button">
        <Popup trigger={<button> 제품정보 </button>}>
        <div><img src="gooddetail.jpg"/></div>
        </Popup>
        <div>
        {children}
        <GoodLinks/>
        </div>
        </div>
    );
};

export default Shop;
