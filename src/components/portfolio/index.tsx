'use client';

import TransitionText from '@/components/common/TransitionText';
import Item from '@/components/common/Item';
import { SECTION } from '@/enum';

/**
 * @description Portfolio Section
 * @returns {JSX.Element}
 */
const Portfolio = (): JSX.Element => {
  return (
    <section
      id={SECTION.portfolio}
      className="w-screen h-screen bg-[#f8f8f8] relative overflow-scroll"
    >
      <div className="w-full h-screen flex flex-row justify-center">
        <div className="max-w-[1000px] w-full h-screen flex flex-col gap-6 py-[60px] md:py-[100px] px-[20px] md:px-[0px]">
          <TransitionText texts={['Portfolio', 'in-ch']} />
          <div className="grid sm:grid-cols-3 md:grid-cols-2 gap-[70px] my-[40px] pb-[40px] justify-center">
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
