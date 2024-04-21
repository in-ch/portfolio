'use client';

import { FaGithub } from 'react-icons/fa6';
import { SiVelog } from 'react-icons/si';
import { MdEmail } from 'react-icons/md';
import Link from 'next/link';

import TransitionText from '@/components/common/TransitionText';
import ContributeView from '@/components/about/contribute-view';
import { SECTION } from '@/enum';

/**
 * @description About Section
 * @returns {JSX.Element}
 */
const About = (): JSX.Element => {
  return (
    <section id={SECTION.about} className="w-screen h-screen font-bold relative overflow-scroll">
      <div className="w-full h-screen flex flex-row justify-center">
        <div className="max-w-[1000px] w-full h-screen flex flex-col gap-6 py-[60px] md:py-[100px] px-[20px] ipadPro:px-[0px]">
          <TransitionText texts={['성인철', 'in-ch']} />
          <div className="h-8" />
          <p>안녕하세요.</p>
          <p>
            현재 회사에서 그룹 치료 비대면 플랫폼 및 소프트웨어의 라이센스 관리를 위한 어드민 콘솔
            개발, 유지 보수를 담당하고 있습니다.
          </p>
          <p>
            단순한 페이지 구현 보다는 사용자 입장에서 고도화를 위한
            <span className="bg-primary py-[2px] px-[5px] rounded-[5px] text-[#fff] ml-1">
              최적화 및 사용성 개선
            </span>
            등을 고려하며 개발을 진행하고 있습니다.
          </p>
          <p>
            커뮤니케이션에 있어서는 적극적으로 의견을 나누며 어려움을 두지 않습니다. 상대방의 의견을
            존중하고 수용 하는 것을 어려워하지 않습니다. 마지막으로 하루 하루 노력하고 성장하는
            모습을 바탕으로, 협업과 문제 해결에서
            <span className="bg-primary py-[2px] px-[5px] rounded-[5px] text-[#fff] ml-1">
              비즈니스 가치
            </span>
            를 창출해 나가고 있습니다.
          </p>

          <ul className="border-l-[4px] border-primary pl-12 flex flex-col gap-4 list-disc">
            <li>
              회사와 팀의 성장에 도움이 되는 일을 최우선시하며, 이를 통해 개발자와 비즈니스 가치를
              창출합니다.
            </li>
            <li>
              <span className="bg-primary py-[2px] px-[5px] rounded-[5px] text-[#fff]">
                능동적인 커뮤니케이션 및 협업
              </span>
              으로 문제 해결 및 비즈니스 성장에 적극적으로 뛰어들고 있습니다.
            </li>
            <li>
              <span className="bg-primary py-[2px] px-[5px] rounded-[5px] text-[#fff]">
                하루키의 법칙
              </span>
              을 매일 매일 실천하고 있습니다.
            </li>
            <li>개발하는 것이 즐거워 훈련소에 개발 관련 서적을 들고가 뺏긴 전적이 있습니다.</li>
          </ul>

          <div className="my-[30px] flex flex-row gap-4 z-[2] w-[200px]">
            <Link href="mailto:sxin2949@naver.com">
              <MdEmail className="w-[30px] h-[30px]" />
            </Link>
            <Link href="https://github.com/in-ch" target="_blank" className="cursor-pointer">
              <FaGithub className="w-[30px] h-[30px]" />
            </Link>
            <Link href="https://velog.io/@sxin2949" target="_blank">
              <SiVelog className="w-[30px] h-[30px]" />
            </Link>
          </div>
          <p className="text-[30px] text-primary mt-[50px]">CAREER</p>
          <div className="pb-[20px]">
            <p className="text-[20px] font-black">네오펙트</p>
            <p className="text-[14px]">Frontend Engineer</p>
            <p className="text-[14px] text-[#6e6e6e]">2022.04 ~ 재직 중</p>
            <ContributeView
              title="[비대면 그룹 진료 플랫폼 개발]"
              subs={[
                '비대면 진료 플랫폼인 Neofect Home Portal 제품의 유지 보수를 진행하고 있습니다.',
                'WebRTC를 활용하여 그룹 채팅 기능을 실시할 수 있는 홈스피탈 제품군을 신규로 개발하고 있습니다.',
              ]}
              lis={[
                '- Vue 기반의 서비스를 Next.js의 React 기반으로 주도적 마이그레이션',
                '- WebRTC를 활용한 비대면 화상 채팅 서비스 개발',
                '- WebRTC를 활용한 원격 컨텐츠 실행 기능 개발',
              ]}
            />
            <ContributeView
              title="[어드민 전용 사내 아토믹 컴포넌트 라이브러리 시스템 개발]"
              subs={[
                '개별적으로 분리된 사내 어드민의 UI 통일을 위해 재사용 가능한 ui 컴포넌트를 설계 및 개발, 배포를 진행하였습니다.',
                'storybook 을 통해 개발된 컴포너트들의 문서화를 진행하였습니다.',
              ]}
              lis={[
                '- module들을 관리하기 위한 모노레포 시스템 구축',
                '- 사내 nexus 서버을 활용한 패키지 배포 및 Bitbucket pipeline을 활용한 자동화된 워크플로 구축',
                '- Storybook을 통한 컴포넌트 문서화',
              ]}
            />
            <ContributeView
              title="스마트 제품군 라이센스 관리 어드민 마이그레이션 및 신규 개발 작업"
              subs={[
                'B2B 제품의 컨텐츠를 선택, 판매할 수 있는 신규 어드민을 개발하였습니다. ',
                '기존 분리되어 있던 어드민들의 통합하는 작업을 진행하였습니다.',
              ]}
              lis={[
                '- Vue 기반의 서비스를 React 기반으로 주도적 마이그레이션',
                '- 해외 법인들을 위해 i18n을 활용한 다국어 지원',
                '- Optimistic Updates를 활용한 api 호출 최적화',
              ]}
            />
            <ContributeView
              title="[네오펙트 웹 유지 보수]"
              subs={[
                '페이지 유지 보수를 비롯해 비즈니스의 요구에 맞는 다양한 기능들 및 페이지를 추가 개발하였습니다.',
                'i18n을 활용해 다국어 페이지를 구현 및 Zapier webhook을 활용해 비지니스 문의를 해외 법인에 자동 트래킹될 수 있도록 하였습니다.',
              ]}
              lis={[
                '- Lighthouse 점수 개선: 평균 80점 대 점수에서 95점 점수까지 향상',
                '- TBT(Total Blocking Time) 개선 (LCP 4.2s 1.4s로 개선, Cumulative Layout Shift 개선)',
                '- 네이버 맵과 구글맵을 활용하여 사용병원 및 기관 페이지 개발 (https://www.neofect.com/kr/clinical-partners)',
                '- Zapier Webhook을 통한 국가별 문의 분기 처리',
                '- 상품 상세 페이지 추가 개발 등',
              ]}
            />
          </div>
          <div className="pb-[20px]">
            <p className="text-[20px] font-black">루빗</p>
            <p className="text-[14px]">Frontend Engineer</p>
            <p className="text-[14px] text-[#6e6e6e]">2021.06 ~ 2021.10</p>
            <ContributeView
              title="[루빗 앱 ui 개선 작업 참여]"
              subs={[
                '50만 회원을 가진 습관관리 앱의 ui 개선 작업에 참여하였습니다.',
                'GraphQL을 활용한 Web Socket을 개발하였습니다.',
              ]}
              lis={[
                '- Web Socket을 활용한 채팅 시스템 개발',
                '- React Native를 활용한 ui 개선 작업 참여',
              ]}
            />
          </div>
          <div className="pb-[20px]">
            <p className="text-[20px] font-black">대원메디칼</p>
            <p className="text-[14px]">Frontend Engineer</p>
            <p className="text-[14px] text-[#6e6e6e]">2021.03 ~ 2021.12</p>
            <ContributeView
              title="[홈페이지 마이그레이션]"
              subs={[
                'php 기반으로 개발되어 있던 홈페이지를 Next.js 프레임워크를 활용하여',
                'React 프로젝트로 마이그레이션을 진행하였습니다.',
                'AWS의 ECR 및 Github Actions를 활용해 ci/cd를 구축하였습니다.',
                'Nest.js를 활용하여 백엔드 시스템을 구축하였습니다.',
              ]}
              lis={[
                '- 레거시 서비스를 React 기반으로 마이그레이션 작업',
                '- Git Actions를 활용하여 CI/CD 시스템 구축',
                '- AWS ECR를 활용하여 도커 이미지 관리',
                '- AWS EC2, Load Balancer, Route 53, Docker를 활용한 서비스 배포',
              ]}
            />
          </div>
          <p className="text-[30px] text-primary mt-[50px]">Education</p>
          <div>
            <p>서울과학기술대학교 (2014.03 ~ 2022.02)</p>
            <p className="font-thin text-[14px]">- 건설시스템디자인공학과</p>
          </div>
          <p className="text-[30px] text-primary mt-[50px]">SKILLS</p>
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
