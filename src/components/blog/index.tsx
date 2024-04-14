'use client';

import Item from '@/components/common/Item';
import TransitionText from '@/components/common/TransitionText';
import DetailPortfolioModal from '@/components/modal/detail-portfolio.modal';
import { useDialog } from '@/context/dialogContext';
import { SECTION } from '@/enum';

/**
 * @description Blog Section
 * @returns {JSX.Element}
 */
const Blog = (): JSX.Element => {
  const { setDialog } = useDialog();
  // const handleItemClick = (): void => {
  //   setDialog({
  //     title: 'hello',
  //     html: <DetailPortfolioModal />,
  //   });
  // };

  return (
    <section id={SECTION.blog} className="w-screen h-screen bg-white overflow-scroll relative">
      <div className="w-full h-screen flex flex-row justify-center">
        <div className="max-w-[1000px] w-full h-screen flex flex-col gap-6 py-[100px] px-[20px] md:px-[0px]">
          <TransitionText className="pl-[10px]" texts={['Blog', 'in-ch']} />
          <div className="grid sm:grid-cols-3 ipadPro:grid-cols-3 md:grid-cols-2 gap-[70px] px-[20px] my-[20px] pb-[200px] justify-center">
            {/* <Item handleClick={handleItemClick} />
            <Item handleClick={handleItemClick} />
            <Item handleClick={handleItemClick} />
            <Item handleClick={handleItemClick} />
            <Item handleClick={handleItemClick} />
            <Item handleClick={handleItemClick} />
            <Item handleClick={handleItemClick} />
            <Item handleClick={handleItemClick} />
            <Item handleClick={handleItemClick} /> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
