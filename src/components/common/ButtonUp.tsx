'use client';

import { TbArrowBigUpLinesFilled } from 'react-icons/tb';
import { useRecoilValue } from 'recoil';

import { headerShowState } from '@/atom';

interface Props {
  onClick: () => void;
}

/**
 * @param {() => void} onClick
 * @description 커몬 버튼
 * @returns {React.ReactElement}
 */
export const ButtonUp = ({ onClick }: Props): React.ReactElement => {
  const headerShow = useRecoilValue(headerShowState);

  return (
    <button
      onClick={onClick}
      className="relative w-24 h-24 cursor-pointer flex justify-center items-center z-10"
    >
      {!headerShow && (
        <>
          <div className="w-12 h-12 bg-black bg-opacity-40 rounded-full absolute animate-pulse"></div>
          <TbArrowBigUpLinesFilled className="text-white text-opacity-90 text-2xl" />
        </>
      )}
    </button>
  );
};
