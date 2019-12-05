import React from 'react';
import img from './error.jpg';

const Error = () => {
    return (
        <>
            <img style={{width: "100%"}} src={img} alt='error'></img>
            <span>Something goes wrong</span>
        </>
    )
}

export default Error;