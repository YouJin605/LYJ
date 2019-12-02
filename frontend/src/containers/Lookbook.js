import React from 'react';
import LookbookLinks from '../components/LookbookLinks';
import "./Lookbook.css"

const Lookbook = ({children}) => {
    return (
        <div>
        {children}
        <LookbookLinks/>
        </div>
    );
};

export default Lookbook;