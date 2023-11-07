import { BiMenu  } from 'react-icons/bi'
import CustomLinks from './CustomLinks'



function SideBar() {
  return (
    <>
      <BiMenu
        className="absolute top-3 left-1 z-[99]
       cursor-pointer text-3xl text-white xtab:hidden"
      />
      <div
        className={`absolute top-0 left-0 right-0 bottom-0 z-20 xtab:hidden`}
      ></div>
      <div
        className={`top-0 left-[-500px] z-[70] h-screen bg-stone-800 duration-500 xtab:relative
     xtab:left-0 xtab:flex xtab:h-full}
     absolute flex-col justify-between text-white xtab:relative xtab:w-[200px]`}
      >
        <div className="flex flex-col">
          <div className="ml-7 flex w-[100px] xtab:hidden">
            <img className="w-full" src="/images/inlogo.png" alt="logo" />
          </div>
          <CustomLinks />
        </div>
      </div>
    </>
  )
}

export default SideBar
