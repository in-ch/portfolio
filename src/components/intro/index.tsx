'use client';

import { TypeAnimation } from 'react-type-animation';

import { Button } from '@/components/common/Button';
import { Mountain } from '@/components/intro/Mountain';

const Intro = () => {
  return (
    <section
      id="Intro"
      className="text-9xl w-screenrelative font-bold h-screen overflow-hidden flex justify-center items-start pt-[120px] font-PyeongChangPeace"
    >
      <div className="md:w-1/2 w-3/4">
        <TypeAnimation
          className="text-[50px] md:text-[120px]"
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
      <div className="absolute w-full flex justify-center top-3/4">
        <Button onClick={() => console.log('about')} />
      </div>
      <Mountain />
    </section>
  );
};

export default Intro;
