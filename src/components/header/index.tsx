import { FaGithub } from 'react-icons/fa6';
import Hamburger from './hamburger';

const Header = (): JSX.Element => {
  return (
    <header className="fixed top-0 left-0 h-[60px] md:h-[70px] w-screen flex flex-row justify-between px-4 md:px-8 items-center">
      <p className="cursor-pointer">in-ch</p>
      <div className="flex flex-row items-center gap-4 cursor-pointer">
        <ul className="hidden flex-row gap-5 md:flex">
          <li>home</li>
          <li>about</li>
          <li>skill</li>
          <li>portfolio</li>
          <li>contact</li>
        </ul>
        <FaGithub className="w-[25px] h-[25px]" />
        <Hamburger />
      </div>
    </header>
  );
};

export default Header;
