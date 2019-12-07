import React from 'react';
import { Link } from 'react-router';
import Header from '../components/boardheader';
import HeaderMenu from '../components/AppHeader';
import ContactLinks from '../components/ContactLinks';

const BoardItem = ({active, children, to}) => (
    <Link to={to} className="boardmenu-item">
            {children}
    </Link>
)
const Contact = ({children}) => {
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
            <ContactLinks/>
            <div>
            <Link to={'/InputLinks/'}>
            <button>NEW</button>
            </Link>
            </div>
        </div>
    );
};
export default Contact;