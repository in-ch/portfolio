'use client';

import { useEffect, useState } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { IoIosClose } from 'react-icons/io';
import { RxHamburgerMenu } from 'react-icons/rx';

import { headerShowState } from '@/atom';

const Hamburger = (): JSX.Element => {
  const headerShowChange = useSetRecoilState(headerShowState);
  const headerShow = useRecoilValue(headerShowState);
  const [show, setShow] = useState<boolean>(false);

  useEffect(() => {
    setShow(headerShow);
  }, [headerShow]);

  return (
    <section>
      <RxHamburgerMenu className="md:hidden block" onClick={() => headerShowChange(true)} />
      <div
        className={`${show ? 'w-screen' : 'w-[0px]'} h-screen z-50 fixed top-0 left-0 bg-red-500 overflow-hidden transition-all duration-500 ease-in-out`}
      >
        <div className="flex justify-end">
          <IoIosClose className="w-[50px] h-[50px] mt-1" onClick={() => headerShowChange(false)} />
        </div>
        <ul className="flex flex-col text-2xl gap-6 ml-6">
          <li>home</li>
          <li>about</li>
          <li>skill</li>
          <li>portfolio</li>
          <li>contact</li>
        </ul>
      </div>
    </section>
  );
};

export default Hamburger;
