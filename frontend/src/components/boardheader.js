import React from 'react';
import { Link } from 'react-router';
import './boardheader.css';


const BoardItem = ({active, children, to}) => (
    <Link to={to} className="boardmenu-item">
            {children}
    </Link>
)

const Header = () => {
    return (
        <div>
            <div className="boardmenu">
                <BoardItem to={'/Notice'}><img src = "notice_logo.png" width = "40%"></img></BoardItem>
                <BoardItem to={'/Contact'}><img src = "contact_logo.png" width = "49.5%"></img></BoardItem>
                <BoardItem to={'/Cs'}><img src = "cs_logo.png" width = "24%"></img></BoardItem>
            </div>
        </div>
    );
};

export default Header;