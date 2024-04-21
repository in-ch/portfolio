import Image from 'next/image';

import { ItemType } from '@/types';

interface ItemProps {
  data: ItemType;
  handleClick: () => void;
}

/**
 * @param {() => void} handleClick item 컴포넌트 클릭 이벤트
 * @description Item 컴포넌트
 * @returns {JSX.Element}
 */
const Item = ({ data, handleClick }: ItemProps): JSX.Element => {
  return (
    <div
      onClick={handleClick}
      className="ipadMini:w-[200px] ipadPro:w-[270px] ipadPro:h-[260px]  ipadMini:h-[200px] w-[270px] h-[260px] bg-white rounded-[10px] shadow-md cursor-pointer hover:shadow-xs hover:animate-custom-ping"
    >
      <Image src={data.imgs[0]} alt="sample" width={1000} height={400} />
      <div className="px-[12px] pt-[10px]">
        <p className="text-[18px] font-bold mt-2 overflow-hidden text-ellipsis whitespace-nowrap">
          {data.title}
        </p>
        <p className="text-[14px] text-[#818181] mt-2">{data.date}</p>
      </div>
    </div>
  );
};

export default Item;
