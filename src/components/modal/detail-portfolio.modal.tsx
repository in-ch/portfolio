import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';

import { Carousel, CarouselApi, CarouselContent, CarouselItem } from '@/components/carousel';
import { ItemType } from '@/types';
import { itemState } from '@/atom';

/**
 * @description 포트폴리오 상세보기 Modal
 * @returns {JSX.Element}
 */
const DetailPortfolioModal = ({ item }: { item: ItemType }): JSX.Element => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const [, setItemRecoil] = useRecoilState(itemState);

  useEffect(() => {
    setItemRecoil(item);
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
            {item.imgs.map((img: string) => {
              return (
                <CarouselItem key={`carousel-item-${img}`}>
                  <Image src={img} alt="sample" width={1000} height={400} />
                </CarouselItem>
              );
            })}
          </CarouselContent>
        </Carousel>
      </div>
      <div className="relative top-[-20px] float-end w-[50px] h-[20px] bg-black opacity-70 flex justify-center items-center">
        <p className="text-white text-[12px]">
          {current} / {count}
        </p>
      </div>

      <div className="">
        <p className="text-[22px] font-bold mt-4">{item.title}</p>
        <p className="text-[14px] text-[#818181]">{item.date}</p>
        <div className="mt-2 overflow-scroll">
          {item.description.map((des: string) => {
            return <p key={`item-description-${des}`}>{des}</p>;
          })}
        </div>
      </div>
    </div>
  );
};

export default DetailPortfolioModal;
