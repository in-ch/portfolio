"use client"

import { BiMenu  } from 'react-icons/bi'
import { IoIosClose } from "react-icons/io";

import CustomLinks from './CustomLinks'
import { useState } from 'react';

export default function MobileNavbar() {
    const [show, setShow] = useState<boolean>(false);
    return (<>
    <div onClick={() => setShow(!show)} className="absolute top-3 left-1 z-[2]
    cursor-pointer text-3xl text-white xtab:hidden">
       {
        !show ? <BiMenu
    role="button"
/> :  <IoIosClose />
       }

    </div>
       
        <nav className={`w-full ${show ? 'h-full' : 'h-0' } overflow-hidden fixed top-12 xtab:hidden`} style={{backgroundColor:'rgba(0,0,0,0.5)'}}>
            <div className="bg-white pb-2 relative top-[-13px]">
                <CustomLinks />
            </div>
        </nav>
    </>
    );
}