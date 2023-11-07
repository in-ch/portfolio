"use client"

import React, { useState } from 'react'
import { BiBell, BiCog, BiSearch } from 'react-icons/bi'
import { useRouter } from 'next/navigation'
import Link from 'next/link'


const Navbar = () => {
  const [rev, setRev] = useState<boolean>(false);
  const [searchInput, setSearchInput] = useState('');
  const router = useRouter();

  const detectChange = (e: any)=>{
      if (e.target.value !== '') {
          setRev(true)
          setSearchInput(e.target.value)
      }else{
          setRev(false)
      }
  }

  const subSearch = (e: any)=>{
    e.preventDefault();
    if (searchInput!=='') {
      router.push(`/store/search/${searchInput}`)
    }
  }

  const handleLogout = async()=>{
    // deleteAllCookies();
    // await logoutGoogle();
    router.refresh();
  }
  return (
    <div className="z-[60] flex h-[60px] w-full items-center bg-stone-800 justify-end">
        <div className="w-[270px] xtab:flex hidden justify-center items-center">
          <img
            className="w-[30px] cursor-pointer"
            src="/images/simbol.png"
            alt="logo"
          /> 
        </div>
      <form onSubmit={subSearch} className="flex xtab:w-full ml-8 three:hidden five:hidden desktop:flex">
        <div
          className={` sm:ml-0 ml- flex  w-[120px] bg-stone-900 text-sm text-white three:w-[200px] tablet:w-[300px] tablet:text-lg
              ${rev && 'flex-row-reverse'}  items-center rounded-xl px-3 py-1`}
        >
          <label htmlFor="s1" className="cursor-pointer">
            <BiSearch className="mt-1 text-sm tablet:text-xl" />
          </label>
          <input
            onChange={detectChange}
            className="sm:w-full w-full bg-transparent px-2 text-[0.9em] outline-none"
            type="text"
            placeholder="Search "
          />
        </div>
        <input type="submit" id="s1" className="hidden" />
      </form>
      <div className="flex items-center pr-4">
        {true ? (
          <>
            <BiBell className="cursor-pointer rounded-full bg-stone-900 p-2  text-4xl text-gray-700" />
            <BiCog className="ml-2 cursor-pointer rounded-full bg-stone-900  p-2 text-4xl text-gray-700" />
            <p
              onClick={handleLogout}
             className="cursor-pointer bg-stone-900 py-1  px-3 text-gray-400 ml-4">
              Logout
            </p>
          </>
        ) : (
          <div className="flex items-center">
            <Link href="/user/login">
              <p className="cursor-pointer bg-stone-900 py-1  px-3 text-gray-400">
                Login
              </p>
            </Link>
            <p className="mx-2 hidden text-white three:flex">OR</p>
            <Link href="/user/signup">
              <p className="ml-2 hidden cursor-pointer bg-pink-500 py-1 px-3  text-white three:flex">
                Register
              </p>
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar