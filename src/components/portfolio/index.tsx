'use client';

import { ButtonUp } from '@/components/common/ButtonUp';
import { ButtonDown } from '@/components/common/ButtonDown';
import { SECTION } from '@/enum';
import { useMoveToSection } from '@/hooks/useMoveToSection';

const Portfolio = (): JSX.Element => {
  const { handleMove } = useMoveToSection();
  return (
    <section id={SECTION.portfolio} className="w-screen h-screen bg-red-300 relative">
      <div className="absolute w-full flex justify-center top-[85%] md:top-3/4">
        <ButtonUp onClick={() => handleMove(SECTION.about)} />
        <ButtonDown onClick={() => handleMove(SECTION.blog)} />
      </div>
    </section>
  );
};

export default Portfolio;
