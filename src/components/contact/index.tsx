'use client';

import { ButtonUp } from '@/components/common/ButtonUp';
import { useMoveToSection } from '@/hooks/useMoveToSection';
import { SECTION } from '@/enum';

const Contact = (): JSX.Element => {
  const { handleMove } = useMoveToSection();
  return (
    <section id={SECTION.contact} className="w-screen h-screen bg-red-300 relative">
      <div className="absolute w-full flex justify-center top-[85%] md:top-3/4">
        <ButtonUp onClick={() => handleMove(SECTION.blog)} />
      </div>
    </section>
  );
};

export default Contact;
