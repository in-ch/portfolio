'use client';

import { FaGithub } from 'react-icons/fa6';
import { SiVelog } from 'react-icons/si';
import { MdEmail } from 'react-icons/md';

import TransitionText from '@/components/common/TransitionText';
import { SECTION } from '@/enum';

/**
 * @description About Section
 * @returns {JSX.Element}
 */
const About = (): JSX.Element => {
  return (
    <section id={SECTION.about} className="w-screen h-screen font-bold relative overflow-scroll">
      <div className="w-full h-screen flex flex-row justify-center">
        <div className="max-w-[1000px] w-full h-screen flex flex-col gap-6 py-[60px] md:py-[100px] px-[20px] md:px-[0px]">
          <TransitionText texts={['성인철', 'in-ch']} />
          <div className="h-8" />
          <p>안녕하세요.</p>
          <p>
            현재 회사에서 그룹 치료 비대면 플랫폼 및 소프트웨어의 라이센스 관리를 위한 어드민 콘솔
            개발, 유지 보수를 담당하고 있습니다.
          </p>
          <p>
            단순한 페이지 구현 보다는 사용자 입장에서 고도화를 위한
            <span className="bg-[#06bcd7] py-[2px] px-[5px] rounded-[5px] text-[#fff] ml-1">
              최적화 및 사용성 개선
            </span>
            등을 고려하며 개발을 진행하고 있습니다.
          </p>
          <p>
            커뮤니케이션에 있어서는 적극적으로 의견을 나누며 어려움을 두지 않습니다. 상대방의 의견을
            존중하고 수용 하는 것을 어려워하지 않습니다. 마지막으로 하루 하루 노력하고 성장하는
            모습을 바탕으로, 협업과 문제 해결에서
            <span className="bg-[#06bcd7] py-[2px] px-[5px] rounded-[5px] text-[#fff] ml-1">
              비즈니스 가치
            </span>
            를 창출해 나가고 있습니다.
          </p>

          <ul className="border-l-[4px] border-[#06bcd7] pl-12 flex flex-col gap-4 list-disc">
            <li>
              회사와 팀의 성장에 도움이 되는 일을 최우선시하며, 이를 통해 개발자와 비즈니스 가치를
              창출합니다.
            </li>
            <li>
              <span className="bg-[#06bcd7] py-[2px] px-[5px] rounded-[5px] text-[#fff]">
                능동적인 커뮤니케이션 및 협업
              </span>
              으로 문제 해결 및 비즈니스 성장에 적극적으로 뛰어들고 있습니다.
            </li>
            <li>
              <span className="bg-[#06bcd7] py-[2px] px-[5px] rounded-[5px] text-[#fff]">
                하루키의 법칙
              </span>
              을 매일매일 실천하고 있습니다.
            </li>
            <li>개발하는 것이 즐겁습니다.</li>
          </ul>

          <div className="my-[30px] flex flex-row gap-4">
            <div>
              <MdEmail className="w-[30px] h-[30px]" />
            </div>
            <div className="cursor-pointer">
              <FaGithub className="w-[30px] h-[30px]" />
            </div>
            <div>
              <SiVelog className="w-[30px] h-[30px]" />
            </div>
          </div>
          <p className="text-[30px] text-[#06bcd7] mt-[50px]">Education</p>
          <div>
            <p>서울과학기술대학교 (2014.03 ~ 2022.02)</p>
            <p className="font-thin text-[14px]">- 건설시스템디자인공학과</p>
          </div>
          <p className="text-[30px] text-[#06bcd7] mt-[50px]">SKILLS</p>
          <div>
            <p className="text-[20px] font-black">Frontend</p>
            <ul className="ml-6 mt-2 gap-2 flex flex-col">
              <li>Javascript, Typescript, React, React-Native, Next.js</li>
              <li>css-in-js, tailwindcss</li>
              <li>Flutter</li>
              <li>Electron</li>
            </ul>
          </div>
          <div>
            <p className="text-[20px] font-black">Backend</p>
            <ul className="ml-6 mt-2 gap-2 flex flex-col">
              <li>Node.js, Nest.js</li>
              <li>PostgresQL, MongoDB</li>
            </ul>
          </div>
          <div>
            <p className="text-[20px] font-black">DevOps</p>
            <ul className="ml-6 mt-2 gap-2 flex flex-col">
              <li>Docker, AWS, Git-Actions</li>
            </ul>
          </div>
          <p className="text-white">a</p>
          <p className="text-white">a</p>
          <p className="text-white">a</p>
        </div>
      </div>
    </section>
  );
};

export default About;
