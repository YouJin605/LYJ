import React from 'react';

export default function LookbookDetail ({id,person,photo_00,photo_01,photo_02,photo_03,photo_04,photo_05,photo_06,photo_07,photo_08}){
    
    
    return(
        <div className="LookbookDetail">
            <img className="lookbook" src={photo_00}/>
            <img className="lookbook" src={photo_01}/>
            <img className="lookbook" src={photo_02}/>
            <img className="lookbook" src={photo_03}/>
            <img className="lookbook" src={photo_04}/>
            <img className="lookbook" src={photo_05}/>
            <img className="lookbook" src={photo_06}/>
            <img className="lookbook" src={photo_07}/>
            <img className="lookbook" src={photo_08}/>
            
        </div>
    )
}