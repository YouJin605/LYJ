import React from 'react';
import StackGrid from "react-stack-grid";
import "./Lookbook.css"

const Lookbook = () => {
    return (
        <div>
          <StackGrid columnWidth={"30%"} className="grid">
            <span><img src="model1_0.gif" className="img"></img></span>
            <span><img src="model1_1.gif" className="img"></img></span>
            <span><img src="model1_2.gif" className="img"></img></span>
            <span><img src="model1_3.gif" className="img"></img></span>
            <span><img src="shirt_0.jpg" className="img"></img></span>
        </StackGrid>
        </div>
    );
};

export default Lookbook;