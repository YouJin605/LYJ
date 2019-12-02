import React,{Component} from 'react';
import './ShopDetail.css';
import Good from './GoodGatherer';
import Hood from './slavesPhotos/hood_inform.jpg';

export default function ShopDetail ({id,name,photo1,photo2,price,code,quantity,forMainpage}){
    
    
    return(
        <div className="ShopDetail">
            <h1 className="goodname">{name}</h1>
            <h4 className="goodprice">가격 : {price}원</h4>
            <h4 className="goodquantity">남은수량 : {quantity}</h4>
            <img className="goodphoto1" src={photo1}/>
            <img className="goodphoto2" src={photo2}/>
            <h1>결제창 구현</h1>
        </div>
    )
}

