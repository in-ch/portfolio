import Image from 'next/image'

import SearchBar from '@/components/common/SearchBar'
import MobileNavbar from '@/components/common/MobileNavbar'

const Navbar = () => {
  return (
    <header className="fixed top-0 z-[60] flex xtab:h-[64px] h-[50px] w-full justify-end xtab:justify-start  items-center bg-stone-800">
        <div className="w-[200px] xtab:flex hidden justify-center items-center">
          <Image
            width={30}
            height={30}
            className="cursor-pointer"
            src="/images/simbol.png"
            alt="logo"
          /> 
        </div>
        <SearchBar />
        <MobileNavbar />
    </header>
  )
}

export default Navbar