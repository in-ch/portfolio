import Image from 'next/image';
import { useEffect, useState } from 'react';

import { Carousel, CarouselApi, CarouselContent, CarouselItem } from '@/components/carousel';

/**
 * @description 포트폴리오 상세보기 Modal
 * @returns {JSX.Element}
 */
const DetailPortfolioModal = (): JSX.Element => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className="">
      <div className="h-auto md:h-[260px]  overflow-hidden bg-[#f5f5f5]">
        <Carousel setApi={setApi} className="">
          <CarouselContent>
            <CarouselItem>
              <Image src="/sample.png" alt="sample" width={1000} height={400} />
            </CarouselItem>
            <CarouselItem>
              <Image src="/sample.png" alt="sample" width={1000} height={400} />
            </CarouselItem>
            <CarouselItem>
              <Image src="/sample.png" alt="sample" width={1000} height={400} />
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </div>
      <div className="relative top-[-20px] float-end w-[50px] h-[20px] bg-black opacity-70 flex justify-center items-center">
        <p className="text-white text-[12px]">
          {current} / {count}
        </p>
      </div>

      <div className="">
        <p className="text-[22px] font-bold mt-2">lorem ipsum</p>
        <p className="text-[14px] text-[#818181]">2022.06 - 2023.06</p>
        <div className="h-[210px] mt-2 overflow-scroll">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
            aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
            deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DetailPortfolioModal;
