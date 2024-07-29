import React from 'react';

const Link = ({href,src}) => {
    return (
        <>
            <a  href={href}>
                <img className='icon' width={"24px"}
                     height={"24px"}
                     src={src}/>
            </a>
        </>
    );
};

export default Link;