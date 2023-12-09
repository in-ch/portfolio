"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { BiHome, BiJoystick, BiStore, BiUser  } from 'react-icons/bi'
import { FaUsers } from 'react-icons/fa'

const CustomLinks = () => {

    const router = usePathname();

    return (
        <div className="mt-4 flex flex-col px-3">
            <Link href="/">
            <div
                className={`mt-2 flex cursor-pointer items-center px-3 py-2
                hover:bg-violet-800 ${
                    router === "/" ? 'bg-violet-700' : 'bg-stone-900'
                }  
                text-md rounded-xl bg-stone-900 duration-200`}
            >
                <BiHome className="text-lg" />
                <p className="ml-4">Home</p>
            </div>
            </Link>
            <Link href="/store">
            <div
                className={`mt-2 flex cursor-pointer items-center px-3 py-2
                hover:bg-violet-800 ${
                    router === "/store" ? 'bg-violet-700' : 'bg-stone-900'
                } 
                text-md rounded-xl duration-200`}
            >
                <BiStore className="text-lg" />
                <p className="ml-4">Store</p>
            </div>
            </Link>
            <Link href="/mygames">
            <div
                className={`mt-2 flex cursor-pointer items-center px-3 py-2
                hover:bg-violet-800  ${
                    router === "/mygames" ? 'bg-violet-700' : 'bg-stone-900'
                } 
                text-md rounded-xl bg-stone-900 duration-200`}
            >
                <BiJoystick className="text-lg" />
                <p className="ml-4">My Games</p>
            </div>
            </Link>

            <Link href="/Community">
            <div
                className={`mt-2 flex cursor-pointer items-center px-3 py-2
                hover:bg-violet-800  ${
                router === "/Community" ? 'bg-violet-700' : 'bg-stone-900'
                } 
                text-md rounded-xl bg-stone-900 duration-200`}
            >
                <FaUsers className="text-lg" />
                <p className="ml-4">Community</p>
            </div>
            </Link>
            <Link href="/profile">
            <div
                className={`mt-2 flex cursor-pointer items-center px-3 py-2
                hover:bg-violet-800  ${
                    router === "/profile" ? 'bg-violet-700' : 'bg-stone-900'
                } 
                text-md rounded-xl bg-stone-900 duration-200`}
            >
                <BiUser className="text-lg" />
                <p className="ml-4">Profile</p>
            </div>
            </Link>
        </div>
    );
}

export default CustomLinks;