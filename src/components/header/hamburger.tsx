'use client';

import { useEffect, useState } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { IoIosClose } from 'react-icons/io';
import { RxHamburgerMenu } from 'react-icons/rx';

import { headerShowState } from '@/atom';
import { SECTION_TYPE, SECTION } from '@/enum';

interface HamburgerProps {
  handleMove: (value: SECTION_TYPE) => void;
}

/**
 * @description 모바일 헤더 컴포넌트
 * @param {(value: SECTION_TYPE) => void}  handleMove 특정 section으로 이동
 * @returns {JSX.Element}
 */
const Hamburger = ({ handleMove }: HamburgerProps): JSX.Element => {
  const headerShowChange = useSetRecoilState(headerShowState);
  const headerShow = useRecoilValue(headerShowState);
  const [show, setShow] = useState<boolean>(false);

  const handleClick = (section: SECTION_TYPE): void => {
    handleMove(section);
    headerShowChange(false);
  };

  useEffect(() => {
    setShow(headerShow);
  }, [headerShow]);

  return (
    <section>
      <RxHamburgerMenu className="md:hidden block" onClick={() => headerShowChange(true)} />
      <div
        className={`${show ? 'w-screen' : 'w-[0px]'} h-screen z-50 fixed top-0 left-0 overflow-hidden transition-all duration-500 ease-in-out`}
      >
        <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-b from-white via-sky-200 to-sky-300 backdrop-blur-xl opacity-95 -z-10"></div>
        <div className="flex justify-end">
          <IoIosClose className="w-[50px] h-[50px] mt-1" onClick={() => headerShowChange(false)} />
        </div>
        <ul className="flex flex-col text-2xl gap-6 ml-6">
          <li onClick={() => handleClick(SECTION.intro)}>home</li>
          <li onClick={() => handleClick(SECTION.about)}>about</li>
          <li onClick={() => handleClick(SECTION.portfolio)}>portfolio</li>
          <li onClick={() => handleClick(SECTION.blog)}>blog</li>
          <li onClick={() => handleClick(SECTION.contact)}>contact</li>
        </ul>
      </div>
    </section>
  );
};

export default Hamburger;
