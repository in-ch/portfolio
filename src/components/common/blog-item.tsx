import Image from 'next/image';
import Link from 'next/link';

import { BlogType } from '@/types';

interface BlogProps {
  data: BlogType;
}

/**
 * @description Blog 컴포넌트
 * @param {BlogType} data
 * @returns {JSX.Element}
 */
const BlogItem = ({ data }: BlogProps): JSX.Element => {
  return (
    <Link href={data.link} target="_blank">
      <div className="ipadMini:w-[200px] ipadPro:w-[270px] ipadPro:h-[280px]  ipadMini:h-[200px] w-[270px] h-[280px] bg-white rounded-[10px] shadow-md cursor-pointer hover:shadow-xs hover:animate-custom-ping">
        <div className="w-full h-[160px] border overflow-hidden">
          <Image src={data.img} alt="sample" width={1000} height={300} />
        </div>
        <div className="px-[12px] pt-[10px]">
          <p className="text-[18px] font-bold mt-2 overflow-hidden text-ellipsis whitespace-nowrap">
            {data.title}
          </p>
          <p className="mt-2 overflow-hidden text-ellipsis whitespace-nowrap">{data.description}</p>
          <p className="text-[14px] text-[#818181] mt-2">{data.date}</p>
        </div>
      </div>
    </Link>
  );
};

export default BlogItem;
