'use client';

import { TypeAnimation } from 'react-type-animation';

import { Mountain } from '@/components/intro/Mountain';
import { SECTION } from '@/enum';

/**
 * @description Intro Section
 * @returns {JSX.Element}
 */
const Intro = (): JSX.Element => {
  return (
    <section
      id={SECTION.intro}
      className="text-9xl w-screenrelative font-bold h-screen overflow-hidden flex justify-center items-start pt-[120px] font-PyeongChangPeace"
    >
      <div className="w-3/4 desktop:w-2/4 ipadMini:w-3/5">
        <TypeAnimation
          className="text-[50px] md:text-[80px] ipadMini:text-[80px] desktop:text-[120px]"
          role="heading"
          cursor={false}
          sequence={[100, 'FRONTEND DEVELOPER']}
          wrapper="h5"
        />
        <TypeAnimation
          className="text-[25px] md:text-[50px] font-HakgyoansimWoojuR mt-10 ml-2 text-[#454545]"
          role="heading"
          cursor={false}
          sequence={[1000, 'in-ch']}
          wrapper="h5"
        />
      </div>
      <Mountain />
    </section>
  );
};

export default Intro;
