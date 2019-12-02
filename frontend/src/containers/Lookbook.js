import React from 'react';
import LookLinks from '../components/LookLinks';
import "./Lookbook.css"

const Lookbook = ({children}) => {
    return (
        <div>
        {children}
        <LookLinks/>
        </div>
    );
};

export default Lookbook;