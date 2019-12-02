import React from 'react';
import BigText from '../components/BigText';
import PostLinks from '../components/PostLinks';

const Posts = ({children}) => {
    return (
        <div>
            <BigText>게시판</BigText>
            <PostLinks/>
            {children}
        </div>
        
    );
};

export default Posts;