import React from 'react';
import { Link } from 'react-router';
import './AppHeader.css';

const LogoItem = ({active, children, to}) => (
    <Link to={to} className="applogo-item">
            {children}
    </Link>
)

const MenuItem = ({active, children, to}) => (
    <Link to={to} className="appmenu-item">
            {children}
    </Link>
)

const AppHeader = () => {
    return (
        <div>
            <div className="applogo">
                <LogoItem to={'/'}><img src = "mainlogo_black.png" width = "400px" align="center"></img></LogoItem>
            </div>
            <div className="appmenu">
                <MenuItem to={'/shop'} >SHOP</MenuItem>
                <MenuItem to={'/lookbook'} >LOOKBOOK</MenuItem>
                <MenuItem to={'/board'} >BOARD</MenuItem>
                {/* //active={router.isActive('/board')} */}
            </div>
            <div><img src="line1.png" width="100%" height="7px"></img></div>
        </div>
    );
};

export default AppHeader;