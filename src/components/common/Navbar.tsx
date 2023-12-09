import { BiSearch } from 'react-icons/bi'
import Image from 'next/image'


const Navbar = () => {
  return (
    <div className="z-[60] flex h-[60px] w-full justify-end xtab:justify-start  items-center bg-stone-800">
        <div className="w-[200px] xtab:flex hidden justify-center items-center">
          <Image
            width={30}
            height={30}
            className="cursor-pointer"
            src="/images/simbol.png"
            alt="logo"
          /> 
        </div>
        <div
          className={` sm:ml-0 ml- flex  w-[120px] bg-stone-900 text-sm text-white three:w-[200px] tablet:w-[300px] tablet:text-lg
              flex-row-reverse tems-center rounded-xl px-3 py-1`}
        >
          <label htmlFor="s1" className="cursor-pointer">
            <BiSearch className="mt-1 text-sm tablet:text-xl" />
          </label>
          <input
            className="sm:w-full w-full bg-transparent px-2 text-[0.9em] outline-none"
            type="text"
            placeholder="Search "
          />
        </div>
    </div>
  )
}

export default Navbar