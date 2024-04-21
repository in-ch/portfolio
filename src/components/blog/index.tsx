'use client';

import Link from 'next/link';

import TransitionText from '@/components/common/TransitionText';
import BlogItem from '@/components/common/blog-item';
import { SECTION } from '@/enum';
import { BlogType } from '@/types';

/**
 * @description Blog Section
 * @returns {JSX.Element}
 */
const Blog = (): JSX.Element => {
  const data: BlogType[] = [
    {
      title: '[회고] Chrome debugging tool의 performance 측정을 통해 UI 스레드 최적화하기',
      description: 'Chrome debugging tool을 생활화합시다.',
      img: 'https://velog.velcdn.com/images/sxin2949/post/83c90c75-8fea-46e0-8a68-85f026f64fe2/image.gif',
      date: '2024.04.21',
      link: 'https://velog.io/@sxin2949/%ED%9A%8C%EA%B3%A0-Chrome-debugging-tool%EC%9D%98-performance-%EC%B8%A1%EC%A0%95%EC%9D%84-%ED%86%B5%ED%95%B4-UI-%EC%8A%A4%EB%A0%88%EB%93%9C-%EC%B5%9C%EC%A0%81%ED%99%94%ED%95%98%EA%B8%B0',
    },
    {
      title: 'nestjs에서 redis cache를 활용해 api call 최적화하기',
      description: 'NestJs에 Redis와 cache manager를 결합하여 API 호출을 최적화 해봅시다.',
      img: 'https://velog.velcdn.com/images/sxin2949/post/362d8533-695b-402b-a2b8-0e68ef799dbb/image.png',
      date: '2024.04.14',
      link: 'https://velog.io/@sxin2949/%EA%BF%80%ED%8C%81-nestjs%EC%97%90%EC%84%9C-redis-cache%EB%A5%BC-%ED%99%9C%EC%9A%A9%ED%95%B4-api-call-%EC%B5%9C%EC%A0%81%ED%99%94%ED%95%98%EA%B8%B0',
    },
    {
      title: '리액트의 state는 불변합니다.',
      description:
        '리액트는 상태(state)를 설정할 때는 새로운 값을 전달하지 않으면 컴포넌트를 다시 렌더링하지 않습니다.',
      img: 'https://velog.velcdn.com/images/sxin2949/post/f083e84e-6524-40a3-bc7b-0236db4d99b0/image.png',
      date: '2024.3.24',
      link: 'https://velog.io/@sxin2949/%EB%B2%88%EC%97%AD-State-in-React-is-Immutable',
    },
    {
      title: '모달창 개선 작업 회고 ',
      description: '자주 사용되던 컴포넌트 중에 하나인 모달창을 개선하는 작업을 진행하였습니다',
      img: 'https://velog.velcdn.com/images/sxin2949/post/22b99027-855d-4419-934c-77e46a8131de/image.png',
      date: '2024.03.04',
      link: 'https://velog.io/@sxin2949/%EA%BF%80%ED%8C%81-Lighthouse-CI%EC%99%80-GitHub-Actions%EB%A5%BC-%ED%86%B5%ED%95%9C-%EC%9B%B9-%EC%84%B1%EB%8A%A5-%EB%AA%A8%EB%8B%88%ED%84%B0%EB%A7%81%EA%B3%BC-Slack-%EC%95%8C%EB%A6%BC-%EC%97%B0%EB%8F%99%ED%95%98%EA%B8%B0',
    },
    {
      title: 'NestJS에서 S3에 이미지 업로드 시 워터마크 추가하기',
      description:
        '이미지를 업로드하고 웹사이트나 애플리케이션에서 업로드된 이미지를 사용할 때, 종종 워터마크를 추가하는 것은 이미지의 소유권을 보호하고 브랜딩을 강화하는 데에 유용합니다.',
      img: 'https://velog.velcdn.com/images/sxin2949/post/1dc436f8-cf44-442b-a0fa-d5dd3b1c9fe9/image.png',
      date: '2024.02.26',
      link: 'https://velog.io/@sxin2949/%EA%BF%80%ED%8C%81-NestJS%EC%97%90%EC%84%9C-S3%EC%97%90-%EC%9D%B4%EB%AF%B8%EC%A7%80-%EC%97%85%EB%A1%9C%EB%93%9C-%EC%8B%9C-%EC%9B%8C%ED%84%B0%EB%A7%88%ED%81%AC-%EC%B6%94%EA%B0%80%ED%95%98%EA%B8%B0',
    },
    {
      title: 'BFcache를 극복해보자',
      description: 'BFCache는 "Back-Forward Cache"의 약자입니다.',
      img: 'https://velog.velcdn.com/images/sxin2949/post/f7dea637-c7a3-4385-9afc-2d9d936d0cf4/image.gif',
      date: '2024.02.03',
      link: 'https://velog.io/@sxin2949/%EA%BF%80%ED%8C%81-BFcache%EB%A5%BC-%EA%B7%B9%EB%B3%B5%ED%95%B4%EB%B3%B4%EC%9E%90-1',
    },
    {
      title: 'axios-debug-log를 통해 React Server Component에서 네트워크 트래픽 디버깅 쉽게 하기',
      description:
        '@tanstack/react-query를 활용해 React Server Component에서 SSR을 구현했다. 문제는 RSC에서 API를 fetch하는 과정에서 다음과 같은 오류가 발생했다 ! 왜 이런 문제가 발생할까?',
      img: 'https://velog.velcdn.com/images/sxin2949/post/6aa55250-07ce-4191-a940-cbc913227be4/image.png',
      date: '2024.01.10',
      link: 'https://velog.io/@sxin2949/%ED%97%A4%EB%94%A9-axios-debug-log%EB%A5%BC-%ED%86%B5%ED%95%B4-React-Server-Component%EC%97%90%EC%84%9C-%EB%84%A4%ED%8A%B8%EC%9B%8C%ED%81%AC-%ED%8A%B8%EB%9E%98%ED%94%BD-%EB%94%94%EB%B2%84%EA%B9%85-%EC%89%BD%EA%B2%8C-%ED%95%98%EA%B8%B0',
    },
    {
      title: 'React의 tearing 현상과 React v18의 동시성 렌더링 문제점',
      description:
        'Suspense와 startTransition같은 동시적 렌더링을 사용할 때 다른 작업을 수행하기 위한 방식은 Tearing 현상을 유발할 수 있다 !',
      img: 'https://velog.velcdn.com/images/sxin2949/post/cf4ed856-0d04-472e-8e0b-aaaac1975cc2/image.webp',
      date: '2024.01.06',
      link: 'https://velog.io/@sxin2949/React%EC%9D%98-tearing-%ED%98%84%EC%83%81%EA%B3%BC-React-v18%EC%9D%80-%EB%8F%99%EC%8B%9C%EC%84%B1-%EB%A0%8C%EB%8D%94%EB%A7%81%EC%9D%84-%ED%86%B5%ED%95%B4-%EC%9D%B4%EB%A5%BC-%EC%96%B4%EB%96%BB%EA%B2%8C-%EA%B7%B9%EB%B3%B5%ED%96%88%EB%82%98',
    },
    {
      title: 'Union Type을 쓸 때 Type Guard를 활용하여 단점 극복하기',
      description:
        'Type Guard란 변수의 타입을 좁혀나가는 역할을 하는 특별한 코드 패턴이다. 이를 활용해서 Union Type의 컴파일 에러를 극복해보자 !',
      img: 'https://velog.velcdn.com/images/sxin2949/post/aaf2f5e9-b5f6-45af-9ed3-1d5a669e53b2/image.png',
      date: '2023.12.18',
      link: 'https://velog.io/@sxin2949/Typescript-Union-Type%EC%9D%84-%EC%93%B8-%EB%95%8C-Type-Guard%EB%A5%BC-%ED%99%9C%EC%9A%A9%ED%95%98%EC%97%AC-%EB%8B%A8%EC%A0%90-%EA%B7%B9%EB%B3%B5%ED%95%98%EA%B8%B0',
    },
  ];
  return (
    <section id={SECTION.blog} className="w-screen h-screen bg-white overflow-scroll relative">
      <div className="w-full h-screen flex flex-row justify-center">
        <div className="max-w-[1000px] w-full h-screen flex flex-col gap-6 py-[100px] px-[20px] md:px-[0px]">
          <TransitionText className="pl-[10px]" texts={['Blog', 'in-ch']} />
          <div className="grid sm:grid-cols-3 ipadPro:grid-cols-3 md:grid-cols-2 gap-[70px] px-[20px] mt-[20px] pb-[30px] justify-center">
            {data.map((_data) => {
              return <BlogItem key={`blog-item-${_data.title}`} data={_data} />;
            })}
          </div>
          <button className="pb-[200px]">
            <Link href="https://velog.io/@sxin2949/posts" target="_blank">
              <p>더보기</p>
            </Link>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Blog;
