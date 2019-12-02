import React,{Component,Fragment} from 'react';
import StackGrid from "react-stack-grid";
import './LookDetail.css'

export default function LookDetail ({obj,id,photo1,modelNumber,isMain}){
    return(
        <div className="LookDetail">
            <StackGrid columnWidth={'30%'} className='grid'>
            {obj.map(item => (
                    <div key={item.id}>
                        <img className="photo1" src={item.photo1}/>                      
                    </div>
                ))}
            </StackGrid>
            {/* <h1>모델넘버 : {modelNumber}</h1>
            <img src={photo1}/> */}
        </div>
    )
}