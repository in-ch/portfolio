'use client';

import { ButtonUp } from '@/components/common/ButtonUp';
import { ButtonDown } from '@/components/common/ButtonDown';
import { useMoveToSection } from '@/hooks/useMoveToSection';
import { SECTION } from '@/enum';

const Blog = (): JSX.Element => {
  const { handleMove } = useMoveToSection();
  return (
    <section id={SECTION.blog} className="w-screen h-screen bg-red-300 relative">
      <div className="absolute w-full flex justify-center top-[85%] md:top-3/4">
        <ButtonUp onClick={() => handleMove(SECTION.portfolio)} />
        <ButtonDown onClick={() => handleMove(SECTION.contact)} />
      </div>
    </section>
  );
};

export default Blog;
