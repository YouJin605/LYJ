import React from 'react';
import BigText from '../components/BigText';

const Good = ({params}) => {
    return (
        <div>
            {console.log(params.id)}
            <BigText>{params.id}</BigText>
        </div>
    );
};

export default Good;