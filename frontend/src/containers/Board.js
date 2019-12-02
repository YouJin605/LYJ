import React from 'react';
import BigText from '../components/BigText';
import PostLinks from '../components/PostLinks';
import { Link } from 'react-router';
import Header from '../components/boardheader';

const BoardItem = ({active, children, to}) => (
    <Link to={to} className="boardmenu-item">
            {children}
    </Link>
)
const Board = ({children}) => {
    return (
        <div>
        <div>
        <Header/>
        </div>
            <PostLinks/>
            {children}
        </div>
        
    );
};

export default Board;