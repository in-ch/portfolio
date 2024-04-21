'use client';

import { useRecoilState } from 'recoil';

import { sectionState } from '@/atom';
import { ButtonDown } from '@/components/common/ButtonDown';
import { ButtonUp } from '@/components/common/ButtonUp';
import { NEXT_SECTION } from '@/enum';
import { useMoveToSection } from '@/hooks/useMoveToSection';

/**
 * @description 위로 가기, 아래로 가기 컴포넌트
 * @returns {JSX.Element}
 */
export default function Remote(): JSX.Element {
  const { handleMove } = useMoveToSection();
  const [sectionRecoil] = useRecoilState(sectionState);

  return (
    <main>
      <div className="fixed w-full flex justify-center top-[85%] md:top-3/4">
        {NEXT_SECTION[sectionRecoil]?.next && (
          <ButtonUp onClick={() => handleMove(NEXT_SECTION[sectionRecoil]!.next!)} />
        )}
        {NEXT_SECTION[sectionRecoil]?.prev && (
          <ButtonDown onClick={() => handleMove(NEXT_SECTION[sectionRecoil]!.prev!)} />
        )}
      </div>
    </main>
  );
}
