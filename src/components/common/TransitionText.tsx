'use client';

import { useEffect, useState } from 'react';
import TextTransition, { presets } from 'react-text-transition';

interface TransitionTextProps {
  texts: string[];
}

/**
 * @param {string[]} texts 텍스트 애니메이션에 들어갈 텍스트들
 * @returns {JSX.Element}
 */
const TransitionText = ({ texts }: TransitionTextProps): JSX.Element => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000, // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <h1 className="text-[50px] h-[80px]">
      <TextTransition springConfig={presets.wobbly}>{texts[index % texts.length]}</TextTransition>
    </h1>
  );
};

export default TransitionText;
