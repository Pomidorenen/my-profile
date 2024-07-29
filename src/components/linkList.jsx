import React from 'react';
import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import Link from "./link";

const LinkList = ({data}) => {
    useGSAP(()=>{
        gsap.fromTo(".icon", {y: 100,opacity:0.1},{duration:1.5, stagger: 0.3,opacity:1, y: 30})
    })
    return (
        <div className="link">
            {
                data.map(({href,src})=><Link href={href} src={src} ></Link>)
            }
        </div>
    );
};

export default LinkList;