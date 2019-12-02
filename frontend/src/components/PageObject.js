

import HeaderMenu from './HeaderMenu';
import React, {Component} from 'react';


const PageObject = () => {
    return (
        <div>
            <HeaderMenu/>
            {this.props.children}
        </div>
    );
};

export default PageObject;
