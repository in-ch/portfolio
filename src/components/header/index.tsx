'use client';

import { useEffect } from 'react';
import { FaGithub } from 'react-icons/fa6';
import Link from 'next/link';

import Hamburger from '@/components/header/hamburger';
import { SECTION } from '@/enum';
import { useMoveToSection } from '@/hooks/useMoveToSection';

/**
 * @description 헤더 컴포넌트
 * @returns {JSX.Element}
 */
const Header = (): JSX.Element => {
  const { handleMove } = useMoveToSection();

  const handleToTop = (): void => {
    window.scrollTo(0, 0);
    handleMove(SECTION.intro);
  };

  useEffect((): (() => void) => {
    handleToTop();
    window.addEventListener('resize', handleToTop);

    return () => {
      window.removeEventListener('resize', handleToTop);
    };
  }, []);

  return (
    <header className="fixed z-[1000] top-0 left-0 h-[60px] md:h-[70px] w-screen flex flex-row justify-between px-4 md:px-8 items-center">
      <p className="cursor-pointer">in-ch</p>
      <div className="flex flex-row items-center gap-4 cursor-pointer">
        <ul className="hidden flex-row gap-5 md:flex">
          <li onClick={() => handleMove(SECTION.intro)}>home</li>
          <li onClick={() => handleMove(SECTION.about)}>about</li>
          <li onClick={() => handleMove(SECTION.portfolio)}>portfolio</li>
          <li onClick={() => handleMove(SECTION.blog)}>blog</li>
          <li onClick={() => handleMove(SECTION.contact)}>contact</li>
        </ul>
        <Link href="https://github.com/in-ch" target="_blank">
          <FaGithub className="w-[25px] h-[25px]" />
        </Link>
        <Hamburger handleMove={handleMove} />
      </div>
    </header>
  );
};

export default Header;
