import React from 'react';
import { Link } from 'react-router';
import './HeaderMenu.css';

const LogoItem = ({active, children, to}) => (
    <Link to={to} className="logo-item">
            {children}
    </Link>
)

const MenuItem = ({active, children, to}) => (
    <Link to={to} className="menu-item">
            {children}
    </Link>
)

const HeaderMenu = () => {
    return (
        <div>
            <div className="logo">
                <LogoItem to={'/'}><img src = "mainlogo.png" width = "320px"/></LogoItem>
            </div>
            <div className="menu">  
                <MenuItem to={'/shop'} >SHOP</MenuItem>
                <MenuItem to={'/lookbook'} >LOOKBOOK</MenuItem>
                <MenuItem to={'/board'} >BOARD</MenuItem>
                {/* //active={router.isActive('/board')} */}
            </div>
        </div>
    );
};

export default HeaderMenu;