'use client';

import { FaGithub } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';
import { SiVelog } from 'react-icons/si';
import { FaHome } from 'react-icons/fa';

import TransitionText from '@/components/common/TransitionText';
import { SECTION } from '@/enum';

/**
 * @description Contact Section
 * @returns {JSX.Element}
 */
const Contact = (): JSX.Element => {
  return (
    <section
      id={SECTION.contact}
      className="w-screen h-screen relative flex justify-center items-center"
    >
      <div className="flex flex-col md:flex-row  h-screen min-w-[100%] desktop:min-w-[1100px]">
        <div className="flex h-[400px] md:h-auto md:flex md:flex-1 justify-center items-center">
          <TransitionText
            className="pl-[10px] text-[50px] text-center"
            texts={['Contact', 'Me 😎🎉']}
          />
        </div>
        <div className="flex flex-1 items-start md:items-center justify-center">
          <div className="my-[30px] flex flex-col gap-4 pl-4 h-[200px] justify-center">
            <div className="flex items-center cursor-pointer">
              <MdEmail className="w-[30px] h-[30px]" />
              <p className="pl-4">sxin2949@naver.com</p>
            </div>
            <div className="flex items-center cursor-pointer">
              <FaGithub className="w-[30px] h-[30px]" />
              <p className="pl-4">https://naver.com</p>
            </div>
            <div className="flex items-center cursor-pointer">
              <SiVelog className="w-[30px] h-[30px]" />
              <p className="pl-4">https://naver.com</p>
            </div>
            <div className="flex items-center cursor-pointer">
              <FaHome className="w-[30px] h-[30px]" />
              <p className="pl-4">https://naver.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
