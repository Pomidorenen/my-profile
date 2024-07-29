import React from 'react';
import Key from "./key";
import gsap from "gsap";
import {useGSAP} from "@gsap/react";

const ListKeys = ({children}) => {
   useGSAP(()=>{
       gsap.fromTo('.key', {
           xPercent: 10,
           opacity:0,
       }, {
           opacity:1,
           xPercent: 0,
           stagger: 0.4,
           duration: 0.4,
           ease: 'none',
       })
   })
    return (
        <div className='keylist'>
            {
                children.split(',').map(el=><Key>
                    {el}
                </Key>
                )
            }
        </div>
    );
};

export default ListKeys;