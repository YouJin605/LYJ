import React from 'react';
import { Link } from 'react-router';
import Header from '../components/boardheader';
import HeaderMenu from '../components/AppHeader';

const BoardItem = ({active, children, to}) => (
    <Link to={to} className="boardmenu-item">
            {children}
    </Link>
)
const Notice = ({children}) => {
    return (
        <div>
            <div>
            <HeaderMenu/>
            </div>
            <div>
            <Header>
            <Header/>
            </Header>  
            </div>
            {children}
            공지사항
        </div>
        
    );
};
export default Notice;