'use client';

import TransitionText from '@/components/common/TransitionText';
import Item from '@/components/common/Item';
import DetailPortfolioModal from '@/components/modal/detail-portfolio.modal';
import { useDialog } from '@/context/dialogContext';
import { SECTION } from '@/enum';
import { ItemType } from '@/types';

/**
 * @description Portfolio Section
 * @returns {JSX.Element}
 */
const Portfolio = (): JSX.Element => {
  const { setDialog } = useDialog();
  const handleItemClick = (item: ItemType): void => {
    setDialog({
      title: 'hello',
      html: <DetailPortfolioModal item={item} />,
    });
  };

  const data = [
    {
      title: '[오픈소스] nextjs-tui-date-picker',
      description: [
        'NHN 사의 tui-date-picker를 Next.js에서 쉽고 한 번에 쓸 수 있도록 도와주는 ui 라이브러리입니다.',
        'tui-date-picker를 Next.js에서 사용해야 할 경우 dynamic import를 해야 합니다.',
        '이를 해결하기 위해 간단하게 해당 라이브러리만 쓰면 되게끔 구축하였습니다.',
        '모노레포 시스템으로 구축하였습니다.',
      ],
      imgs: ['https://in-ch.github.io/portfolio/images/tui-next-date-picker.gif'],
      date: '2022.12.01 - 2023.03.01',
      links: [
        { title: 'npm', link: 'https://www.npmjs.com/package/nextjs-tui-date-picker' },
        { title: 'Github', link: 'https://github.com/in-ch/nextjs-tui-date-picker' },
      ],
    },
    {
      title: '[오픈소스] react-file-folder',
      description: [
        '파일 목록을 손쉽게 보여주는 ui 컴포넌트입니다.',
        'Storybook을 활용해 라이브러리를 문서화하였습니다.',
        'react-toggle-list와 react-filder-list로 두 개의 라이브러리를 모노레포를 구축하였습니다.',
      ],
      imgs: ['https://in-ch.github.io/portfolio/images/react-toggle-file-tree.gif'],
      date: '2023.07.01 - 2023.09.01',
      links: [
        { title: 'npm', link: 'https://www.npmjs.com/package/nextjs-tui-date-picker' },
        { title: 'Github', link: 'https://github.com/in-ch/react-file-folder' },
        { title: 'Document', link: 'https://in-ch.github.io/react-file-folder/' },
      ],
    },
    {
      title: '케미온 컬러: 블루투스 LED 선글라스',
      description: [
        ' 컬러 애니메이션 프레임을 그릴 수 있는 앱을 신규 개발하였습니다.',
        '앱은 LED 선글라스에 블루투스 통신을 통해 애니메이션을 전송합니다.',
        '소리 측정을 통해 실시간 애니메이션을 제작하여 앱에 전송하는 기능을 추가 개발하였습니다.',
        '애니메이션을 더 쉽게 제작하기 위한 웹페이지를 신규로 개발하였습니다.',
      ],
      imgs: [
        'https://in-ch.github.io/portfolio/images/chemin-color-img-1.jpg',
        'https://in-ch.github.io/portfolio/images/chemin-color-img-2.jpg',
      ],
      date: '2023.01.01 - 2023.07.01',
      links: [
        {
          title: 'Android',
          link: 'https://play.google.com/store/search?q=chemion%20color&c=apps&hl=en-KR',
        },
        { title: 'ios', link: 'https://apps.apple.com/us/app/color-chemion/id1631477793' },
        { title: 'Web', link: 'https://creator.color.chemi-on.com' },
      ],
    },
    {
      title: '푸드제로: 음식물 유통기한 SNS 서비스',
      description: [
        ' 식품을 캘린더에 저장하고 유통 기한의 알림을 받는 앱입니다.',
        'sns 기능을 통해 식품을 공유할 수 있습니다.',
        'cron을 활용한 batch를 통해 알림 시스템을 구축하였습니다',
      ],
      imgs: [
        'https://in-ch.github.io/portfolio/images/food-zero-img-1.jpg',
        'https://in-ch.github.io/portfolio/images/food-zero-img-2.jpg',
      ],
      date: '2022.06.01 - 2022.09.01',
      links: [
        { title: 'Github Front', link: 'https://github.com/in-ch/food_zero' },
        { title: 'Github Backend', link: 'https://github.com/in-ch/food_zero_back' },
        {
          title: '디자인',
          link: 'https://inchisbest.s3.ap-northeast-2.amazonaws.com/fooro%E1%84%83%E1%85%B5%E1%84%8C%E1%85%A1%E1%84%8B%E1%85%B5%E1%86%AB.pdf',
        },
      ],
    },
    {
      title: '닥스팟: 병원 매물 서비스',
      description: [
        ' 병원 개원 입지 매물을 지도로 한 눈에 볼 수 있는 프로젝트입니다.',
        'Batch 프로그램을 통해 전국 병원 정보를 수집하여 개원 자리할 자리의 경쟁 업체를 확인할 수 있습니다.',
        'Slack API & Notion API를 활용하여 문의 요청 시 알림 및 수집할 수 있도록 하였습니다.',
      ],
      imgs: [
        'https://in-ch.github.io/portfolio/images/dospot-img-1.jpg',
        'https://in-ch.github.io/portfolio/images/dospot-img-2.jpg',
      ],
      date: '2023.09.01 - 2024.03.01',
      links: [
        { title: 'Web', link: 'https://medi-pots.com' },
        { title: 'Github Front', link: 'https://github.com/in-ch/medipot_front' },
        { title: 'Github Back', link: 'https://github.com/in-ch/medipot_back' },
        { title: 'Github App', link: 'https://github.com/in-ch/medipot_app' },
      ],
    },
    {
      title: '네오펙트: 비대면 진료 플랫폼',
      description: [
        ' 집에서 비대면으로 재활 운동을 할 수 있는 서비스입니다.',
        '환자는 치료사와 화상 채팅을 통해 재활 운동을 집에서 실시할 수 있습니다.',
        '주요 기여 사항으로 앱 유지 보수 및 마이그레이션 작업을 하였으며,',
        'WebRTC를 활용하여 신규 기능으로써',
        '그룹 화상 채팅 기능 구현을 진행하였습니다.',
      ],
      imgs: [
        'https://in-ch.github.io/portfolio/images/home-img-3.png',
        'https://in-ch.github.io/portfolio/images/home-img-2.png',
        'https://in-ch.github.io/portfolio/images/home-img-1.png',
      ],
      date: '2022.04.01 - 현재',
      links: [
        { title: '서비스 설명 보기', link: 'https://www.neofect.com/us/neofect-telerehab' },
        {
          title: '뉴스 기사 1',
          link: 'https://www.google.com/search?q=%EB%84%A4%EC%98%A4%ED%8E%99%ED%8A%B8+%ED%99%88%EC%8A%A4%ED%94%BC%ED%83%88&sca_esv=0bc39af9d1d15b37&sca_upv=1&sxsrf=ACQVn0_opqGOWYMYHfOA7SzF2WAIOzxg6A%3A1713107251262&source=hp&ei=M_EbZsSNDpyCvr0Pv8GtmAI&iflsig=ANes7DEAAAAAZhv_Q5MQnTxlm-Jp8hyJLi7UqX5hLFVY&udm=&ved=0ahUKEwiE86_p_cGFAxUcga8BHb9gCyMQ4dUDCBc&uact=5&oq=%EB%84%A4%EC%98%A4%ED%8E%99%ED%8A%B8+%ED%99%88%EC%8A%A4%ED%94%BC%ED%83%88&gs_lp=Egdnd3Mtd2l6IhnrhKTsmKTtjpntirgg7ZmI7Iqk7ZS87YOIMgUQIRigATIFECEYoAEyBRAhGKABSMMSUABY7hFwBHgAkAEFmAHPAaAB4xSqAQYwLjIwLjG4AQPIAQD4AQGYAgqgAvQFqAIKwgIKECMYgAQYigUYJ8ICDRAuGIAEGMcBGNEDGArCAggQABiABBixA8ICCxAAGIAEGLEDGIMBwgIHEC4YAxjUAsICBRAAGIAEwgIHECMY6gIYJ8ICERAuGIAEGLEDGIMBGMcBGNEDmAMBkgcDNC42oAevmgE&sclient=gws-wiz',
        },
        { title: '뉴스 기사 2', link: 'https://www.newspim.com/news/view/20220621000372' },
      ],
    },
    {
      title: '네오펙트 웹',
      description: [
        ' 회사의 다양한 제품군을 소개하는 홈페이지입니다.',
        'i18n을 활용해 다국어 페이지를 구현하였습니다.',
        'Zapier Webhook을 통해 비지니스 문의를 분기 처리하였습니다.',
        '지도 SDK를 통해 사용병원 및 기관 페이지를 개발하였습니다.',
      ],
      imgs: [
        'https://in-ch.github.io/portfolio/images/neofect-1-img.gif',
        'https://in-ch.github.io/portfolio/images/neofect-2-img.png',
        'https://in-ch.github.io/portfolio/images/neofect-3-img.png',
      ],
      date: '2022.04.01 - 현재',
      links: [{ title: 'Web', link: '' }],
    },
  ];

  return (
    <section
      id={SECTION.portfolio}
      className="w-screen h-screen bg-[#f8f8f8] relative overflow-scroll"
    >
      <div className="w-full h-screen flex flex-row justify-center">
        <div className="max-w-[1000px] w-full h-screen flex flex-col gap-6 py-[100px] px-[20px] md:px-[0px]">
          <TransitionText className="pl-[10px]" texts={['Portfolio', 'in-ch']} />
          <div className="grid sm:grid-cols-3 ipadPro:grid-cols-3 md:grid-cols-2 gap-[70px] px-[20px] my-[20px] pb-[200px] justify-center">
            {data.map((_data) => {
              return (
                <Item
                  key={`item-${_data.title}`}
                  data={_data}
                  handleClick={() => handleItemClick(_data)}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
